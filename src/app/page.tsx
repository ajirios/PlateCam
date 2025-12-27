"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is PlateCam?",
      a: "PlateCam is a camera-first calorie-based meal planning app that scans and recommends meals so you don't have to.",
    },
    {
      q: "How much does it cost?",
      a: "Pricing starts at $9.99 per month or $79.99 per year.",
    },
    {
      q: "What foods are available?",
      a: "PlateCam can scan and recommend both commonplace and traditional meals, as our team is constantly updating our food dataset to include world meals.",
    },
    {
      q: "Is my data secure?",
      a: "Absolutely. We use industry-standard encryption and compliance protocols to safeguard your data.",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white text-black">
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
        <div className="text-2xl font-extrabold">PlateCam</div>

        <div className="hidden md:flex items-center space-x-8">
          {/* PRODUCTS DROPDOWN */}

          <a href="#" className="hover:text-gray-500 font-medium">
            Food Database
          </a>

          <a href="#" className="hover:text-gray-500 font-medium">
            Enterprise
          </a>

          <a href="#" className="hover:text-gray-500 font-medium">
            Developers
          </a>

          <a href="#" className="hover:text-gray-500 font-medium">
            AI
          </a>

          <a href="#" className="hover:text-gray-500 font-medium">
            Pricing
          </a>
          <a href="#" className="hover:text-gray-500 font-medium">
            Press
          </a>
          <a href="#" className="hover:text-gray-500 font-medium">
            Meal programming
          </a>

          <div className="relative group">
            <button className="hover:text-gray-500 font-medium">Regions</button>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg w-48">
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Canada
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  United Kingdom
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  United States
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Australia
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-x-4">
        <Link 
          href="/login" 
          className="text-gray-700 hover:text-gray-500 font-medium"
        >
          News
        </Link>
        <Link 
          href="/signup" 
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 font-medium"
        >
          Download the app
        </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center flex-1 px-8 py-20 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6"
        >
          Scan and automate meals with <span className="text-gray-700">PlateCam</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-600 mb-8"
        >
          Meet PlateCam, the AI-powered camera-first calorie-based meal planning app built for all ages. Snap a photo, scan a barcode, or describe your meal and get instant calorie and nutrient info. Discover over 1 million dishes – including traditional meals around the world.
        </motion.p>
        <motion.a
          href="/signup"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-black text-white rounded-lg shadow-lg font-semibold hover:bg-gray-900 transition"
        >
          Get the app
        </motion.a>
        <img src="/diningcam-burger.png" alt="graphic" />
      </section>

      {/* FAQ SECTION */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="font-medium">{item.q}</span>
                <span>{openFAQ === index ? "−" : "+"}</span>
              </button>
              {openFAQ === index && (
                <p className="mt-2 text-gray-600">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="built flex items-center">
        <h1>Built by computer scientists</h1>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          <div>
            <h4 className="font-semibold mb-4">PlateCam</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li>API</li>
              <li>AI</li>
              <li>Mobile Apps</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Contact Center</li>
              <li>Affiliates</li>
              <li>Status</li>
              <li>Developers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Licenses</li>
              <li>Compliance</li>
            </ul>
          </div>
        </div>
        <div className="banner">
          <span>PLATECAM</span>
        </div>
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm max-w-6xl mx-auto">
          <p>© {new Date().getFullYear()} PlateCam Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>LinkedIn</span>
            <span>Twitter</span>
            <span>Instagram</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

