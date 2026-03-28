const express = require('express');
const router = express.Router();
const pool = require('../db');
const nodemailer = require('nodemailer');

// Set up transporter for email
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE === 'true', 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Create table on module load if not exists
const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS demo_requests (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        job_title VARCHAR(150),
        company VARCHAR(150),
        join_sales BOOLEAN DEFAULT FALSE,
        join_technical BOOLEAN DEFAULT FALSE,
        newsletter BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Add new columns to existing table dynamically without dropping it
    await pool.query(`ALTER TABLE demo_requests ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'new'`);
    await pool.query(`ALTER TABLE demo_requests ADD COLUMN IF NOT EXISTS remarks TEXT DEFAULT ''`);

    console.log("Demo requests table initialized.");
  } catch (err) {
    console.error("Failed to initialize demo table:", err);
  }
};
initDB();

// Get all demo requests (for the admin page)
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM demo_requests ORDER BY created_at DESC');
    res.json({ requests: result.rows });
  } catch (err) {
    console.error("Error fetching demo requests:", err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Update status and remarks
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status, remarks } = req.body;
    
    const result = await pool.query(
      'UPDATE demo_requests SET status = $1, remarks = $2 WHERE id = $3 RETURNING *',
      [status, remarks, id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Request not found" });
    }
    res.json({ message: "Updated successfully", data: result.rows[0] });
  } catch (err) {
    console.error("Error updating demo request:", err);
    res.status(500).json({ error: "Failed to update data" });
  }
});

router.post('/', async (req, res) => {
  try {
    const { email, firstName, lastName, jobTitle, company, joinSales, joinTechnical, newsletter } = req.body;
    
    // Basic validation
    if (!email || !firstName || !lastName) {
      return res.status(400).json({ error: "Email, first name and last name are required." });
    }

    const newRequest = await pool.query(
      `INSERT INTO demo_requests (email, first_name, last_name, job_title, company, join_sales, join_technical, newsletter)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [email, firstName, lastName, jobTitle, company, joinSales, joinTechnical, newsletter]
    );

    res.status(201).json({ message: "Demo requested successfully", data: newRequest.rows[0] });

    // Send Admin Email (runs in background)
    if (process.env.SMTP_USER && process.env.ADMIN_EMAIL) {
      transporter.sendMail({
        from: `"KactusLab Alerts" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL, 
        subject: `New Demo Request from ${firstName} ${lastName}`,
        html: `
          <h3>New Demo Request</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Job Title:</strong> ${jobTitle || "Not provided"}</p>
          <p><strong>Interested in:</strong> ${joinSales ? 'Sales Experts, ' : ''}${joinTechnical ? 'Technical Experts' : ''}</p>
          <p><strong>Newsletter Subscription:</strong> ${newsletter ? 'Yes' : 'No'}</p>
        `
      }).catch(err => console.error("Failed to send admin email:", err));
    }
  } catch (err) {
    console.error("Error saving demo request:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
