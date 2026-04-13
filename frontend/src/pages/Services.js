import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { serviceCategories, services } from '../mockData';
import { useSearchParams } from "react-router-dom";
import * as LucideIcons from 'lucide-react';

const Services = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
const [searchParams] = useSearchParams();
const categoryId = searchParams.get("category");

const filteredServices = useMemo(() => {
  let filtered = services;

  // category from URL
  if (categoryId) {
    filtered = filtered.filter(
      (service) => service.categoryId === parseInt(categoryId)
    );
  }

  // category button filter
  if (selectedCategory) {
    filtered = filtered.filter(
      (service) => service.categoryId === selectedCategory
    );
  }

  // search filter
  if (searchQuery) {
    filtered = filtered.filter((service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return filtered;
}, [searchQuery, selectedCategory, categoryId]);
  const getCategoryName = (categoryId) => {
    return serviceCategories.find(cat => cat.id === categoryId)?.name || '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Professional home services at your fingertips</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 backdrop-blur-lg bg-white/80 border-blue-200 focus:border-blue-400 shadow-lg"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              onClick={() => setSelectedCategory(null)}
              variant={selectedCategory === null ? 'default' : 'outline'}
              className={selectedCategory === null 
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' 
                : 'border-blue-200 hover:bg-blue-50 hover:border-blue-300'
              }
            >
              All Services
            </Button>
            {serviceCategories.map((category) => {
              const IconComponent = LucideIcons[category.icon];
              return (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  className={selectedCategory === category.id 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' 
                    : 'border-blue-200 hover:bg-blue-50 hover:border-blue-300'
                  }
                >
                  {IconComponent && <IconComponent className="h-4 w-4 mr-2" />}
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group backdrop-blur-xl bg-white/90 border border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 group-hover:text-blue-600 transition-colors">
                        {service.name}
                      </CardTitle>
                      <div className="text-sm text-gray-500 mb-3">
                        {getCategoryName(service.categoryId)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-900">{service.rating}</span>
                      <span className="text-sm text-gray-500">({service.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-blue-100">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">₹{service.price}</div>
                    </div>
                    <Link to={`/service/${service.id}`}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all">
                        Book Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-12 max-w-md mx-auto border border-blue-100">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
