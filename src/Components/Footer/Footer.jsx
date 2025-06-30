import React from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import logo from '../../assets/logo-removebg-preview.png'
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-24">
      <div className="w-11/12 mx-auto py-10 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Name */}
          <div className="text-center md:text-left">
            <a href="#home"><img src={logo} alt="" className="w-48" /></a>
            <p className="text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-cyan-600 text-xl">
            <a
              href="mailto:hafezmohammod0011@gmail.com"
              aria-label="Email"
              className="hover:text-cyan-700 transition-colors"
            >
              <FiMail />
            </a>
            <a
              href="https://github.com/Mohammad7558/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-cyan-700 transition-colors"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammod-bin-amin-b051a0244/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-cyan-700 transition-colors"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://x.com/iam_MOHAMMOD"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-cyan-700 transition-colors"
            >
              <FiTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
