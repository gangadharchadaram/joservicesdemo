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


const Home = () => {
  const popularCategories = serviceCategories.filter(cat => cat.popular);
  const [search, setSearch] = useState("");
const [results, setResults] = useState([]);
const scrollRef = useRef();
const sliderRefs = useRef({});
const navigate = useNavigate();

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
  <div className="w-full px-6 lg:px-16">

    {/* Header */}
    <div className="flex items-center justify-between mb-8">
      <div>
        <p className="text-blue-600 font-semibold">CATEGORIES</p>
        <h2 className="text-3xl font-bold">Popular Categories</h2>
      </div>

      <button
        onClick={() => navigate("/services")}
        className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50"
      >
        Check All →
      </button>
    </div>

    {/* Slider */}
    <div className="relative">

      {/* left arrow */}
      <button
        onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10"
      >
        <ChevronLeft />
      </button>

      {/* categories */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-10"
      >
        {serviceCategories.map(category => {

          const count = services.filter(
            s => s.categoryId === category.id
          ).length;

          return (
            <div
              key={category.id}
              onClick={() => navigate(`/services?category=${category.id}`)}
              className="min-w-[220px] bg-white border rounded-2xl p-6 text-center cursor-pointer hover:shadow-xl transition"
            >
              <img
                src={category.image}
                className="h-20 mx-auto mb-4"
              />

              <h3 className="font-semibold text-lg">
                {category.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {count} Services
              </p>
            </div>
          );
        })}
      </div>

      {/* right arrow */}
      <button
        onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full"
      >
        <ChevronRight />
      </button>

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

{/* Included Services */}
<section className="py-20 bg-white">
  <div className="w-full px-6 lg:px-16">

    <div className="mb-10">
      <p className="text-blue-600 font-semibold tracking-wider">
        FEATURED
      </p>
      <h2 className="text-4xl font-bold text-gray-900">
        Included Services
      </h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {services.slice(0,6).map(service => {

        const category = serviceCategories.find(
          c => c.id === service.categoryId
        );

        return (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-sm border hover:shadow-xl transition overflow-hidden"
          >

            {/* image */}
            <div className="relative">
              <img
                src={service.image}
                className="w-full h-56 object-cover"
              />

              <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md text-sm font-medium shadow">
                {category?.name}
              </span>
            </div>

            {/* content */}
            <div className="p-5">

              {/* location + rating */}
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>📍 Hyderabad</span>
                <span>⭐ {service.rating}</span>
              </div>

              {/* title */}
              <h3 className="font-semibold text-lg mb-3">
                {service.name}
              </h3>

              {/* price */}
              <div className="flex items-center justify-between">

                <div>
                  <div className="text-sm text-gray-500">
                    Starting from
                  </div>
                  <div className="text-xl font-bold text-blue-600">
                    ₹{service.price}
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/service/${service.id}`)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Book Now
                </button>

              </div>

            </div>
          </div>
        );
      })}

    </div>
  </div>
</section>
{/* Services By Category */}
{/* Zig Zag Services */}
<div className="py-20 space-y-20">

{serviceCategories.map((category, index) => {

  const categoryServices = services.filter(
    s => s.categoryId === category.id
  );

  if (!categoryServices.length) return null;

  const isBlue = index % 2 !== 0;

  return (
    <div key={category.id} className="w-full px-6 lg:px-16">

      <div
        className={`rounded-3xl p-10 ${
          isBlue
            ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white"
            : "bg-white"
        }`}
      >
        <div className={`grid md:grid-cols-2 gap-12 items-center`}>

          {/* image */}
          <div className={isBlue ? "md:order-2" : ""}>
            <img
              src={category.image}
              className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
            />
          </div>

          {/* content */}
          <div className={isBlue ? "md:order-1" : ""}>
            <h2 className="text-3xl font-bold mb-6">
              {category.name}
            </h2>

            <div className="space-y-3 mb-6">
              {categoryServices.slice(0,4).map(service => (
                <div
                  key={service.id}
                  className={`flex justify-between p-3 rounded-lg ${
                    isBlue
                      ? "bg-white/10"
                      : "bg-blue-50"
                  }`}
                >
                  <span>{service.name}</span>
                  <span className="font-semibold">
                    ₹{service.price}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate(`/services?category=${category.id}`)}
              className={`px-5 py-3 rounded-lg ${
                isBlue
                  ? "bg-white text-blue-600"
                  : "bg-blue-600 text-white"
              }`}
            >
              Explore Services
            </button>
          </div>

        </div>
      </div>

    </div>
  );

})}

</div>

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
