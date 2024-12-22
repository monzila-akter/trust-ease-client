import React, { useContext, useState } from "react";
import axios from "axios";

import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";


const AddServicePage = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    serviceImage: "",
    serviceTitle: "",
    companyName: "",
    website: "",
    description: "",
    category: "",
    price: "",
    userEmail: user?.email, // Prefill with user's email
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/services", formData) // Adjust to your backend endpoint
      .then((response) => {
        if (response.status === 201) {
          toast.success("Service added successfully!");
          setFormData({
            serviceImage: "",
            serviceTitle: "",
            companyName: "",
            website: "",
            description: "",
            category: "",
            price: "",
            userEmail: user?.email,
          });
        }
      })
      .catch(() => {
        toast.error("Failed to add service. Please try again.");
      });
  };

  return (
    <div className="max-w-4xl bg-teal-50 mx-auto px-6 py-8 shadow-md rounded-md mt-16 mb-16 border-2">
      <h1 className="text-3xl text-teal-700 font-bold mb-7 text-center">Add New Service</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-2">Service Image URL</label>
            <input
              type="text"
              name="serviceImage"
              value={formData.serviceImage}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-teal-700 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Service Title</label>
            <input
              type="text"
              name="serviceTitle"
              value={formData.serviceTitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-teal-700 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-teal-700 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Website</label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-teal-700 focus:outline-none"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-teal-700 focus:outline-none"
              rows="4"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-teal-700 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-teal-700 focus:outline-none"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-7 btn w-full bg-teal-700 text-white text-lg font-semibold hover:bg-teal-900"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddServicePage;
