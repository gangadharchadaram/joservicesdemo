import { useBooking } from "../context/BookingContext";
import { Calendar, MapPin, IndianRupee, User } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {
  const { bookings, cancelBooking, rescheduleBooking } = useBooking();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [rescheduleId, setRescheduleId] = useState(null);
  const [newDate, setNewDate] = useState("");

  const [ratingBooking, setRatingBooking] = useState(null);
  const [rating, setRating] = useState(0);

  const steps = ["Assigned", "On the way", "Completed"];

  const getStatusColor = (status) => {
    if (status === "Cancelled") return "bg-red-100 text-red-600";
    if (status === "Completed") return "bg-green-100 text-green-700";
    if (status === "On the way") return "bg-blue-100 text-blue-600";
    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 md:p-10">
      <h1 className="text-4xl font-bold mb-10">My Bookings</h1>

      <div className="grid gap-8 max-w-4xl mx-auto">

        {bookings.map((booking) => {
          const currentStepIndex = steps.indexOf(booking.status);

          return (
            <div
              key={booking.id}
              className="bg-white rounded-2xl shadow-lg border p-6 hover:shadow-2xl transition-all"
            >

              {/* HEADER */}
              <div className="flex justify-between items-center mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                  {booking.status}
                </span>

                <div className="text-xs text-gray-400">
                  Order ID: #{booking.id}
                </div>
              </div>

              {/* SERVICE */}
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                {booking.items[0]?.name}
              </h2>

              {/* 🔥 TIMELINE */}
              <div className="flex items-center justify-between mb-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex-1 text-center relative">

                    {index !== 0 && (
                      <div
                        className={`absolute top-4 left-0 w-full h-[2px] ${
                          index <= currentStepIndex ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      />
                    )}

                    <div
                      className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-xs font-bold relative z-10 ${
                        index <= currentStepIndex
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {index < currentStepIndex ? "✓" : index + 1}
                    </div>

                    <div className="text-xs mt-2">{step}</div>
                  </div>
                ))}
              </div>

              {/* PROFESSIONAL */}
              {booking.professional && (
                <div className="bg-blue-50 rounded-xl p-4 mb-4 flex items-center gap-3">
                  <User className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold">
                      {booking.professional.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      ⭐ {booking.professional.rating}
                    </div>
                  </div>
                </div>
              )}

              {/* DETAILS */}
              <div className="space-y-2 text-sm text-gray-600 mb-4">

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-600"/>
                  {booking.date}
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600"/>
                  {booking.address}
                </div>

                <div className="flex items-center gap-2 font-bold text-blue-600">
                  <IndianRupee className="w-4 h-4"/>
                  ₹{booking.total}
                </div>

                {/* PAYMENT */}
                <div className="flex items-center gap-2">
                  💳 Payment:
                  <span
                    className={`font-medium ${
                      booking.paymentStatus === "Paid"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {booking.paymentStatus || "Pending"}
                  </span>
                </div>

              </div>

              {/* STATUS MESSAGE */}
              {booking.status === "On the way" && (
                <div className="text-blue-600 text-sm mb-3">
                  🚗 Professional is on the way
                </div>
              )}

              {/* ACTIONS */}
              <div className="flex gap-3 flex-wrap mt-4">

                {/* COMPLETED */}
                {booking.status === "Completed" && (
                  <>
                    <button className="px-4 py-2 border border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50">
                      Need Help
                    </button>

                    <button
                      onClick={() => navigate("/services")}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Book Again
                    </button>

                    <button
                      onClick={() => setRatingBooking(booking)}
                      className="px-4 py-2 border border-yellow-500 text-yellow-600 rounded-lg"
                    >
                      ⭐ Rate
                    </button>
                  </>
                )}

                {/* ACTIVE */}
                {booking.status !== "Cancelled" && booking.status !== "Completed" && (
                  <>
                    <button
                      onClick={() => cancelBooking(booking.id)}
                      className="px-4 py-2 border border-red-500 text-red-600 rounded-lg hover:bg-red-50"
                    >
                      Cancel
                    </button>

                    <button
                      onClick={() => setRescheduleId(booking.id)}
                      className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
                    >
                      Reschedule
                    </button>
                  </>
                )}
              </div>

              {/* RESCHEDULE */}
              {rescheduleId === booking.id && (
                <div className="mt-4 flex gap-2">
                  <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="border px-3 py-2 rounded-lg"
                  />

                  <button
                    onClick={() => {
                      if (!newDate) return alert("Select date");
                      rescheduleBooking(booking.id, newDate);
                      setRescheduleId(null);
                      setNewDate("");
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Confirm
                  </button>
                </div>
              )}

            </div>
          );
        })}

        {/* EMPTY */}
        {bookings.length === 0 && (
          <div className="text-center mt-20">
            <div className="text-gray-400 text-lg mb-3">
              No bookings yet 😕
            </div>
            <button
              onClick={() => navigate("/services")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Explore Services
            </button>
          </div>
        )}

      </div>

      {/* ⭐ RATING MODAL */}
      {ratingBooking && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">

          <div className="bg-white p-6 rounded-2xl w-[350px] text-center">

            <h2 className="text-xl font-bold mb-4">
              Rate your experience
            </h2>

            <div className="flex justify-center gap-2 mb-4">
              {[1,2,3,4,5].map(star => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-2xl cursor-pointer ${
                    star <= rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            <button
              onClick={() => {
                alert("Thanks for rating ⭐");
                setRatingBooking(null);
                setRating(0);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
            >
              Submit
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;