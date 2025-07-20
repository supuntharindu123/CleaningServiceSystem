import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/authcontext";
import { fetchServices } from "../actions/serviceActions";

const BookingForm = ({ BookingAction, InitialData, IsEdit, bookingId }) => {
  const { axiosInstance } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: InitialData.username || "",
    address: InitialData.address || "",
    dateTime: InitialData.dateTime || "",
    serviceType: InitialData.serviceType || "",
  });

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const formatDateForInput = (dateString) => {
      if (!dateString) return "";

      try {
        const date = new Date(dateString);
        // Check if date is valid
        if (isNaN(date.getTime())) return "";

        // Format: YYYY-MM-DDTHH:MM (required format for datetime-local)
        return date.toISOString().slice(0, 16);
      } catch (error) {
        console.error("Error formatting date:", error);
        return "";
      }
    };
    setFormData({
      username: InitialData.username,
      address: InitialData.address,
      dateTime: formatDateForInput(InitialData.dateTime),
      serviceType: InitialData.serviceType,
    });
    const getServices = async () => {
      try {
        setLoading(true);
        const service = await fetchServices();
        setServices(service.data.services);
      } catch (err) {
        console.log("Failed to fetch services", err);
      } finally {
        setLoading(false);
      }
    };

    getServices();
  }, [InitialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.serviceType) {
      alert("Please select a service type");
      return;
    }

    console.log("Form Data:", formData);
    console.log(bookingId);

    try {
      var response;
      if (IsEdit) {
        response = await BookingAction(axiosInstance, bookingId, formData);
        console.log("edit");
      } else {
        response = await BookingAction(axiosInstance, formData);
      }

      if (response.success) {
        alert(response.data.msg);
        navigate("/dashboard");
      } else {
        alert("Error: " + response.error);
      }
    } catch (error) {
      console.error("Failed ", error);
      alert(error.msg);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-emerald-700 mb-6 text-center">
          {IsEdit ? "Update Your Booking" : "Book a Cleaning Service"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address *
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              required
              placeholder="123 Main St, City, State ZIP"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            />
          </div>

          {/* Date and Time */}
          <div>
            <label
              htmlFor="dateTime"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date & Time *
            </label>
            <input
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              required
              min={new Date().toISOString().slice(0, 16)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            />
          </div>

          {/* Service Type */}
          <div>
            <label
              htmlFor="serviceType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Service Type *
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            >
              {/* Add default option */}
              <option value="" disabled>
                {loading ? "Loading services..." : "Select a service"}
              </option>
              {services.map((option) => (
                <option key={option._id} value={option._id}>
                  {option.serviceName}
                </option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading || !formData.serviceType}
              className="w-full bg-gradient-to-r from-gray-500 to-emerald-700 text-white py-3 px-4 rounded-lg hover:from-emerald-700 hover:to-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading
                ? "Loading..."
                : IsEdit
                ? "Update Booking"
                : "Confirm Booking"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
