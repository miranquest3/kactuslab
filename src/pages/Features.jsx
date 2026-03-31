import React from 'react'

const Feature = () => {
  return (
    <div className="min-h-screen px-6 py-16 bg-[#F5F6F5]">
      <h1 className="text-3xl font-semibold text-[#05231C] mb-6">
        Features
      </h1>

      <p className="text-gray-600 mb-10 max-w-2xl">
        Explore all powerful features of our platform designed to boost your business.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-medium mb-2">Analytics</h2>
          <p className="text-sm text-gray-500">
            Get real-time insights into your performance.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-medium mb-2">Automation</h2>
          <p className="text-sm text-gray-500">
            Automate workflows and save time.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-medium mb-2">Integrations</h2>
          <p className="text-sm text-gray-500">
            Connect with Shopify and other tools.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Feature