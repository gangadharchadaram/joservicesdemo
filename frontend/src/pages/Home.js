import React, { useState } from "react";
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

  if (value.trim() === "") {
    setResults([]);
    return;
  }

  const filtered = services.filter(service =>
    service.name.toLowerCase().includes(value.toLowerCase())
  );

  setResults(filtered);
};

  return (
    <div className="min-h-screen">
     {/* Hero Section */}
<section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-20">
  <div className="w-full px-6 lg:px-16">
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Choose Experts
          <br />
          to Complete Your
          <br />
          <span className="text-blue-600">Job</span> Done
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-xl">
          Explore our marketplace to find top-rated professionals in your area.
          Compare reviews, check availability, and book services with confidence.
        </p>

        {/* Search Box with Location */}
<div className="relative mt-8 max-w-xl">

  <div className="flex bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">

    {/* location */}
    <div className="flex items-center gap-2 px-4 border-r bg-gray-50">
      <MapPin className="w-4 h-4 text-blue-600" />
      <select className="bg-transparent outline-none py-4">
        <option>Ameerpet</option>
        <option>Kondapur</option>
      </select>
    </div>

    {/* input */}
    <input
      value={search}
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Find your service here"
      className="flex-1 px-4 py-4 outline-none"
    />

    <button className="bg-blue-600 px-6 text-white">
      <Search className="w-5 h-5"/>
    </button>

  </div>

  {/* dropdown */}
  {results.length > 0 && (
    <div className="absolute top-full left-0 right-0 bg-white shadow-xl rounded-xl mt-2 border border-gray-100 z-50 max-h-80 overflow-y-auto">

      {results.map(service => (
        <div
          key={service.id}
          onClick={() => navigate(`/service/${service.id}`)}
          className="flex items-center gap-3 p-3 hover:bg-blue-50 cursor-pointer border-b last:border-none"
        >
          <img
            src={service.image}
            className="w-12 h-12 rounded-lg object-cover"
          />

          <div className="flex-1">
            <div className="font-medium text-gray-900">
              {service.name}
            </div>

            <div className="text-sm text-gray-500">
              ⭐ {service.rating} • ₹{service.price}
            </div>
          </div>

        </div>
      ))}

    </div>
  )}

</div>

        {/* Customers */}
        <div className="flex items-center gap-4 mt-8">
          <div className="flex -space-x-3">
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg"/>
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg"/>
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/22.jpg"/>
          </div>

          <div>
            <div className="font-semibold text-blue-600">2k+ Customers</div>
            <div className="text-sm text-gray-600">
              Satisfied with JO services
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex justify-center">


  {/* background shape */}
  <div className="absolute w-[420px] h-[420px] bg-blue-600 rounded-[40px] rotate-6 opacity-90"></div>

  {/* floating icons */}
  <div className="absolute -top-6 left-10 animate-bounce">
    <div className="bg-white p-3 rounded-xl shadow-lg">
      <Wrench className="text-blue-600 w-5 h-5" />
    </div>
  </div>

  <div className="absolute top-10 -right-6 animate-pulse">
    <div className="bg-white p-3 rounded-xl shadow-lg">
      <Paintbrush className="text-blue-600 w-5 h-5" />
    </div>
  </div>

  <div className="absolute bottom-20 -left-6 animate-bounce delay-200">
    <div className="bg-white p-3 rounded-xl shadow-lg">
      <Zap className="text-blue-600 w-5 h-5" />
    </div>
  </div>

  <div className="absolute bottom-0 right-16 animate-pulse delay-300">
    <div className="bg-white p-3 rounded-xl shadow-lg">
      <Hammer className="text-blue-600 w-5 h-5" />
    </div>
  </div>

  {/* main image */}
  <img
    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=900&auto=format&fit=crop"
    className="relative w-[420px] h-[420px] object-cover rounded-[40px] shadow-2xl"
  />

        {/* Floating Card */}
        <div className="absolute bottom-5 left-0 bg-white shadow-lg rounded-xl px-4 py-3 border border-blue-100">
          <div className="text-sm font-semibold">Cleaning Reviews</div>
          <div className="text-xs text-gray-500">⭐ 5.0 Great</div>
        </div>

      </div>

    </div>
  </div>
</section>

{/* Popular Categories */}

<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-16">

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
<section className="py-20 bg-gray-50">
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
      <div className="bg-white rounded-3xl p-6 shadow-sm border relative overflow-hidden">

        <h3 className="text-xl font-semibold mb-2">
          Get matched
          <br/> with local pros
        </h3>

        <p className="text-gray-500 text-sm mb-6">
          for your next home project.
        </p>

        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          className="w-full mt-6"
        />

        <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-50 rounded-full -mr-20 -mb-20"/>
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

 {/* How It Works */}
<section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-[30px] mx-6 lg:mx-16 my-20">
  <div className="text-center mb-14">
    <div className="text-blue-100 font-semibold tracking-wider mb-3">
      HOW IT WORKS
    </div>

    <h2 className="text-4xl font-bold mb-4">
      Convenient Service Access
    </h2>

    <p className="text-blue-100 max-w-2xl mx-auto">
      Book your service in few simple steps. Choose service, select schedule
      and our professional will reach your doorstep.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-10 px-6 lg:px-20">

    {/* Step 1 */}
    <div className="text-center relative">
      <div className="w-24 h-24 mx-auto rounded-full border-2 border-blue-400 shadow-xl flex items-center justify-center mb-6">
        <Search className="w-10 h-10 text-blue-600" />
      </div>

      <div className="text-5xl text-white/20 absolute -top-6 left-1/2 -translate-x-1/2 font-bold">
        01
      </div>

      <h3 className="text-xl font-semibold mb-2">
        Choose Your Service
      </h3>

      <p className="text-blue-100 text-sm">
        Pick the service you are looking for from the website or app.
      </p>
    </div>

    {/* Step 2 */}
    <div className="text-center relative">
      <div className="w-24 h-24 mx-auto rounded-full border-2 border-blue-400 shadow-xl flex items-center justify-center mb-6">
        <Calendar className="w-10 h-10 text-blue-600" />
      </div>

      <div className="text-5xl text-white/20 absolute -top-6 left-1/2 -translate-x-1/2 font-bold">
        02
      </div>

      <h3 className="text-xl font-semibold mb-2">
        Pick Your Schedule
      </h3>

      <p className="text-blue-100 text-sm">
        Select your convenient date and time for service.
      </p>
    </div>

    {/* Step 3 */}
    <div className="text-center relative">
      <div className="w-24 h-24 mx-auto rounded-full border-2 border-blue-400 shadow-xl flex items-center justify-center mb-6">
        <CheckCircle className="w-10 h-10 text-blue-600" />
      </div>

      <div className="text-5xl text-white/20 absolute -top-6 left-1/2 -translate-x-1/2 font-bold">
        03
      </div>

      <h3 className="text-xl font-semibold mb-2">
        Place The Order
      </h3>

      <p className="text-blue-100 text-sm">
        Confirm booking and our professional will reach you.
      </p>
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
