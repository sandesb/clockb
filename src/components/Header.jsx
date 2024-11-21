import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, Menu, X } from 'lucide-react'; // Import Lucide icons
import logo from '../assets/logo-transparant.png'; // Import logo from assets folder

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b w-full">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-16 w-full max-w-screen-2xl mx-auto">
        {/* Logo Section */}
        <a href="#" className="flex items-center whitespace-nowrap">
          <img
            src={logo}
            alt="Kaffe Codes"
            className="h-10 w-auto object-contain" // Ensures logo doesn't distort
          />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-gray-800">Brands</a>
          <a href="#" className="hover:text-gray-800">Offers</a>
          <a href="#" className="hover:text-gray-800">Buying Guide</a>
          <a href="#" className="hover:text-gray-800">Gifts</a>
        </nav>

        {/* Search Bar and Actions */}
        <div className="flex items-center space-x-6">
          {/* Search Input */}
          <div className="relative hidden md:block">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search on Kaffe Codes"
              className="pl-10 pr-4 py-2 rounded-full border text-sm text-gray-700 bg-gray-50 placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:outline-none w-40 md:w-64" // Responsive width
            />
          </div>

          {/* Icons */}
          <button className="text-gray-600 hover:text-gray-800">
            <Heart className="w-5 h-5" />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <ShoppingCart className="w-5 h-5" />
          </button>

          {/* Sign-In Button */}
          <a
            href="#"
            className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-white hover:bg-green-700 w-20 text-center md:w-24" // Responsive width
          >
            Sign in
          </a>
        </div>

        {/* Menu Button for Mobile */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-4 p-4 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-gray-800">Brands</a>
            <a href="#" className="hover:text-gray-800">Offers</a>
            <a href="#" className="hover:text-gray-800">Buying Guide</a>
            <a href="#" className="hover:text-gray-800">Gifts</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
