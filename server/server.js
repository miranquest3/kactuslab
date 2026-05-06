
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require("dotenv").config({ path: require("path").join(__dirname, ".env") });
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const session = require('express-session')
const pool = require('./db')
require('./googleAuth')

const authRoutes = require('./routes/auth')
const demoRoutes = require('./routes/demo')
const path = require("path")

const app = express()
const isProduction = process.env.NODE_ENV === "production";

app.use(cors({
  origin: true,          // allow production domain
  credentials: true
}))

app.use(express.json())

app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax"
  }
}))

app.use(passport.initialize())
app.use(passport.session())

// ✅ API routes FIRST
app.use('/api/auth', authRoutes)
app.use('/api/demo', demoRoutes)


// ✅ THEN serve frontend
app.use(express.static(path.join(__dirname, "../dist")))

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
)
