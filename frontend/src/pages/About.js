import React from 'react';
import { Award, Users, Target, Heart, CheckCircle2, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const About = () => {
  const stats = [
    { label: 'Happy Customers', value: '50,000+', icon: Users },
    { label: 'Service Professionals', value: '1,000+', icon: Award },
    { label: 'Cities Covered', value: '25+', icon: Target },
    { label: 'Services Completed', value: '100,000+', icon: TrendingUp }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We ensure every service meets the highest quality standards with verified professionals.',
      icon: CheckCircle2
    },
    {
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our priority. We go the extra mile to ensure you\'re happy with our service.',
      icon: Heart
    },
    {
      title: 'Trusted Professionals',
      description: 'All our service providers are background-verified and thoroughly trained.',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">About JO Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              India's leading home services platform, connecting customers with verified professionals for all their home service needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <Card key={stat.label} className="backdrop-blur-xl bg-white/90 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-blue-50">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020, JO Services started with a simple mission: to make quality home services accessible, affordable, and reliable for everyone.
                </p>
                <p>
                  What began as a small team of passionate individuals has now grown into India's most trusted home services platform, serving over 50,000 customers across 25+ cities.
                </p>
                <p>
                  We've built a network of 1,000+ verified professionals who are committed to delivering exceptional service. Every professional undergoes rigorous background checks and training to ensure you receive the best service possible.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-8 shadow-2xl border border-white/50">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" 
                  alt="Our team"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <Card key={value.title} className="backdrop-blur-xl bg-white/90 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="p-3 rounded-lg bg-blue-50 w-fit mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">{value.title}</CardTitle>
                    <CardDescription className="text-base mt-3">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-xl">
              <CardHeader>
                <div className="p-3 rounded-lg bg-blue-600 w-fit mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl mb-4">Our Mission</CardTitle>
                <CardDescription className="text-base text-gray-700">
                  To revolutionize the home services industry by providing reliable, professional, and affordable services at the click of a button. We're committed to making quality home services accessible to every household in India.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-xl">
              <CardHeader>
                <div className="p-3 rounded-lg bg-blue-600 w-fit mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl mb-4">Our Vision</CardTitle>
                <CardDescription className="text-base text-gray-700">
                  To become India's most trusted home services platform, empowering millions of service professionals and bringing convenience to every home. We envision a future where quality home services are just a tap away.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose JO Services?</h2>
          </div>
          <div className="backdrop-blur-xl bg-white/90 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-lg bg-blue-50">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Verified Professionals</h4>
                  <p className="text-gray-600 text-sm">All our service providers are background-verified and certified.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-lg bg-blue-50">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">30-Day Warranty</h4>
                  <p className="text-gray-600 text-sm">We stand behind our work with a comprehensive service warranty.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-lg bg-blue-50">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Transparent Pricing</h4>
                  <p className="text-gray-600 text-sm">No hidden charges. What you see is what you pay.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-lg bg-blue-50">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
                  <p className="text-gray-600 text-sm">Our customer support team is always here to help you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
