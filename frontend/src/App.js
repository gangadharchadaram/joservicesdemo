import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetails from "@/pages/ServiceDetails";
import Cart from "@/pages/Cart";
import About from "@/pages/About";
import { AuthProvider } from "@/context/AuthContext";
import { BookingProvider } from "@/context/BookingContext";
import MyBookings from "@/pages/MyBookings";
import BecomeProvider from "./pages/BecomeProvider";

function App() {
  return (
    <AuthProvider>
      <BookingProvider>
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
                    <main className="main-content">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/:id" element={<ServiceDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/bookings" element={<MyBookings />} />
            <Route path="/become-provider" element={<BecomeProvider />} />
          </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </CartProvider>
    </BookingProvider>
    </AuthProvider>
  );
}

export default App;
