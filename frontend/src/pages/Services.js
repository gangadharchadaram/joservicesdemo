import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Star, MapPin, Heart } from "lucide-react";
import { services, serviceCategories } from "../mockData";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");

  const filteredServices = useMemo(() => {
    let filtered = services;

    if (keyword) {
      filtered = filtered.filter((s) =>
        s.name.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter(
        (s) => s.categoryId === parseInt(category)
      );
    }

    return filtered;
  }, [keyword, category]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-white to-blue-50 py-10">
      <div className="max-w-7xl mx-auto px-4 flex gap-8">

        {/* ================= SIDEBAR ================= */}
        <div className="w-[280px] sticky top-24 h-fit">

          <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">

            <h3 className="font-semibold mb-4 text-gray-800">Search</h3>

            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search services..."
              className="w-full border rounded-xl px-3 py-2 mb-5 focus:ring-2 focus:ring-blue-500"
            />

            <h3 className="font-semibold mb-3 text-gray-800">Category</h3>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-xl px-3 py-2 mb-5"
            >
              <option value="">All Categories</option>
              {serviceCategories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>

            <h3 className="font-semibold mb-3 text-gray-800">Location</h3>
            <input
              placeholder="Hyderabad"
              className="w-full border rounded-xl px-3 py-2"
            />
          </div>
        </div>

        {/* ================= MAIN ================= */}
        <div className="flex-1">

          {/* TOP BAR */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-gray-600 text-sm">
              Showing <span className="font-semibold">{filteredServices.length}</span> services
            </h2>

            <select className="border rounded-xl px-4 py-2 bg-white shadow-sm">
              <option>Sort by</option>
              <option>Top Rated</option>
              <option>Price Low → High</option>
            </select>
          </div>

          {/* CARDS */}
          <div className="space-y-6">

            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 flex overflow-hidden border border-gray-100 hover:border-blue-200"
              >

                {/* IMAGE */}
                <div className="relative w-[240px] h-[200px] overflow-hidden">
                  <img
                    src={service.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />

                  {/* BADGE */}
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                    Top Rated
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1 p-6 flex flex-col justify-between">

                  {/* HEADER */}
                  <div>
                    <div className="flex justify-between items-start">

                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                          {service.name}
                        </h3>

                        <div className="flex items-center text-gray-500 text-sm mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          Hyderabad
                        </div>
                      </div>

                      {/* FAVORITE */}
                      <button className="p-2 rounded-full hover:bg-gray-100">
                        <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                      </button>
                    </div>

                    {/* RATING */}
                    <div className="flex items-center mt-3 gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">(120 reviews)</span>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 text-sm mt-3 max-w-lg">
                      Professional service with trained experts. Quick response and guaranteed satisfaction.
                    </p>
                  </div>

                  {/* FOOTER */}
                  <div className="flex justify-between items-center mt-5">

                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        ₹{service.price}
                      </div>
                      <div className="text-xs text-gray-400">
                        Starting price
                      </div>
                    </div>

                   <button
  onClick={() => navigate(`/service/${service.id}`)}
  className="bg-blue-600 text-white px-6 py-2.5 rounded-xl 
  hover:bg-blue-700 transition shadow-md hover:shadow-lg"
>
  Book Now
</button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;