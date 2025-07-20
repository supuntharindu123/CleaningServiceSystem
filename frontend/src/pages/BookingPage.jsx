import React from "react";
import BookingForm from "../components/BookingForm";
import { CreateBooking } from "../actions/bookingActions";

function BookingPage() {
  const InitialData = {
    username: "",
    address: "",
    dateTime: "",
    serviceType: "",
  };

  return (
    <div className="min-h-screen justify-center items-center  min-w-1">
      <BookingForm
        BookingAction={CreateBooking}
        InitialData={InitialData}
        IsEdit={false}
        bookingId={null}
      />
    </div>
  );
}

export default BookingPage;
