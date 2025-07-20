import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/authcontext";
import BookingForm from "../components/BookingForm";
import { GetBookingById, UpdateBooking } from "../actions/bookingActions";

function UpdateBookingPage() {
  const { id } = useParams();
  const { axiosInstance } = useAuth();
  const [InitialData, setInitialData] = useState({
    username: "",
    address: "",
    dateTime: "",
    serviceType: "",
  });

  useEffect(() => {
    // Fetch booking data by ID
    const bookingData = async () => {
      console.log("Fetching booking data for ID:", id);
      try {
        const response = await GetBookingById(axiosInstance, id);
        console.log("Booking Data:", response.data.booking);
        if (response.success) {
          const data = response.data.booking;
          setInitialData({
            username: data.customer_name,
            address: data.address,
            dateTime: data.date_time,
            serviceType: data.service_id,
          });
        }
      } catch (error) {
        console.error("Failed to fetch booking data", error);
        return null;
      }
    };
    bookingData();
  }, []);

  return (
    <div className="min-h-screen justify-center items-center  min-w-1">
      <BookingForm
        BookingAction={UpdateBooking}
        InitialData={InitialData}
        IsEdit={true}
        bookingId={id}
      />
    </div>
  );
}

export default UpdateBookingPage;
