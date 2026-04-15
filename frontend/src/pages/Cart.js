import React from 'react';
import { Trash2, Calendar, Clock, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useCart } from '../context/CartContext';
import { serviceCategories } from '../mockData';
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useBooking } from "../context/BookingContext";
import { useNotification } from "../context/NotificationContext";



const Cart = () => {
    const { addNotification } = useBooking();

  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();


  const getCategoryName = (categoryId) => {
    return serviceCategories.find(cat => cat.id === categoryId)?.name || '';
  };

const openRazorpay = () => {

  const options = {
    key: "rzp_test_1234567890", // replace with your test key
    amount: (getTotalPrice() - discount) * 100, // paise
    currency: "INR",
    name: "JO Services",
    description: "Service Booking Payment",

    handler: function (response) {
      // SUCCESS
      handlePaymentSuccess(response);
    },

    prefill: {
      name: user?.name || "Guest",
      contact: user?.phone || "9999999999"
    },

    theme: {
      color: "#2563eb"
    },

    modal: {
      ondismiss: function () {
        alert("Payment cancelled");
      }
    }
  };

  const rzp = new window.Razorpay(options);

  rzp.on("payment.failed", function (response) {
    handlePaymentFailure(response);
  });

  rzp.open();
};


const handlePaymentSuccess = (response) => {

  const booking = {
    id: Date.now(),
    orderId: response.razorpay_payment_id,
    items: cartItems,
    total: getTotalPrice() - discount,
    address,
    paymentMethod: "ONLINE",
    user,
    status: "Paid",
    date: new Date().toLocaleString()
  };

  addBooking(booking);
   addNotification("Booking Confirmed ✅");
  addNotification("Payment Successful 💳");
  addNotification("Professional Assigned 👨‍🔧");

  setShowSuccess(true);
  clearCart();
};

const handlePaymentFailure = (response) => {
  alert("Payment Failed ❌");
  console.log(response);
};

const handleCheckout = () => {

  if (!address) {
    alert("Please enter service address");
    return;
  }

  if (!paymentMethod) {
    alert("Please select payment method");
    return;
  }

  // if online payment → open Razorpay
  if (paymentMethod === "ONLINE") {
    openRazorpay();
    return;
  }

  // COD FLOW
const getRandomProfessional = () => {
  const pros = [
    { name: "Ravi Kumar", phone: "9999999999", rating: 4.8 },
    { name: "Suresh Naidu", phone: "8888888888", rating: 4.7 },
    { name: "Akash Reddy", phone: "7777777777", rating: 4.9 }
  ];

  return pros[Math.floor(Math.random() * pros.length)];
};
const booking = {
  id: Date.now(),
  items: cartItems,
  total: getTotalPrice() - discount,
  address,

  paymentMethod,
  paymentStatus: paymentMethod === "ONLINE" ? "Paid" : "Pending",

  professional: getRandomProfessional(), // ✅ now contains phone
   user: user,
  status: "Confirmed",
  date: new Date().toLocaleString()
};

const message = `Booking Confirmed!
Service: ${cartItems[0]?.name}
Date: ${new Date().toLocaleDateString()}
Amount: ₹${getTotalPrice() - discount}`;

window.open(
  `https://wa.me/918142541365?text=${encodeURIComponent(message)}`
);

  addBooking(booking);

  addNotification("Booking Confirmed ✅");
addNotification("Professional Assigned 👨‍🔧");
  setShowSuccess(true);
  clearCart();
};

const [paymentMethod, setPaymentMethod] = useState("");

  const [coupon, setCoupon] = useState("");
const [discount, setDiscount] = useState(0);
const [address, setAddress] = useState("");
const [showSuccess, setShowSuccess] = useState(false);
const { user } = useAuth();
const isLoggedIn = !!user;
const { addBooking } = useBooking();

const applyCoupon = () => {
  if (coupon === "SAVE100") {
    setDiscount(100);
  } else if (coupon === "JO50") {
    setDiscount(50);
  } else {
    alert("Invalid coupon");
    setDiscount(0);
  }
};

  if (cartItems.length === 0 && !showSuccess) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
      <div className="text-center backdrop-blur-xl bg-white/90 rounded-3xl p-12 max-w-md border border-blue-100 shadow-xl">
        <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Your Cart is Empty
        </h2>
        <Link to="/services">
          <Button className="bg-blue-600 text-white">
            Browse Services
          </Button>
        </Link>
      </div>
    </div>
  );
}
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Cart</h1>
          <p className="text-gray-600">Review and confirm your bookings</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.cartId} className="backdrop-blur-xl bg-white/90 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-sm text-blue-600 font-medium mb-1">
                        {getCategoryName(item.categoryId)}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.name}</h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">{item.selectedDate}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">{item.selectedTime}</span>
                        </div>
                      </div>


              {/* Address */}
<div className="border rounded-xl p-4 bg-white shadow-sm">
  <h3 className="font-semibold mb-2">Service Address</h3>

  <textarea
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    placeholder="Enter your full address"
    className="w-full border rounded-lg px-3 py-2 h-24"
  />

  <button
    onClick={() =>
      setAddress("Flat 203, Sai Residency, Madhapur, Hyderabad")
    }
    className="text-blue-600 text-sm mt-2"
  >
    Use saved address
  </button>
</div>
                      {/* Coupons */}
<div className="border rounded-xl p-4 bg-white shadow-sm">
  <h3 className="font-semibold mb-2">Coupons and offers</h3>

  <div className="flex gap-2">
    <input
      value={coupon}
      onChange={(e) => setCoupon(e.target.value)}
      placeholder="Enter coupon code"
      className="flex-1 border rounded-lg px-3 py-2"
    />

    <button
      onClick={applyCoupon}
      className="bg-blue-600 text-white px-4 rounded-lg"
    >
      Apply
    </button>
  </div>

  {discount > 0 && (
    <div className="text-green-600 text-sm mt-2">
      Saving ₹{discount} on this order
    </div>
  )}
</div>
                      <div className="text-2xl font-bold text-blue-600">₹{item.price}</div>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.cartId)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button
              variant="outline"
              onClick={clearCart}
              className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
            >
              Clear All Items
            </Button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
  <Card className="backdrop-blur-xl bg-white/90 border border-blue-100 shadow-xl sticky top-20">
    <CardHeader>
      <CardTitle>Order Summary</CardTitle>
    </CardHeader>

    <CardContent className="space-y-4">

      {/* Address */}
      {isLoggedIn && (
        <div className="border rounded-xl p-4 bg-white shadow-sm">
          <h3 className="font-semibold mb-2">Service Address</h3>

          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your full address"
            className="w-full border rounded-lg px-3 py-2 h-24"
          />

          <button
            onClick={() =>
              setAddress("Flat 203, Sai Residency, Madhapur, Hyderabad")
            }
            className="text-blue-600 text-sm mt-2"
          >
            Use saved address
          </button>
        </div>
      )}

      {/* price summary */}
      <div className="space-y-3">
        <div className="flex justify-between text-gray-600">
          <span>Items ({cartItems.length})</span>
          <span>₹{getTotalPrice() - discount}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Service Fee</span>
          <span className="text-green-600">FREE</span>
        </div>

        {/* address display */}
        {address && (
          <div className="text-sm text-gray-600 border-t border-blue-100 pt-3">
            <strong>Service Address:</strong>
            <div className="mt-1">{address}</div>
          </div>
        )}

        {/* PAYMENT */}
<div className="border rounded-xl p-4 bg-white shadow-sm">
  <h3 className="font-semibold mb-3">Payment Method</h3>

  <div className="space-y-2">

    <label className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer">
      <input
        type="radio"
        value="ONLINE"
        checked={paymentMethod === "ONLINE"}
        onChange={(e) => setPaymentMethod(e.target.value)}
      />
      <span>Pay Online (UPI / Card / Wallet)</span>
    </label>

    <label className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer">
      <input
        type="radio"
        value="COD"
        checked={paymentMethod === "COD"}
        onChange={(e) => setPaymentMethod(e.target.value)}
      />
      <span>Cash on Service</span>
    </label>

  </div>
</div>

        {/* total */}
        <div className="border-t border-blue-100 pt-3">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">
              Total
            </span>
            <span className="text-3xl font-bold text-blue-600">
              ₹{getTotalPrice() - discount}
            </span>
          </div>
        </div>
      </div>

      {/* login required */}
      {!isLoggedIn ? (
        <div className="border rounded-xl p-4 bg-white shadow-sm">
          <h3 className="font-semibold mb-1">Account</h3>
          <p className="text-sm text-gray-500 mb-3">
            To book the service, please login or sign up
          </p>

          <button
            onClick={() => window.dispatchEvent(new Event("openLogin"))}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg"
          >
            Login
          </button>
        </div>
      ) : (
        <Button
          onClick={handleCheckout}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
          size="lg"
        >
          Confirm Booking
        </Button>
      )}

      {/* note */}
      <div className="backdrop-blur-lg bg-blue-50/50 rounded-lg p-4 border border-blue-100">
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> A professional will be assigned to you after booking confirmation.
        </p>
      </div>

    </CardContent>
  </Card>
</div>
        </div>
      </div>
      {showSuccess && (
  <div className="fixed inset-0 z-[9999] backdrop-blur-md bg-black/30 flex items-center justify-center p-4">

    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center">

      {/* icon */}
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        ✓
      </div>

      <h2 className="text-2xl font-bold mb-2">
        Booking Confirmed Successfully
      </h2>

      <p className="text-gray-600 mb-4">
        A professional will be assigned shortly.
      </p>

      <p className="text-sm text-gray-500 mb-6">
        You will receive confirmation message on your mobile number.
      </p>

      <Link to="/bookings">
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg mb-3">
          Go to My Bookings
        </button>
      </Link>

      <Link to="/services">
        <button className="w-full border py-3 rounded-lg">
          Browse Other Services
        </button>
      </Link>

    </div>
  </div>
)}
    </div>
  );
};

export default Cart;
