import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle2, Search, Calendar, UserCheck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { serviceCategories, testimonials, howItWorks } from '../mockData';
import * as LucideIcons from 'lucide-react';

const Home = () => {
  const popularCategories = serviceCategories.filter(cat => cat.popular);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Home Services
                <span className="block text-blue-600">At Your Doorstep</span>
              </h1>
              <p className="text-lg text-gray-600">
                Professional, verified experts for all your home service needs. Book trusted professionals in seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Book Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-blue-600">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-gray-600">Professionals</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">4.8</div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    Rating
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-8 shadow-2xl border border-white/50">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop" 
                  alt="Professional services"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Services</h2>
            <p className="text-lg text-gray-600">Most booked services by our customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCategories.map((category) => {
              const IconComponent = LucideIcons[category.icon];
              return (
                <Link key={category.id} to={`/services?category=${category.id}`}>
                  <Card className="group cursor-pointer backdrop-blur-lg bg-white/80 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="h-48 overflow-hidden rounded-lg mb-4">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                          {IconComponent && <IconComponent className="h-6 w-6 text-blue-600" />}
                        </div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          {category.name}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-gray-600">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Book your service in 4 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step) => {
              const IconComponent = LucideIcons[step.icon];
              return (
                <div key={step.step} className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
                    <div className="relative backdrop-blur-lg bg-white/90 rounded-full p-6 shadow-lg border border-blue-100">
                      {IconComponent && <IconComponent className="h-8 w-8 text-blue-600" />}
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
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
