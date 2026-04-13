import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../context/CartContext';
import { User } from 'lucide-react';
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import logo from "./images/WhatsApp_Image_2026-04-12_at_7.52.00_AM-removebg-preview.png";


const Navbar = () => {
  const location = useLocation();
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showAuth, setShowAuth] = useState(false);
const [isSignup, setIsSignup] = useState(false);

const { user, login, logout } = useAuth();
const [phone, setPhone] = useState("");
const [name, setName] = useState("");

useEffect(() => {
  const open = () => setShowAuth(true);
  window.addEventListener("openLogin", open);
  return () => window.removeEventListener("openLogin", open);
}, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 border-b border-blue-100 shadow-sm">
      <div className="w-full px-6 lg:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
         <Link to="/" className="flex items-center space-x-2">
  <img 
    src={logo}
    alt="JO Services" 
    className="h-20 w-auto"
  />
</Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
  {navLinks.map((link) => (
    <Link
      key={link.path}
      to={link.path}
      className={`text-sm font-medium ${
        isActive(link.path)
          ? "text-blue-600"
          : "text-gray-700 hover:text-blue-600"
      }`}
    >
      {link.label}
    </Link>
  ))}

  {/* STEP 6 — My Bookings */}
  {user && (
    <Link
      to="/bookings"
      className="text-sm font-medium text-gray-700 hover:text-blue-600"
    >
      My Bookings
    </Link>
  )}
</div>



          {/* Cart Button */}
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <Button 
                variant="outline" 
                size="sm" 
                className="relative border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
              >
                <ShoppingCart className="h-4 w-4 text-blue-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
 {user ? (
  <div className="flex items-center gap-3">
    
    <div className="flex items-center gap-2 border px-3 py-2 rounded-lg">
      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
        {user.name?.charAt(0).toUpperCase()}
      </div>

      <span className="text-sm font-medium">
        {user.name || user.phone}
      </span>
    </div>

    <button
      onClick={logout}
      className="text-sm text-gray-600 hover:text-red-600"
    >
      Logout
    </button>

  </div>
) : (
  <button
    onClick={() => setShowAuth(true)}
    className="border border-blue-200 px-4 py-2 rounded-lg hover:bg-blue-50"
  >
    Login
  </button>
)}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100 backdrop-blur-md bg-white/95">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-4 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
{showAuth && (
  <div className="fixed inset-0 z-[9999] backdrop-blur-md bg-black/30">

    <div className="min-h-screen w-full flex items-center justify-center p-4">
      
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative">

        <button
          onClick={() => setShowAuth(false)}
          className="absolute top-3 right-3"
        >
          <X />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          {isSignup ? "Create Account" : "Login"}
        </h2>

        {/* phone */}
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
          className="w-full border rounded-lg px-4 py-3 mb-3"
        />

        {/* name */}
        {isSignup && (
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-3 mb-3"
          />
        )}

        {/* login button */}
        <button
          onClick={() => {
            login(phone, name);
            setShowAuth(false);
          }}
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          {isSignup ? "Create Account" : "Continue"}
        </button>

        <div className="text-center mt-4 text-sm">
          {isSignup ? "Already have account?" : "New user?"}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-600 ml-2"
          >
            {isSignup ? "Login" : "Create account"}
          </button>
        </div>

      </div>

    </div>

  </div>
)}
    </nav>
  );
};

export default Navbar;
