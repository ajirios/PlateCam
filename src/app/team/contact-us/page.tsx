import React from 'react';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-3xl mx-auto">
        
        {/* Back Link matching the exact position and design from the screenshots */}
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:underline flex items-center text-sm font-medium">
            ← Back to Home
          </Link>
        </div>

        {/* Header Block matching the typography structure of the Site */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
            Contact Us
          </h1>
          <p className="text-sm text-gray-500">
            PlateCam Support
          </p>
        </header>

        {/* Content Container Card matching the design card format */}
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-8 space-y-6 text-base leading-relaxed text-justify">
          
          <p>
            If you have any questions, feedback, or technical support inquiries regarding the PlateCam website, the iOS application, or our data practices, please reach out to us. We aim to respond to all inquiries as promptly as possible at <span className="md:col-span-2">
                <a href="mailto:contact@platecam.com" className="text-blue-600 hover:underline">
                  contact@platecam.com
                </a>
              </span>.
          </p>

          {/* Core Corporate Information Registry Metadata */}

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 font-mono text-sm space-y-2 text-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 border-b border-gray-200 pb-2">
              <span className="font-sans font-semibold text-gray-900">Entity:</span>
              <span className="md:col-span-2">PlateCam Inc.</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 border-b border-gray-200 pb-2">
              <span className="font-sans font-semibold text-gray-900">Attention:</span>
              <span className="md:col-span-2">PlateCam Team</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 border-b border-gray-200 pb-2">
              <span className="font-sans font-semibold text-gray-900">Corporate Address:</span>
              <span className="md:col-span-2 font-sans text-gray-800">
                122 Livingston Dr,<br />
                Tillsonburg, ON,<br />
                Canada
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 border-b border-gray-200 pb-2">
              <span className="font-sans font-semibold text-gray-900">Telephone Line:</span>
              <span className="md:col-span-2">431-278-5156</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 pt-1">
              <span className="font-sans font-semibold text-gray-900">Digital Desk:</span>
              <span className="md:col-span-2">
                <a href="mailto:contact@platecam.com" className="text-blue-600 hover:underline">
                  contact@platecam.com
                </a>
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}