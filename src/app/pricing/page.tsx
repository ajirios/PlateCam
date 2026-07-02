import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
    <div className="max-w-3xl mx-auto">
      
      {/* Back Link as seen in Screenshot 2026-06-19 at 1.55.48 AM.jpg */}
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline flex items-center text-sm font-medium">
          ← Back to Home
        </Link>
      </div>

      {/* Header Block */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
          PlateCam Pricing
        </h1>
        <p className="text-sm text-gray-500">
          Last Updated: June 19, 2026
        </p>
      </header>

      {/* Content Container Card */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-8 space-y-6 text-base leading-relaxed text-justify">
        
        <p>
          $9.99/week
        </p>
        </div>
        </div>
    </div>
  );
}