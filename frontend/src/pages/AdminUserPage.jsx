import React, { useState } from "react";
import AdminNavbar from "../componets/adminNavbar";

const AdminUserPage = () => {
  // Sample users data with their bookings
  const [users] = useState([
    {
      _id: "user123",
      username: "John Doe",
      email: "john.doe@email.com",
      phone: "+1-555-0123",
      created_at: "2023-12-01T10:30:00Z",
      status: "active",
      role: "user",
      totalBookings: 3,
      bookings: [
        {
          _id: "booking1",
          service_id: "Deep Cleaning",
          address: "123 Main Street, Downtown, NY 10001",
          date_time: "2024-01-15T10:00:00Z",
          created_at: "2024-01-10T08:30:00Z",
        },
        {
          _id: "booking2",
          service_id: "Window Cleaning",
          address: "123 Main Street, Downtown, NY 10001",
          date_time: "2024-01-22T14:00:00Z",
          created_at: "2024-01-18T09:15:00Z",
        },
      ],
    },
    {
      _id: "user456",
      username: "Jane Smith",
      email: "jane.smith@email.com",
      phone: "+1-555-0456",
      created_at: "2023-11-15T14:20:00Z",
      status: "active",
      role: "user",
      totalBookings: 5,
      bookings: [
        {
          _id: "booking3",
          service_id: "Office Cleaning",
          address: "456 Business Ave, Corporate District, NY 10002",
          date_time: "2024-01-18T14:30:00Z",
          created_at: "2024-01-12T09:15:00Z",
        },
        {
          _id: "booking4",
          service_id: "Home Cleaning",
          address: "456 Business Ave, Corporate District, NY 10002",
          date_time: "2024-01-25T09:00:00Z",
          created_at: "2024-01-20T11:45:00Z",
        },
      ],
    },
    {
      _id: "user789",
      username: "Mike Johnson",
      email: "mike.johnson@email.com",
      phone: "+1-555-0789",
      created_at: "2023-10-20T16:45:00Z",
      status: "active",
      role: "user",
      totalBookings: 2,
      bookings: [
        {
          _id: "booking5",
          service_id: "Home Cleaning",
          address: "789 Residential Blvd, Suburb, NY 10003",
          date_time: "2024-01-20T09:00:00Z",
          created_at: "2024-01-14T11:45:00Z",
        },
      ],
    },
    {
      _id: "user321",
      username: "Sarah Wilson",
      email: "sarah.wilson@email.com",
      phone: "+1-555-0321",
      created_at: "2024-01-05T12:10:00Z",
      status: "active",
      role: "user",
      totalBookings: 1,
      bookings: [
        {
          _id: "booking6",
          service_id: "Window Cleaning",
          address: "321 Oak Street, Village, NY 10004",
          date_time: "2024-01-22T16:00:00Z",
          created_at: "2024-01-16T13:20:00Z",
        },
      ],
    },
    {
      _id: "user654",
      username: "Robert Brown",
      email: "robert.brown@email.com",
      phone: "+1-555-0654",
      created_at: "2023-09-12T08:25:00Z",
      status: "inactive",
      role: "user",
      totalBookings: 0,
      bookings: [],
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [expandedUser, setExpandedUser] = useState(null);

  const formatDateTime = (dateTime) => {
    return new Date(dateTime).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (dateTime) => {
    return new Date(dateTime).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Filter users based on search and status
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm);

    const matchesStatus =
      statusFilter === "all" || user.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Stats calculations
  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.status === "active").length;
  const inactiveUsers = users.filter((u) => u.status === "inactive").length;
  const totalBookings = users.reduce(
    (sum, user) => sum + user.totalBookings,
    0
  );

  const handleViewUserDetails = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  const toggleUserBookings = (userId) => {
    setExpandedUser(expandedUser === userId ? null : userId);
  };

  const getStatusBadge = (status) => {
    if (status === "active") {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <svg className="w-2 h-2 mr-1" fill="currentColor" viewBox="0 0 8 8">
            <circle cx={4} cy={4} r={3} />
          </svg>
          Active
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
          <svg className="w-2 h-2 mr-1" fill="currentColor" viewBox="0 0 8 8">
            <circle cx={4} cy={4} r={3} />
          </svg>
          Inactive
        </span>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <AdminNavbar />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{totalUsers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">
                  Active Users
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {activeUsers}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-red-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">
                  Inactive Users
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {inactiveUsers}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">
                  Total Bookings
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalBookings}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Search Users
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-3 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, email, or phone..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="sm:w-48">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Filter by Status
              </label>
              <select
                id="status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              >
                <option value="all">All Users</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Users ({filteredUsers.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bookings
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Joined
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <React.Fragment key={user._id}>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-purple-600 font-medium text-sm">
                              {user.username.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.username}
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: {user._id.slice(-6)}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm text-gray-900">
                            {user.email}
                          </div>
                          <div className="text-sm text-gray-500">
                            {user.phone}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(user.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-900 mr-2">
                            {user.totalBookings}
                          </span>
                          {user.totalBookings > 0 && (
                            <button
                              onClick={() => toggleUserBookings(user._id)}
                              className="text-purple-600 hover:text-purple-900"
                              title="View bookings"
                            >
                              <svg
                                className={`w-4 h-4 transform transition-transform ${
                                  expandedUser === user._id ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(user.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => handleViewUserDetails(user)}
                            className="text-blue-600 hover:text-blue-900 transition-colors duration-200"
                            title="View details"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </button>

                          <button
                            className="text-emerald-600 hover:text-emerald-900 transition-colors duration-200"
                            title="Edit user"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>

                          <button
                            className="text-red-600 hover:text-red-900 transition-colors duration-200"
                            title="Delete user"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Expanded Bookings Row */}
                    {expandedUser === user._id && user.bookings.length > 0 && (
                      <tr>
                        <td colSpan="6" className="px-6 py-4 bg-gray-50">
                          <div className="space-y-3">
                            <h4 className="text-sm font-medium text-gray-700 mb-3">
                              {user.username}'s Bookings ({user.bookings.length}
                              )
                            </h4>
                            <div className="grid gap-3">
                              {user.bookings.map((booking) => (
                                <div
                                  key={booking._id}
                                  className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors"
                                >
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                      <div className="text-sm font-medium text-gray-900">
                                        {booking.service_id}
                                      </div>
                                      <div className="text-sm text-gray-500">
                                        {formatDateTime(booking.date_time)}
                                      </div>
                                    </div>
                                    <div>
                                      <div className="text-sm text-gray-900 truncate">
                                        {booking.address}
                                      </div>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-sm text-gray-500">
                                        Created:{" "}
                                        {formatDate(booking.created_at)}
                                      </div>
                                      <div className="text-xs text-gray-400">
                                        ID: {booking._id.slice(-6)}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* User Details Modal */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-96 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    User Details
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* User Information */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-xl">
                          {selectedUser.username.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {selectedUser.username}
                        </h4>
                        <p className="text-gray-500">{selectedUser.role}</p>
                        {getStatusBadge(selectedUser.status)}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Email:
                        </span>
                        <p className="text-gray-900">{selectedUser.email}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Phone:
                        </span>
                        <p className="text-gray-900">{selectedUser.phone}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          User ID:
                        </span>
                        <p className="text-gray-900 font-mono text-sm">
                          {selectedUser._id}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Joined:
                        </span>
                        <p className="text-gray-900">
                          {formatDateTime(selectedUser.created_at)}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Total Bookings:
                        </span>
                        <p className="text-gray-900 font-semibold">
                          {selectedUser.totalBookings}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* User Bookings */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Recent Bookings
                    </h4>
                    {selectedUser.bookings.length > 0 ? (
                      <div className="space-y-3 max-h-64 overflow-y-auto">
                        {selectedUser.bookings.map((booking) => (
                          <div
                            key={booking._id}
                            className="bg-gray-50 p-4 rounded-lg border"
                          >
                            <div className="space-y-2">
                              <div className="flex justify-between items-start">
                                <span className="font-medium text-gray-900">
                                  {booking.service_id}
                                </span>
                                <span className="text-xs text-gray-500">
                                  #{booking._id.slice(-6)}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600">
                                {booking.address}
                              </p>
                              <div className="flex justify-between text-sm text-gray-500">
                                <span>
                                  Service: {formatDateTime(booking.date_time)}
                                </span>
                                <span>
                                  Booked: {formatDate(booking.created_at)}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                        <p className="mt-2 text-gray-500">No bookings yet</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUserPage;
