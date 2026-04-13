import { useBooking } from "../context/BookingContext";

const MyBookings = () => {
  const { bookings } = useBooking();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

      {bookings.map(booking => (
        <div key={booking.id} className="border p-4 mb-4 rounded-xl">

          <div className="font-semibold">
            {booking.status}
          </div>

          <div className="text-sm text-gray-500">
            {booking.date}
          </div>

          <div className="mt-2">
            {booking.items.map(item => (
              <div key={item.id}>
                {item.name}
              </div>
            ))}
          </div>

          <div className="mt-2 font-bold">
            ₹{booking.total}
          </div>

          <div className="text-sm text-gray-600">
            {booking.address}
          </div>

        </div>
      ))}
    </div>
  );
};

export default MyBookings;