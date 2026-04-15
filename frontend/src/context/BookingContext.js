import { createContext, useContext, useState, useEffect } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [notifications, setNotifications] = useState([]);


useEffect(() => {
  const saved = localStorage.getItem("bookings");
  if (saved) setBookings(JSON.parse(saved));
}, []);

useEffect(() => {
  localStorage.setItem("bookings", JSON.stringify(bookings));
}, [bookings]);


  

  const addBooking = (booking) => {
    setBookings(prev => [...prev, booking]);
 
  };

  const cancelBooking = (id) => {
  setBookings(prev =>
    prev.map(b =>
      b.id === id ? { ...b, status: "Cancelled" } : b
    )
  );
};

const rescheduleBooking = (id, newDate) => {
  setBookings(prev =>
    prev.map(b =>
      b.id === id
        ? { ...b, status: "Rescheduled", date: newDate }
        : b
    )
  );
};

const updateBookingStatus = (id, status) => {
  setBookings((prev) =>
    prev.map((b) =>
      b.id === id
        ? {
            ...b,
            status,
            paymentStatus: status === "Completed" ? "Paid" : b.paymentStatus
          }
        : b
    )
  );
};

const addNotification = (msg) => {
  setNotifications(prev => [msg, ...prev]);
};

  return (
    <BookingContext.Provider value={{ bookings, addBooking, cancelBooking, rescheduleBooking, updateBookingStatus, notifications, addNotification }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
