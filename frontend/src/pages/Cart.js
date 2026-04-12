import React from 'react';
import { Trash2, Calendar, Clock, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useCart } from '../context/CartContext';
import { serviceCategories } from '../mockData';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();

  const getCategoryName = (categoryId) => {
    return serviceCategories.find(cat => cat.id === categoryId)?.name || '';
  };

  const handleCheckout = () => {
    alert('Booking confirmed! You will receive a confirmation message shortly.');
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-center backdrop-blur-xl bg-white/90 rounded-3xl p-12 max-w-md border border-blue-100 shadow-xl">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Add some services to get started</p>
          <Link to="/services">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg" size="lg">
              Browse Services <ArrowRight className="ml-2 h-5 w-5" />
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
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Items ({cartItems.length})</span>
                    <span>₹{getTotalPrice()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Service Fee</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <div className="border-t border-blue-100 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">Total</span>
                      <span className="text-3xl font-bold text-blue-600">₹{getTotalPrice()}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleCheckout}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all"
                  size="lg"
                >
                  Confirm Booking
                </Button>

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
    </div>
  );
};

export default Cart;
