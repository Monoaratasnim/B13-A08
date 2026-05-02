"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
  <footer className="mt-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

    {/* 🔹 Brand + Contact */}
    <div>
      <h2 className="text-2xl font-bold mb-3 text-primary">
        SkillSphere
      </h2>
      <p className="text-sm opacity-80">
        Empowering learners with modern skills and courses.
      </p>

      <div className="mt-4 text-sm space-y-1 opacity-80">
        <p>Email: support@skillsphere.com</p>
        <p>Phone: +880 1234-567890</p>
        <p>Location: Bangladesh</p>
      </div>
    </div>

    {/* 🔹 Links */}
    <div>
      <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/terms" className="hover:text-primary">
            Terms & Conditions
          </Link>
        </li>
        <li>
          <Link href="/privacy" className="hover:text-primary">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>

    {/* 🔹 Social Icons */}
    <div>
      <h3 className="font-semibold text-lg mb-3">Follow Us</h3>

      <div className="flex justify-center md:justify-start flex-wrap gap-4 mt-3">
        <a className="p-2 rounded-full bg-gray-700 hover:bg-blue-600 transition">
          <FaFacebook size={18} />
        </a>

        <a className="p-2 rounded-full bg-gray-700 hover:bg-sky-500 transition">
          <FaTwitter size={18} />
        </a>

        <a className="p-2 rounded-full bg-gray-700 hover:bg-blue-700 transition">
          <FaLinkedin size={18} />
        </a>

        <a className="p-2 rounded-full bg-gray-700 hover:bg-pink-500 transition">
          <FaInstagram size={18} />
        </a>

        <a className="p-2 rounded-full bg-gray-700 hover:bg-gray-900 transition">
          <FaGithub size={18} />
        </a>
      </div>
    </div>

  </div>

  {/* 🔻 Bottom */}
  <div className="border-t border-gray-700 text-center py-4 text-sm opacity-80">
    © {new Date().getFullYear()} SkillSphere. All rights reserved.
  </div>

</footer>
  );
};

export default Footer;