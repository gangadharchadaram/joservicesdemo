import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../context/CartContext';
import { User } from 'lucide-react';
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import logo from "./images/WhatsApp_Image_2026-04-12_at_7.52.00_AM-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../context/NotificationContext";




const Navbar = () => {
  const location = useLocation();
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { notifications } = useNotification();
const isHome = location.pathname === "/";

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
      <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
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
    ? "text-yellow-400"
    : "text-white hover:text-yellow-400"
}`}
    >
      {link.label}
    </Link>
  ))}

  {/* STEP 6 — My Bookings */}
 {user?.role === "USER" && (
  <Link to="/bookings">My Bookings</Link>
)}

{user?.role === "PROVIDER" && (
  <Link to="/provider-dashboard">Provider Dashboard</Link>
)}
</div>
<div className="fixed top-20 right-5 z-[9999] space-y-2">
  {notifications.map(n => (
    <div
      key={n.id}
      className="bg-black text-white px-4 py-2 rounded-lg shadow-lg animate-slide-in"
    >
      {n.message}
    </div>
  ))}
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
  className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-medium"
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
  <div className="fixed inset-0 z-[9999] backdrop-blur-md bg-black/40 flex items-center justify-center">

    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative animate-fadeIn">

      {/* Close */}
      <button
        onClick={() => setShowAuth(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
      >
        <X />
      </button>

      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-6">
        Welcome Back 👋
      </h2>

      {/* Phone */}
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter phone number"
        className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Name (Signup only) */}
      {isSignup && (
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-4"
        />
      )}

      {/* USER LOGIN */}
      <button
        onClick={() => {
          if (!phone) return alert("Enter phone number");

          login(phone, name || "User", "USER");
          setShowAuth(false);
        }}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition"
      >
        Continue as User
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-[1px] bg-gray-200"></div>
        <span className="text-gray-400 text-sm">OR</span>
        <div className="flex-1 h-[1px] bg-gray-200"></div>
      </div>

      {/* PROVIDER LOGIN */}
      <button
        onClick={() => {
          if (!phone) return alert("Enter phone number");

          login(phone, name || "Provider", "PROVIDER");
          setShowAuth(false);
        }}
        className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold shadow hover:scale-[1.02] transition"
      >
        👨‍🔧 Login as Professional
      </button>

      {/* Switch */}
      <div className="text-center mt-5 text-sm">
        {isSignup ? "Already have account?" : "New user?"}
        <button
          onClick={() => setIsSignup(!isSignup)}
          className="text-blue-600 ml-2 font-medium"
        >
          {isSignup ? "Login" : "Create account"}
        </button>
      </div>

    </div>
  </div>
)}
    </nav>
  );
};

export default Navbar;
