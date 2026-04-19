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

  const [showAuth, setShowAuth] = useState(false);
const [isSignup, setIsSignup] = useState(false);

const { user, login, logout } = useAuth();
const [phone, setPhone] = useState("");
const [name, setName] = useState("");

const isHome = location.pathname === "/";
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
     <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isHome && !scrolled
      ? "bg-transparent"
      : "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200"
  }`}
>
  <div className="w-full px-6 lg:px-16">
    <div className="flex justify-between items-center h-16">

      {/* LOGO */}
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="JO Services"
          className={`h-14 transition ${
            isHome && !scrolled ? "brightness-0 invert" : ""
          }`}
        />
      </Link>

      {/* NAV LINKS */}
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm font-medium transition ${
              isActive(link.path)
                ? isHome && !scrolled
                  ? "text-yellow-400"
                  : "text-blue-600"
                : isHome && !scrolled
                ? "text-white hover:text-yellow-400"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {link.label}
          </Link>
        ))}

        {/* Role Based Links */}
        {user?.role === "USER" && (
          <Link className="text-sm" to="/bookings">My Bookings</Link>
        )}

        {user?.role === "PROVIDER" && (
          <Link className="text-sm" to="/provider-dashboard">
            Provider Dashboard
          </Link>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* 🔍 SEARCH BAR (SHOW ONLY WHEN SCROLLED OR NOT HOME) */}
  {(!isHome || scrolled) && (
    <div className="hidden md:flex items-center bg-gray-100 rounded-lg overflow-hidden border">

      {/* LOCATION */}
      <div className="flex items-center gap-2 px-3 border-r bg-white">
        <span className="text-red-500 text-sm">📍</span>

        <select className="bg-transparent outline-none text-sm py-2">
          <option>Hyderabad</option>
          <option>Bangalore</option>
        </select>
      </div>

      {/* INPUT */}
      <input
        placeholder="Search services..."
        className="px-3 py-2 outline-none bg-gray-100 text-sm w-[200px]"
      />

      {/* BUTTON */}
      <button className="bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700">
        Search
      </button>

    </div>
  )}

  {/* CART */}
  <Link to="/cart">
    <Button variant="outline" size="sm" className="relative border-gray-200">
      <ShoppingCart className="h-4 w-4" />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Button>
  </Link>



        {/* USER / LOGIN */}
        {user ? (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 border px-3 py-2 rounded-lg">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm">{user.name || user.phone}</span>
            </div>

            <button
              onClick={logout}
              className="text-sm text-gray-500 hover:text-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowAuth(true)}
            className={`px-5 py-2 rounded-lg font-medium transition ${
              isHome && !scrolled
                ? "bg-yellow-400 text-black"
                : "bg-blue-600 text-white"
            }`}
          >
            Login
          </button>
        )}
      </div>
    </div>
  </div>
  {/* 🔐 LOGIN MODAL */}
{showAuth && (
  <div className="fixed inset-0 z-[9999] backdrop-blur-md bg-black/40 flex items-center justify-center">

    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative animate-fadeIn">

      {/* CLOSE */}
      <button
        onClick={() => setShowAuth(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
      >
        <X />
      </button>

      {/* TITLE */}
      <h2 className="text-3xl font-bold text-center mb-6">
        Welcome Back 👋
      </h2>

      {/* PHONE */}
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter phone number"
        className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* NAME (Signup only) */}
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
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
      >
        Continue as User
      </button>

      {/* DIVIDER */}
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
        className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700"
      >
        👨‍🔧 Login as Professional
      </button>

      {/* SWITCH */}
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
