import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  const lastUpdated = "April 22, 2026";

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-24 pb-20">
      <div className="container-p max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#0b3b2e] mb-2">Privacy Policy</h1>
          <p className="text-emerald-600 font-medium mb-8">KactusLabs.AI</p>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-emerald-100/50">
            <p className="text-slate-500 text-sm mb-12 italic">Last Updated: {lastUpdated}</p>

            <section className="space-y-12 text-slate-700 leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-[#0b3b2e] mb-4">1. INTRODUCTION</h2>
                <div className="space-y-4">
                  <p>
                    KactusLabs.AI (“KactusLabs”, “we”, “our”, or “the Platform”) is an artificial intelligence–powered infrastructure designed to assist fashion brands, e-commerce retailers and digital merchants in scaling their operations through advanced technologies including Virtual Try-On systems, AI-assisted product visualization, automated sizing intelligence, conversational commerce tools, analytics systems and behavioral marketing automation.
                  </p>
                  <p>
                    This Privacy Policy explains how KactusLabs.AI collects, processes, stores, protects and uses data in connection with the services offered through the KactusLabs.AI platform, including integrations with third-party commerce ecosystems such as Shopify and other e-commerce infrastructures. KactusLabs.AI operates primarily as a business-to-business technology service provider. Accordingly, in many cases KactusLabs processes information on behalf of fashion brands, retailers and other merchant partners (collectively referred to as “Business Clients”).
                  </p>
                  <p>
                    In such circumstances, KactusLabs functions as a technology processor and infrastructure provider, while the Business Client remains the primary controller of its customer data.
                  </p>
                  <p className="font-medium text-[#0b3b2e] pt-2">The purpose of this Privacy Policy is to provide clear and comprehensive transparency regarding:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>The categories of information processed by the Platform.</li>
                    <li>The circumstances under which such information is processed.</li>
                    <li>The degree of data access required for each service module.</li>
                    <li>The rights and choices available to Business Clients and end-users.</li>
                    <li>The safeguards implemented to protect personal, commercial, and behavioral information.</li>
                  </ul>
                  <p className="pt-4">
                    KactusLabs recognizes that the services provided by the Platform rely upon advanced data processing technologies. As such, this policy has been designed to reflect industry best practices, evolving regulatory standards, and the operational requirements of modern AI-driven commerce systems.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0b3b2e] mb-4">2. SCOPE OF THIS POLICY</h2>
                <p className="mb-4">This Privacy Policy applies to all services provided by KactusLabs.AI including but not limited to:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {[
                    "Virtual Try-On Technology",
                    "AI Size Recommendation Systems",
                    "AI Photoshoot Studio",
                    "AI Fashion Coach",
                    "WhatsApp Marketing Automation",
                    "Analytics Dashboards",
                    "Find My Outfit Visual Search",
                    "Behavioral Promotion Systems",
                    "Shopify/E-commerce Integrations"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {item}
                    </div>
                  ))}
                </div>
                <p>This policy governs the handling of information in relation to:</p>
                <ol className="list-decimal pl-5 space-y-2 mt-2">
                  <li>Business Clients using KactusLabs services;</li>
                  <li>End-users or shoppers interacting with features powered by the Platform;</li>
                  <li>Technical integrations with third-party commerce, messaging, analytics, or marketing platforms.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0b3b2e] mb-4">3. BUSINESS CLIENT DATA CONTROL MODEL</h2>
                <div className="space-y-4">
                  <p>
                    KactusLabs.AI has been designed to operate with a flexible data architecture that allows Business Clients to determine the level of data access they wish to grant to the Platform depending on the services they choose to activate. Business Clients may choose between different levels of operational integration.
                  </p>
                  <p>
                    Accordingly, the volume and categories of data processed by the Platform may vary depending on the specific services that a Business Client elects to use. KactusLabs does not require the full spectrum of data described in this policy unless the Business Client has chosen to activate services that operationally require such data.
                  </p>
                  <p>
                    The Platform architecture therefore permits Business Clients to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Operate with minimal data sharing for basic features.</li>
                    <li>Activate expanded capabilities requiring broader datasets.</li>
                    <li>Configure custom data governance settings according to their internal compliance policies.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0b3b2e] mb-4">4. CATEGORIES OF INFORMATION PROCESSED</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-[#0b3b2e] mb-2 italic">4.1 Business Client Information</h3>
                    <p>
                      In order to establish and maintain service relationships with fashion brands and retailers, KactusLabs may collect certain organizational and operational information relating to Business Clients. This may include company identifiers, platform account credentials, billing and subscription information, integration credentials for e-commerce systems, configuration settings, and brand-specific product metadata.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0b3b2e] mb-2 italic">4.2 End-User Interaction Information</h3>
                    <p>
                      Where the Platform is deployed within a Business Client’s digital storefront, certain interactions initiated by end-users may be processed. Depending on the features enabled, this may include session identifiers, browsing behavior, product interactions, try-on selections, saved outfit preferences, cart activities and purchase/return events.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0b3b2e] mb-2 italic">4.3 Image and Visual Processing Data</h3>
                    <p>
                      Certain features, such as Virtual Try-On or visual search, may require temporary processing of images uploaded by end-users. These images are processed through computer vision models. Where feasible, the Platform prioritizes storing derived attributes rather than retaining raw visual data. Raw images are typically stored only temporarily.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0b3b2e] mb-2 italic">4.4 Measurement and Fit Data</h3>
                    <p>
                      Measurement-related data (height, weight, etc.) may be processed to generate size recommendations or visualize garment fit. These may be provided directly by the user or derived through AI analysis.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0b3b2e] mb-2 italic">4.5 Behavioral and Engagement Data</h3>
                    <p>
                      The Platform may process behavioral signals (product views, try-on attempts, search queries) to power product discovery and style recommendations. These signals allow brands to better understand engagement patterns.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0b3b2e] mb-2 italic">4.6 Communication and Messaging Data</h3>
                    <p>
                      If messaging integrations like WhatsApp are activated, we may process limited contact information (phone numbers, consent records) solely for delivering authorized communications.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0b3b2e] mb-4">5. PURPOSES OF DATA PROCESSING</h2>
                <p>
                  KactusLabs.AI processes information solely for the purpose of delivering and improving the services requested by Business Clients and their end-users. Such processing activities may include generating virtual visualizations, producing AI-generated imagery, delivering sizing recommendations, facilitating discovery through conversational interfaces, and supporting behavioral marketing automation.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0b3b2e] mb-4">6. DATA MINIMIZATION AND CONFIGURABLE DATA ACCESS</h2>
                <p>
                  KactusLabs.AI is designed according to a modular data-access architecture. Business Clients are not required to provide all categories of information described in this policy. Instead, the data processed depends on the specific services activated.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0b3b2e] mb-4">7. DATA STORAGE AND RETENTION</h2>
                <p>
                  Raw user-uploaded images are typically stored for a limited duration unless saved by the user. Derived attributes and Business Client product data are retained for the duration of the service relationship. Aggregated analytics may be stored longer for trend analysis.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0b3b2e] mb-4">8. BUSINESS CLIENT DATA RIGHTS</h2>
                <p>
                  Business Clients retain control over their data and may request export, modification, or deletion at any time. Upon a valid request, KactusLabs will remove the data from active processing systems, except where retention is required for legal or security reasons.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0b3b2e] mb-4">9. END-USER RIGHTS</h2>
                <p>
                  End-users may exercise their rights (access, correction, deletion) through the respective Business Client that controls the storefront. The Platform provides tools for Business Clients to honor such requests.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0b3b2e] mb-4">10. DATA SECURITY</h2>
                <p>
                  We maintain technical and organizational safeguards including encryption, secure network infrastructure, and role-based access controls to protect information against unauthorized access.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0b3b2e] mb-4">11. THIRD-PARTY INTEGRATIONS</h2>
                <p>
                  Data may be transmitted to third-party infrastructure providers (Shopify, cloud hosts, etc.) solely to enable requested functionality. Each provider operates under its own privacy practices.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0b3b2e] mb-4">12. AGGREGATED ANALYTICS AND MARKET INSIGHTS</h2>
                <p>
                  Anonymized and aggregated datasets may be used for trend forecasting and fit-related analytics. This does not involve identifying individual users or disclosing proprietary brand data.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0b3b2e] mb-4">13. POLICY UPDATES</h2>
                <p>
                  This policy may be updated periodically. Revised versions will be published on the Platform with a new effective date.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0b3b2e] mb-4">14. CONTACT INFORMATION</h2>
                <p>
                  Questions regarding this Privacy Policy or requests relating to data protection matters may be directed to:
                </p>
                <div className="mt-4 p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                  <p className="font-bold text-[#0b3b2e]">Privacy Office</p>
                  <p>KactusLabs.AI</p>
                  <p>Email: privacy@kactuslabs.ai</p>
                  <p>Website: kactuslabs.ai</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
