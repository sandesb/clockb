import React from "react";
import { Facebook, Twitter, Linkedin, Youtube, Mail } from "lucide-react";
import logo from "../assets/logo-black.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Left Section */}
          <div>
            <img src={logo} alt="Kaffe Codes Logo" className="w-24 mb-4" />
            <p className="text-sm mb-4">
              Kaffe Codes is the platform to run a successful online business in Nepal.
            </p>
            <p className="text-sm mb-2">Bishalnagar, Kathmandu</p>
            <p className="text-sm mb-4">+977 9812345678</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Bakery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Coffee
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Tea
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Utensils
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Machineries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Cakes
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Working Hours</h4>
            <p className="text-sm mb-4">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <h4 className="font-semibold mb-4 text-lg">Let’s Join To Our Newsletters</h4>
            <div className="flex flex-col gap-2 sm:flex-row md:-ml-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-black border-none outline-none mb-2 sm:mb-0"
              />
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg  hover:bg-green-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>
            Copyright © 2024 DigiBox.Guru. All Rights Reserved.
          </p>
          <div className="mt-2 space-x-2">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
