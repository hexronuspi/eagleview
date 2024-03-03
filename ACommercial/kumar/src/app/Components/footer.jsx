"use client"
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaMap, FaSearchLocation, FaGoogle, FaWhatsapp, FaPhone, FaGoogleDrive, FaMailBulk } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
export default function Footer() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.footer  style={{ border: 0, borderRadius: '1rem', props }} className="m-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white p-6">
      <div className="container mx-auto px-6 flex flex-wrap justify-between items-center">
     
        <div className="w-full md:w-1/4 mt-6 md:mt-0 text-center">
          <ul className="space-y-2">
            <li><Link href="privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mt-6 md:mt-0 text-center">
  <h2 className="text-xl font-bold mb-2">
    <Link href="Help">Contact Us</Link>
  </h2>
  <p><a href="mailto:drrajnish5@gmail.com" className="hover:underline">Email: drrajnish5@gmail.com</a></p>
  <p><a href="tel:+919967954124" className="hover:underline">Phone: +91 9967954124</a></p>
</div>
      </div>
      <div className="mt-6 border-t-2 border-gray-300 flex justify-center py-6">
        <FaFacebook size={24} className="mx-2 hover:text-blue-400 transition duration-200" />
        <FaPhone size={24} className="mx-2 hover:text-orange-400 transition duration-200 transform rotate-90" />
        <FaGoogle size={24} className="mx-2 hover:text-blue-400 transition duration-200" />
        <FaMailBulk size={24} className="mx-2 hover:text-orange-400 transition duration-200" />
        <FaWhatsapp size={24} className="mx-2 hover:text-green-400 transition duration-200" />
      </div>
    </animated.footer>
  );
}