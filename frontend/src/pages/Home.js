import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle2, Search, Calendar, UserCheck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { serviceCategories, testimonials, howItWorks } from '../mockData';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { MapPin, Wrench, Paintbrush, Zap, Hammer, CheckCircle } from "lucide-react";
import { services } from "../mockData";
import { useNavigate } from "react-router-dom";
import * as Icons from "lucide-react";
import { ClipboardList, User, Lightbulb } from "lucide-react";
import logo from '../components/images/WhatsApp_Image_2026-04-12_at_7.52.00_AM-removebg-preview.png'

import {
  Scissors,
  Brush,
  Wind,
} from "lucide-react";


import {
  Sparkles,
  Droplets,
  Settings
} from "lucide-react";


const Home = () => {
  const popularCategories = serviceCategories.filter(cat => cat.popular);
  const [search, setSearch] = useState("");
const [results, setResults] = useState([]);
const scrollRef = useRef();
const sliderRefs = useRef({});
const navigate = useNavigate();
const [showProviderSignup, setShowProviderSignup] = useState(false);
const [providerStep, setProviderStep] = useState(1);

const servicesList = [
  { name: "InstaHelp", icon: Sparkles, time: "50 mins", id: 1 },
  { name: "Salon", icon: Scissors, time: "45 mins", id: 2 },
  { name: "Grooming", icon: User, time: "44 mins", id: 3 },
  { name: "Cleaning", icon: Brush, id: 4 },
  { name: "AC Repair", icon: Wind, time: "45 mins", id: 5 },
  { name: "Water", icon: Droplets, id: 6 },
  { name: "Electrician", icon: Zap, time: "25 mins", id: 7 },
  { name: "Painting", icon: Paintbrush, id: 8 },
  { name: "Carpenter", icon: Hammer, id: 9 }
];

const [offsetY, setOffsetY] = useState(0);

useEffect(() => {
  const handleScroll = () => setOffsetY(window.scrollY);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);




const iconMap = {
Wrench,
Zap,
Paintbrush,
Sparkles,
Hammer,
Home,
Droplets,
Settings
};

const handleSearch = (value) => {
  setSearch(value);

  const filtered = servicesList.filter(s =>
    s.toLowerCase().includes(value.toLowerCase())
  );

  setResults(filtered);
};

  return (
    <div className="min-h-screen">
     {/* Hero Section */}

<section className="relative w-full h-[760px] overflow-hidden">

  {/* ================= MAIN FLEX ================= */}
  <div className="flex w-full h-full">

    {/* ================= LEFT SIDE ================= */}
    <div className="w-[70%] relative overflow-hidden">

      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#1e3a8a]/80 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-10 lg:px-20 text-white">
        <div className="max-w-xl">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Home Services,
            <br />
            <span className="text-yellow-400">On Demand</span>
          </h1>

          <p className="mt-5 text-gray-200">
            Book trusted professionals for cleaning, repairs, beauty & more.
          </p>

          {/* SEARCH */}
          <div className="mt-6 flex bg-white rounded-xl overflow-hidden w-[420px]">
            <input
              placeholder="Search for 'AC repair', 'Plumbing'..."
              className="flex-1 px-4 py-3 text-black outline-none"
            />
            <button className="bg-blue-600 text-white px-5">
              Search
            </button>
          </div>

          {/* TRUST */}
          <div className="flex items-center gap-6 mt-6 text-sm text-gray-200">
            <div>⭐ 4.8 Rating</div>
            <div className="w-[1px] h-4 bg-gray-400"></div>
            <div>10K+ Customers</div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex gap-4">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold">
              Book Now
            </button>
            <button className="border border-white px-6 py-3 rounded-xl">
              Explore
            </button>
          </div>

        </div>
      </div>

  {/* 🔥 RIGHT SIDE CURVE (MATCHES BOTTOM STYLE) */}
<svg
  className="absolute right-[-1px] top-0 h-full w-[220px] z-20"
  viewBox="0 0 220 800"
  preserveAspectRatio="none"
>
  <path
    d="
      M0,0 
      C120,120 120,280 60,400 
      C0,520 0,680 120,800 
      L220,800 
      L220,0 
      Z
    "
    fill="white"
  />
</svg>

    </div>

    {/* ================= RIGHT SIDE ================= */}
 <div className="w-[30%] relative flex items-center justify-center px-6">

  {/* 🔥 BACKGROUND LAYER (IMPORTANT) */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

  {/* 🔥 GLASS CARD */}
  <div className="
    relative
    backdrop-blur-xl bg-white/30 
    border border-white/40 
    shadow-2xl 
    rounded-3xl 
    p-6 mr-16 w-full max-w-[360px]
  ">

    <h3 className="text-lg font-semibold text-gray-800 mb-5">
      What are you looking for?
    </h3>

    <div className="grid grid-cols-3 gap-4">

      {servicesList.map((item, i) => {
        const Icon = item.icon;

        return (
          <div
            key={i}
            onClick={() => navigate(`/services?category=${item.id}`)}
            className="
              group
              backdrop-blur-md bg-white/40
              border border-white/30
              rounded-xl p-4 text-center
              cursor-pointer transition
              hover:bg-white/60 hover:scale-105
            "
          >

            {/* ICON */}
            <div className="flex justify-center mb-2">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>

            {/* TIME */}
            {item.time && (
              <div className="text-[10px] bg-green-100 text-green-600 px-2 py-[2px] rounded-full inline-block mb-1">
                {item.time}
              </div>
            )}

            {/* NAME */}
            <div className="text-xs text-gray-800 font-medium">
              {item.name}
            </div>

          </div>
        );
      })}

    </div>

  </div>
</div>

  </div>

  {/* 🔥 BOTTOM CURVE */}
  <div className="absolute bottom-0 left-0 w-full">
    <svg viewBox="0 0 1440 150" className="w-full">
      <path
        fill="#ffffff"
        d="M0,80 C400,150 1000,0 1440,80 L1440,150 L0,150 Z"
      />
    </svg>
  </div>

</section>

{/* Popular Categories */}

<section className="py-20 bg-white">
  <div className="w-full px-6 lg:px-16">

    {/* Header */}
    <div className="flex items-center justify-between mb-12">
      <h2 className="text-3xl font-bold text-gray-900">
        Browse pros in your area
      </h2>

      <button
        onClick={() => navigate("/services")}
        className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
      >
        View all →
      </button>
    </div>

    {/* categories grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">

      {serviceCategories.map(category => {

        const Icon = Icons[category.icon] || Icons.Wrench;

        return (
          <div
            key={category.id}
            onClick={() => navigate(`/services?category=${category.id}`)}
            className="flex items-center gap-4 cursor-pointer group"
          >

            {/* circle icon */}
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition">
              <Icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600"/>
            </div>

            {/* label */}
            <span className="text-gray-800 font-medium group-hover:text-blue-600">
              {category.name}
            </span>

          </div>
        );
      })}

    </div>

  </div>
</section>

{/* Popular Projects */}
<section className="pt-15 bg-gray-50">
  <div className="w-full px-6 lg:px-16">

    {/* header */}
    <div className="flex items-center justify-between mb-10">
      <h2 className="text-3xl font-bold text-gray-900">
        Popular projects near you
      </h2>

      <button className="text-blue-600 font-medium">
        View all →
      </button>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* LEFT CARD */}
    {/* LEFT CARD */}
<div className="bg-white rounded-3xl p-6 shadow-sm border relative overflow-hidden">

  <h3 className="text-xl font-semibold mb-2">
    Get matched
    <br /> with local pros
  </h3>

  <p className="text-gray-500 text-sm mb-6">
    for your next home project.
  </p>

  <img
    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    className="w-full mt-6 rounded-xl"
  />

  {/* 🔥 CURVE BACKGROUND */}
  <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full -mr-20 -mb-20 flex items-center justify-center">

    {/* 🔥 INNER GLOW CIRCLE */}
    <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-xl">

      {/* 🔥 LOGO */}
      <img
        src={logo} // 👈 your imported logo
        alt="logo"
        className="w-46 h-16 object-contain"
      />

    </div>

  </div>

</div>


      {/* RIGHT LIST */}
      <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

        {[
          {
            name:"AC Repair",
            rating:"4.7",
            price:"₹499",
            image:"https://images.unsplash.com/photo-1581578731548-c64695cc6952"
          },
          {
            name:"Home Cleaning",
            rating:"4.8",
            price:"₹899",
            image:"https://images.unsplash.com/photo-1527515637462-cff94eecc1ac"
          },
          {
            name:"Painting Service",
            rating:"4.6",
            price:"₹1499",
            image:"https://images.unsplash.com/photo-1562259949-e8e7689d7828"
          },
          {
            name:"Plumbing Service",
            rating:"4.5",
            price:"₹299",
            image:"https://images.unsplash.com/photo-1585704032915-c3400ca199e7"
          },
          {
            name:"Electrician",
            rating:"4.8",
            price:"₹249",
            image:"https://images.unsplash.com/photo-1581092160562-40aa08e78837"
          },
          {
            name:"Carpentry",
            rating:"4.6",
            price:"₹699",
            image:"https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          }
        ].map((item, i) => (

          <div
            key={i}
            className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm border hover:shadow-md cursor-pointer transition"
          >

            <img
              src={item.image}
              className="w-20 h-16 object-cover rounded-lg"
            />

            <div>
              <div className="font-semibold text-gray-900">
                {item.name}
              </div>

              <div className="text-sm text-gray-500">
                ⭐ {item.rating}
              </div>

              <div className="text-sm font-medium text-gray-900">
                From {item.price}
              </div>
            </div>

          </div>

        ))}

      </div>
    </div>
  </div>
</section>

{/*how it works*/}

     <section className="relative pt-2 pb-10 bg-white overflow-hidden">

  {/* ✅ TITLE - FULL WIDTH LEFT (LIKE TEMPLATE) */}
{/* TITLE - PERFECT ALIGNMENT */}
<div className="pl-6 lg:pl-24 absolute top-[65%] -translate-y-1/2 z-10">
  
  <p className="text-blue-400 tracking-widest font-semibold mb-3">
    STEPS
  </p>

  <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
    How JO Services <br /> Works
  </h2>

</div>

  {/* ✅ MAIN CONTENT (CURVE + STEPS) */}
  <div className="max-w-7xl mx-auto px-6 lg:px-16 relative">

    {/* CURVE */}
<svg className="absolute top-[8%] left-0 w-full hidden md:block" viewBox="0 0 1200 300" fill="none" > <path d="M0,120 C250,60 200,300 600,180 C800,120 750,270 1200, 200" stroke="#2563eb" strokeWidth="4" fill="transparent" /> </svg>
    {/* STEPS */}
    <div className="relative h-[400px] hidden md:block">

      {/* STEP 1 */}
<div className="absolute left-[28%] top-[53%] text-center">
        <div className="w-24 h-24 bg-blue-600 rounded-[30%] rotate-45 flex items-center justify-center shadow-xl">
          <ClipboardList className="text-white w-10 h-10 -rotate-45" />
        </div>
        <h3 className="mt-6 font-semibold text-blue-900">
          Choose Your Service
        </h3>
        <p className="text-gray-500 text-sm max-w-[200px] mx-auto">
          Pick the service you are looking for from the website or app.
        </p>
      </div>

      {/* STEP 2 */}
<div className="absolute left-[55%] top-[42%] text-center">
        <div className="w-24 h-24 bg-blue-600 rounded-[30%] rotate-45 flex items-center justify-center shadow-xl">
          <User className="text-white w-10 h-10 -rotate-45" />
        </div>
        <h3 className="mt-6 font-semibold text-blue-900">
          Pick Your Schedule
        </h3>
        <p className="text-gray-500 text-sm max-w-[200px] mx-auto">
          Select your convenient date and time for service.
        </p>
      </div>

      {/* STEP 3 */}
<div className="absolute right-[0%] top-[54%] text-center">
          <div className="w-24 h-24 bg-blue-600 rounded-[30%] rotate-45 flex items-center justify-center shadow-xl">
          <Lightbulb className="text-white w-10 h-10 -rotate-45" />
        </div>
        <h3 className="mt-6 font-semibold text-blue-900">
           Place The Order
        </h3>
        <p className="text-gray-500 text-sm max-w-[200px] mx-auto">
          Confirm booking and our professional will reach you.
        </p>
      </div>

    </div>

  </div>

</section>

{/* Popular Home Projects */}
<section className="py-20 bg-white">
  <div className="w-full px-6 lg:px-16">

    {/* header */}
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-3xl font-bold text-gray-900">
        Popular home projects
      </h2>

      <button className="text-blue-600 font-medium">
        View all →
      </button>
    </div>

    <div className="grid md:grid-cols-3 gap-6">

      {[
        {
          title:"One-time cleaning service",
          rating:"4.9",
          reviews:"256",
          price:"₹699",
          image:"https://images.unsplash.com/photo-1581578731548-c64695cc6952"
        },
        {
          title:"Handyperson for small projects",
          rating:"4.7",
          reviews:"63",
          price:"₹499",
          image:"https://images.unsplash.com/photo-1621905251918-48416bd8575a"
        },
        {
          title:"Fence installation & repair",
          rating:"4.8",
          reviews:"29",
          price:"₹899",
          image:"https://images.unsplash.com/photo-1503387762-592deb58ef4e"
        }
      ].map((item,i)=>(
        
        <div
          key={i}
          className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition"
        >

          {/* image */}
          <div className="relative">

            <img
              src={item.image}
              className="w-full h-56 object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>

            {/* title */}
            <div className="absolute bottom-4 left-4 right-4 text-white font-semibold text-lg">
              {item.title}
            </div>

          </div>

          {/* bottom */}
          <div className="flex items-center justify-between p-4">

            <div className="text-sm text-gray-600">
              ⭐ {item.rating} ({item.reviews})
              <div className="text-gray-900 font-medium">
                From {item.price}
              </div>
            </div>

            <button className="border px-4 py-2 rounded-lg hover:bg-blue-50">
              Book now
            </button>

          </div>

        </div>

      ))}

    </div>
  </div>
</section>

{/* Become a Professional CTA */}
<section className="py-20 bg-white">
  <div className="w-full px-6 lg:px-16">

    <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-lg">

      {/* LEFT BLUE */}
      <div className="bg-blue-600 text-white p-12 flex flex-col justify-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Grow your business with us.
          <br />
          Become a Pro today
        </h2>

        <p className="text-blue-100 mb-6">
          Join JO Services and connect with customers near you.
          Increase your bookings and grow your service business.
        </p>

        <div className="flex gap-4">
        <button
onClick={() => navigate("/become-provider")}
className="bg-white text-blue-600 px-6 py-3 rounded-lg"
>
+ Add business
</button>

          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition">
            Learn more →
          </button>
        </div>
         
      </div>

      

{/* RIGHT IMAGE */}
<div className="relative flex items-center justify-center">

  <img
    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
    className="w-full h-full object-cover"
  />
  
   {/* CENTER ROTATING CIRCLE */}
  <div className="absolute inset-0 flex items-center justify-center">

    <div className="relative w-40 h-40 flex items-center justify-center">

      {/* rotating text */}
      <div className="absolute inset-0 animate-spin-slow">

        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 100,100
                 m -75,0
                 a 75,75 0 1,1 150,0
                 a 75,75 0 1,1 -150,0"
            />
          </defs>

          <text
            fill="white"
            fontSize="12"
            letterSpacing="2"
            fontWeight="600"
          >
            <textPath href="#circlePath">
              JOIN OUR PROFESSIONAL NETWORK • BECOME A PARTNER •
            </textPath>
          </text>

        </svg>

      </div>

      {/* circle border */}
      <div className="absolute inset-0 border border-white/40 rounded-full"></div>

      {/* center dot */}
      <div className="w-4 h-4 bg-white rounded-full z-10"></div>

    </div>

  </div>
 

</div>

    </div>
   {showProviderSignup && (
<div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-center justify-center">

<div className="bg-white w-[900px] rounded-2xl shadow-2xl p-8 relative">

{/* close */}
<button
onClick={()=>setShowProviderSignup(false)}
className="absolute top-4 right-4 text-gray-500"
>
✕
</button>

{/* header */}
<h2 className="text-2xl font-bold mb-6">
What is your business address?
</h2>

<div className="grid grid-cols-2 gap-4">

<input placeholder="Country" className="border p-3 rounded-lg"/>
<input placeholder="City" className="border p-3 rounded-lg"/>

<input placeholder="District" className="border p-3 rounded-lg"/>
<input placeholder="Zip Code" className="border p-3 rounded-lg"/>

</div>

<input 
placeholder="Address line" 
className="border p-3 rounded-lg w-full mt-4"
/>

<h3 className="text-xl font-semibold mt-6">
Where do you want to work?
</h3>

<input
placeholder="Search area where you provide your services"
className="border p-3 rounded-lg w-full mt-3"
/>

<div className="flex gap-2 mt-4">
<span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Ameerpet</span>
<span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Madhapur</span>
<span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Kondapur</span>
</div>

<button
onClick={() => setProviderStep(2)}
className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg"
>
Continue
</button>
{providerStep === 2 && (
<>
<h2 className="text-2xl font-bold mb-6">
Choose services you provide
</h2>

<div className="grid grid-cols-3 gap-4">

{[
"AC Repair",
"Plumbing",
"Electrician",
"Cleaning",
"Painting",
"Carpentry",
"Appliance Repair",
"Home Cleaning",
"Bathroom Cleaning"
].map(service => (

<label className="border rounded-xl p-4 flex items-center gap-3 cursor-pointer hover:border-blue-500">

<input type="checkbox" />

<span>{service}</span>

</label>

))}

</div>

<div className="flex justify-between mt-6">

<button
onClick={()=>setProviderStep(1)}
className="border px-6 py-3 rounded-lg"
>
Back
</button>

<button
onClick={()=>setProviderStep(3)}
className="bg-blue-600 text-white px-6 py-3 rounded-lg"
>
Continue
</button>

</div>
</>
)}
{providerStep === 3 && (
<>
<h2 className="text-2xl font-bold mb-6">
Profile details
</h2>

<div className="grid grid-cols-2 gap-4">

<input
placeholder="Full Name"
className="border p-3 rounded-lg"
/>

<input
placeholder="Phone Number"
className="border p-3 rounded-lg"
/>

<input
placeholder="Years of Experience"
className="border p-3 rounded-lg"
/>

<input
placeholder="City"
className="border p-3 rounded-lg"
/>

</div>

<textarea
placeholder="About your services"
className="border p-3 rounded-lg w-full mt-4 h-24"
/>

{/* upload */}
<div className="mt-4">
<label className="block text-sm font-medium mb-2">
Upload profile photo
</label>

<input type="file" />
</div>

<div className="flex justify-between mt-6">

<button
onClick={()=>setProviderStep(2)}
className="border px-6 py-3 rounded-lg"
>
Back
</button>

<button
onClick={()=>setProviderStep(4)}
className="bg-blue-600 text-white px-6 py-3 rounded-lg"
>
Continue
</button>

</div>
</>
)}
{providerStep === 4 && (
<>
<h2 className="text-2xl font-bold mb-6">
Price & working hours
</h2>

{/* service price */}
<div className="mb-4">
<label className="block text-sm font-medium mb-2">
Starting price
</label>

<input
placeholder="₹ 299"
className="border p-3 rounded-lg w-full"
/>
</div>

{/* working days */}
<div className="mb-4">
<label className="block text-sm font-medium mb-2">
Working days
</label>

<div className="flex flex-wrap gap-2">
{["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(day => (
<label className="border px-3 py-2 rounded-lg flex gap-2 items-center">
<input type="checkbox"/>
{day}
</label>
))}
</div>
</div>

{/* time */}
<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-sm">Start time</label>
<input type="time" className="border p-3 rounded-lg w-full"/>
</div>

<div>
<label className="text-sm">End time</label>
<input type="time" className="border p-3 rounded-lg w-full"/>
</div>
</div>

{/* instant booking */}
<div className="flex items-center gap-3 mt-4">
<input type="checkbox"/>
<span>Accept instant bookings</span>
</div>

<div className="flex justify-between mt-6">

<button
onClick={()=>setProviderStep(3)}
className="border px-6 py-3 rounded-lg"
>
Back
</button>

<button
onClick={()=>setProviderStep(5)}
className="bg-blue-600 text-white px-6 py-3 rounded-lg"
>
Create Profile
</button>

</div>
</>
)}

{providerStep === 5 && (
<div className="text-center py-10">

<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
✓
</div>

<h2 className="text-2xl font-bold mb-2">
Profile Created Successfully
</h2>

<p className="text-gray-600 mb-6">
Your provider profile is ready.  
Customers can now book your services.
</p>

<div className="flex justify-center gap-4">

<button
onClick={()=>{
setShowProviderSignup(false)
navigate("/provider-dashboard")
}}
className="bg-blue-600 text-white px-6 py-3 rounded-lg"
>
Go to Dashboard
</button>

<button
onClick={()=>setProviderStep(1)}
className="border px-6 py-3 rounded-lg"
>
Create Another
</button>

</div>

</div>
)}

</div>
</div>
)}
  </div>
</section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600">Experience the difference with JO Services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="backdrop-blur-lg bg-white/80 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="p-3 rounded-lg bg-blue-50 w-fit mb-4">
                  <CheckCircle2 className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Verified Professionals</CardTitle>
                <CardDescription>
                  All our service providers are thoroughly background-checked and verified for your safety.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="backdrop-blur-lg bg-white/80 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="p-3 rounded-lg bg-blue-50 w-fit mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Quality Guaranteed</CardTitle>
                <CardDescription>
                  We ensure high-quality service delivery with a 30-day service guarantee on all bookings.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="backdrop-blur-lg bg-white/80 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="p-3 rounded-lg bg-blue-50 w-fit mb-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Flexible Scheduling</CardTitle>
                <CardDescription>
                  Book services at your convenience with flexible time slots and same-day availability.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="w-full px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Don't just take our word for it</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="backdrop-blur-xl bg-white/80 border border-blue-100 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full border-2 border-blue-200"
                    />
                    <div>
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-700">
                    "{testimonial.text}"
                  </CardDescription>
                  <div className="mt-3 text-xs text-blue-600 font-medium">
                    {testimonial.service}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Book your first service today and experience professional home services like never before.
          </p>
          <Link to="/services">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300">
              Book a Service Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
