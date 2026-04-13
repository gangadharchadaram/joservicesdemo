import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Star, Clock, ArrowLeft, Calendar as CalendarIcon, Award, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Calendar } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { useCart } from '../context/CartContext';
import { services, serviceCategories, professionals } from '../mockData';
import { format } from 'date-fns';

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const service = services.find(s => s.id === parseInt(id));
  const category = serviceCategories.find(c => c.id === service?.categoryId);
  const categoryProfessionals = professionals.filter(p => 
    p.specialization === category?.name.replace(' Services', '')
  );

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h2>
          <Link to="/services">
            <Button className="bg-blue-600 hover:bg-blue-700">Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time');
      return;
    }
    addToCart(service, format(selectedDate, 'PPP'), selectedTime);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/services">
          <Button variant="ghost" className="mb-6 hover:bg-blue-50">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Services
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Service Header */}
            <Card className="backdrop-blur-xl bg-white/90 border border-blue-100 shadow-xl">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-sm text-blue-600 font-medium mb-2">{category?.name}</div>
                    <CardTitle className="text-3xl mb-4">{service.name}</CardTitle>
                    <div className="flex items-center space-x-6 mb-4">
                      <div className="flex items-center space-x-2">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-lg">{service.rating}</span>
                        <span className="text-gray-500">({service.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="h-5 w-5" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">₹{service.price}</div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Service Details */}
            <Card className="backdrop-blur-xl bg-white/90 border border-blue-100 shadow-xl">
              <CardHeader>
                <CardTitle>Service Details</CardTitle>
                <CardDescription className="mt-4 space-y-3 text-base">
                  <p>Our professional {category?.name.toLowerCase()} are designed to provide you with the best quality service at your doorstep.</p>
                  <p>All our professionals are verified, background-checked, and trained to deliver excellent service.</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="backdrop-blur-lg bg-blue-50/50 rounded-lg p-4 border border-blue-100">
                    <Award className="h-8 w-8 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Quality Service</h4>
                    <p className="text-sm text-gray-600">Certified professionals</p>
                  </div>
                  <div className="backdrop-blur-lg bg-blue-50/50 rounded-lg p-4 border border-blue-100">
                    <Shield className="h-8 w-8 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">30-Day Warranty</h4>
                    <p className="text-sm text-gray-600">Service guarantee</p>
                  </div>
                  <div className="backdrop-blur-lg bg-blue-50/50 rounded-lg p-4 border border-blue-100">
                    <CalendarIcon className="h-8 w-8 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Flexible Timing</h4>
                    <p className="text-sm text-gray-600">Book as per schedule</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Professionals */}
           
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="backdrop-blur-xl bg-white/90 border border-blue-100 shadow-xl sticky top-20">
              <CardHeader>
                <CardTitle>Book This Service</CardTitle>
                <CardDescription>Select your preferred date and time</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-left border-blue-200 hover:bg-blue-50 hover:border-blue-300"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 backdrop-blur-xl bg-white/95" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? 'default' : 'outline'}
                        onClick={() => setSelectedTime(time)}
                        className={selectedTime === time 
                          ? 'bg-blue-600 hover:bg-blue-700' 
                          : 'border-blue-200 hover:bg-blue-50 hover:border-blue-300'
                        }
                        size="sm"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Price Summary */}
                <div className="border-t border-blue-100 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Service Price</span>
                    <span className="text-2xl font-bold text-blue-600">₹{service.price}</span>
                  </div>
                  <Button 
                    onClick={handleAddToCart}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all"
                    size="lg"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
