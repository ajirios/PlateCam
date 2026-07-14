"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Apple, Play, ArrowUpRight } from 'lucide-react';

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is PlateCam?",
      a: "PlateCam is a personal food tracking app that uses your smartphone camera to track your full nutrition over time. It offers a pocket nutritionist service on-the-go for your daily life.",
    },
    {
      q: "How much does it cost?",
      a: "Pricing starts at $9.99 per week, $19.99 monthly or $199.99 annually.",
    },
    {
      q: "Can I try it for free?",
      a: "There is a 3-day free trial with the yearly plan.",
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
        <div className="text-2xl flex items-center space-x-4 font-extrabold icon_wrapper">
          <img className="icon hidden" src="./platecam_gemini.png" alt="icon" />
          <span className="text-2xl font-bold tracking-tight mb-3 text-black">PlateCam</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {/* PRODUCTS DROPDOWN */}

          <a href="/terms" className="hover:text-gray-500 font-medium">
            Terms of Use
          </a>

          <a href="/privacy" className="hover:text-gray-500 font-medium">
            Privacy Policy
          </a>

<div className="relative group">
  <button className="hover:text-gray-500 font-medium">Languages</button>
  <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg w-48">
    <ul className="py-2 text-sm text-gray-700">
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        English
      </li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Chinese
      </li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Francais
      </li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Espanol
      </li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Portugues
      </li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Korean
      </li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Japanese
      </li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Deutsch
      </li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Nederlands
      </li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Russian
      </li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Bahasa Indonesian
      </li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Arabic
      </li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Hindi
      </li>
    </ul>
  </div>
</div>

          <div className="relative group">
            <button className="hover:text-gray-500 font-medium">Available in 175+ countries</button>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg w-48">
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Afghanistan
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Albania
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Algeria
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Angola
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Anguilla
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Antigua and Barbuda
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Argentina
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Armenia
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Australia
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Austria
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Azerbaijan
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Bahamas
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Bahrain
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Barbados
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Belarus
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Belgium
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Belize
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Benin
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Bermuda
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Bhutan
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Bolivia
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Bosnia and Herzegovina
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Botswana
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Brazil
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  British Virgin Islands
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Brunei
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Bulgaria
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Burkina Faso
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Cambodia
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Cameroon
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Canada
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Cape Verde
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Cayman Islands
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Chad
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Chile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  China
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Colombia
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Democratic Republic of Congo
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Republic of the Congo
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-x-4">
        <Link 
          href="/team/contact-us" 
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
          Scan your plates of food with <span className="text-gray-700">PlateCam</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-600 mb-8"
        >
          Meet PlateCam, the AI-driven app that uses your smartphone camera to track your complete nutrition. Snap a photo, scan a barcode, and explore real, deeper insights or get instant food composition info and corrective suggestions. Discover over 1 million dishes – including traditional meals around the world. Not just calories, get full data.
        </motion.p>
        <motion.a
          href="/signup"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-black text-white rounded-lg shadow-lg font-semibold hover:bg-gray-900 transition"
        >
          Get the app
        </motion.a>
        <div className="flex items-start gap-4">
          {/* Left: Image */}
              <img className="screenshot_camera" src="/saladpic.png" alt="graphic" />

          {/* Right: Text */}
          <div>
            <h2 className="text-4xl font-bold pt-18">Just snap a pic</h2>
            <p>Lighting-enabled</p>
            <p>Fast</p>
            <p>Estimates strain on 17 body organs</p>
          </div>
        </div>
        <div className="flex items-start gap-4">

          {/* Right: Text */}
          <div>
            <h2 className="text-4xl font-bold">Get instant previews</h2>
            <p>See the nutrients affecting you the most</p>
            <p>Learn something new everyday</p>
            <p>Tap to dive in deeper</p>
            <p>Delete wrongful scans</p>
          </div>
          {/* Left: Image */}
              <img className="screenshot_camera" src="/saladpic.png" alt="graphic" />
        </div>
        <div className="flex items-start gap-4">
          {/* Left: Image */}
              <img className="screenshot_camera" src="/divedeeper.png" alt="graphic" />

          {/* Right: Text */}
          <div>
            <h2 className="text-4xl font-bold">Dive deeper</h2>
            <p>Over 200+ nutrients and biocompounds</p>
            <p>Edit the results</p>
            <p>Publish</p>
          </div>
        </div>
        <div className="flex items-start gap-4">

          {/* Right: Text */}
          <div>
            <h2 className="text-4xl font-bold">Access your profile</h2>
            <p>Up to 20 internal organs</p>
            <p>Based on your nutrient quotas</p>
            <p>Scattered across all your devices</p>
          </div>
          {/* Left: Image */}
              <img className="screenshot_camera" src="/saladpic.png" alt="graphic" />
        </div>
      </section>


    <div className="min-h-screen bg-white text-neutral-900 flex flex-col items-center justify-start pt-12 p-6 font-sans">
    
    {/* Header Section */}
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold tracking-tight mb-3 text-black">
        PlateCam
      </h1>
      <p className="text-lg text-neutral-500">
        Get your digital plate camera
      </p>
    </div>

    {/* Cards Container */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      
      {/* Card 1: Download Expo Go */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between items-center text-center min-h-[450px]">
        <div className="flex flex-col items-center">
          {/* Step Number */}
          <div className="w-8 h-8 rounded-full border border-neutral-400 flex items-center justify-center font-medium text-sm mb-6 text-neutral-700">
            1
          </div>
          <h2 className="text-xl font-semibold mb-4 text-neutral-900">
            Download PlateCam
          </h2>
          <p className="text-neutral-500 max-w-xs leading-relaxed">
            PlateCam is a free app to scan food
          </p>
        </div>

        {/* Download Buttons */}
        <div className="w-full space-y-3 max-w-xs mt-8">
          <a
            href="#"
            className="flex items-center justify-center gap-2 w-full bg-white border border-neutral-200 rounded-xl py-3 px-4 shadow-sm hover:bg-neutral-50 transition font-medium text-sm"
          >
            <Apple className="w-5 h-5 fill-current" />
            App Store
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 w-full bg-white border border-neutral-200 rounded-xl py-3 px-4 shadow-sm hover:bg-neutral-50 transition font-medium text-sm"
          >
            <Play className="w-4 h-4 fill-current text-neutral-700" />
            Google Play
          </a>
        </div>
      </div>

      {/* Card 2: Scan QR Code */}
      <div className="bg-[#2d2d2d] rounded-2xl p-8 flex flex-col justify-between items-center text-center min-h-[450px] shadow-lg">
        <div className="flex flex-col items-center w-full">
          {/* Step Number */}
          <div className="w-8 h-8 rounded-full border border-neutral-500 flex items-center justify-center font-medium text-sm mb-6 text-neutral-300">
            2
          </div>
          <h2 className="text-xl font-semibold mb-4 text-white">
            Scan QR Code
          </h2>
          <p className="text-neutral-400 max-w-xs leading-relaxed mb-6">
            Use your phone's camera or Expo Go
          </p>

          {/* QR Code Wrapper */}
          <div className="bg-white p-4 rounded-2xl inline-block shadow-inner">
            {/* Replace src with your actual generated QR code image path */}
            <img
              src="./qrcodee.png"
              alt="Expo QR Code"
              className="w-44 h-44 object-contain"
            />
          </div>
        </div>

        {/* Action Button */}
        <div className="w-full max-w-xs mt-8">
          <button className="w-full bg-white text-neutral-900 font-medium py-3 rounded-xl hover:bg-neutral-100 transition text-sm shadow-md">
            Find our app
          </button>
        </div>
      </div>

    </div>
  </div>

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

        <div className="flex flex-col items-center justify-center text-center flex-1 pt-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6"
        >
          Scan food with <span className="text-gray-700">PlateCam</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-600 mb-8"
        >
          Download for free today!
        </motion.p>
        <motion.a
          href="/signup"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-black text-white rounded-lg shadow-lg font-semibold hover:bg-gray-900 transition"
        >
          App Store
        </motion.a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white text-black px-8 py-12">
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
            <h4 className="font-semibold mb-4">Regions</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Africa</li>
              <li>Americas</li>
              <li>Asia</li>
              <li>Europe</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Contact Center</li>
              <li>Promotion</li>
              <li>Status</li>
              <li>Developers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/team/contact-us">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="banner">
          <span>PLATECAM</span>
        </div>
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm max-w-6xl mx-auto">
          <p>© {new Date().getFullYear()} PlateCam Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>contact@platecam.com</span>
            <span>TikTok</span>
            <span>Instagram</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

