import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CartProvider } from "@/context/CartContext";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { BookingProvider } from "@/context/BookingContext";

import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetails from "@/pages/ServiceDetails";
import Cart from "@/pages/Cart";
import About from "@/pages/About";
import MyBookings from "@/pages/MyBookings";
import BecomeProvider from "@/pages/BecomeProvider";
import ProviderDashboard from "@/pages/ProviderDashboard";
import { NotificationProvider } from "./context/NotificationContext";



/* ✅ INNER ROUTES COMPONENT */
function AppRoutes() {
  const { user } = useAuth();
  const location = useLocation();
  const isHome = location.pathname === "/";  return (
    <div className="App">
      <Navbar />

      <main className={`${!isHome ? "pt-20" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />

          {/* ✅ USER ROUTE */}
          <Route
            path="/bookings"
            element={
              user?.role === "USER" ? (
                <MyBookings />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          {/* ✅ PROVIDER ROUTE */}
          <Route
            path="/provider-dashboard"
            element={
              user?.role === "PROVIDER" ? (
                <ProviderDashboard />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route path="/become-provider" element={<BecomeProvider />} />
        </Routes>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}


/* ✅ MAIN APP */
function App() {
  return (
    <AuthProvider>
        <NotificationProvider>

      <BookingProvider>
        <CartProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </CartProvider>
      </BookingProvider>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;