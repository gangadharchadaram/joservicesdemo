import React from "react";
import { useBooking } from "../context/BookingContext";
import { useAuth } from "../context/AuthContext";

const ProviderDashboard = () => {
  const { bookings, updateBookingStatus } = useBooking();
  const { user } = useAuth();

  // ✅ FILTER ONLY PROVIDER BOOKINGS
  const myBookings = bookings.filter(
    (b) => b.professional?.phone === user?.phone
  );

  const getStatusStyle = (status) => {
    if (status === "Completed") return "bg-green-100 text-green-600";
    if (status === "On the way") return "bg-blue-100 text-blue-600";
    if (status === "Assigned") return "bg-yellow-100 text-yellow-600";
    if (status === "Confirmed") return "bg-yellow-100 text-yellow-600";
    return "bg-gray-100 text-gray-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 md:p-10">

      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        Provider Dashboard
      </h1>

      <div className="grid gap-6 max-w-4xl mx-auto">

        {myBookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-xl transition"
          >

            {/* HEADER */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-lg text-gray-900">
                {booking.items[0]?.name}
              </h2>

              <span className={`px-3 py-1 text-sm rounded-full ${getStatusStyle(booking.status)}`}>
                {booking.status}
              </span>
            </div>

            {/* ADDRESS */}
            <div className="text-sm text-gray-500 mb-2">
              📍 {booking.address}
            </div>

            {/* PAYMENT */}
            <div className="text-sm mb-4">
              💳 Payment:
              <span
                className={`ml-2 font-medium ${
                  booking.paymentStatus === "Paid"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {booking.paymentStatus}
              </span>
            </div>

            {/* 🔥 ACTION FLOW */}
            
            <div className="flex gap-3 flex-wrap">

              {/* ✅ ACCEPT */}
              {(booking.status === "Assigned" || booking.status === "Confirmed") && (
                <button
                  onClick={() =>
                    updateBookingStatus(booking.id, "On the way")
                  }
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Accept Job
                </button>
              )}

              {/* ✅ ON THE WAY */}
              {booking.status === "On the way" && (
                <>
                  <div className="text-blue-600 text-sm flex items-center">
                    🚗 Going to customer location
                  </div>

                  <button
                    onClick={() =>
                      updateBookingStatus(booking.id, "Completed")
                    }
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  >
                    Mark Completed
                  </button>
                </>
              )}

              {/* ✅ COMPLETED */}
              {booking.status === "Completed" && (
                <div className="text-green-600 font-medium flex items-center gap-2">
                  ✅ Job Completed
                </div>
              )}
<a
  href={`tel:${booking.user?.phone || "9999999999"}`}
  className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200"
>
  📞 Call Customer
</a>
            </div>

          </div>
        ))}

        {/* EMPTY STATE */}
        {myBookings.length === 0 && (
          <div className="text-center mt-20">
            <div className="text-5xl mb-4">📭</div>
            <div className="text-gray-500 text-lg">
              No bookings assigned yet
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

export default ProviderDashboard;