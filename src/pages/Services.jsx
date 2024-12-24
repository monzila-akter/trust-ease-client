import React, { useEffect, useState } from "react";
import axios from "axios";
import ServiceCard from "../component/ServiceCard";
import debounce from "lodash.debounce"; // Install with `npm install lodash.debounce`

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // Search term
  const [category, setCategory] = useState(""); // Selected category
  const [categories, setCategories] = useState([]); // List of categories

  // Debounced function to fetch services based on search and filter criteria
  const fetchServices = debounce((query, selectedCategory) => {
    setLoading(true);
    axios
      .get("http://localhost:5000/services", {
        params: { search: query, category: selectedCategory }, // Pass search and category as query parameters
      })
      .then((response) => {
        setServices(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setLoading(false);
      });
  }, 500); // Debounce by 500ms

  // Fetch services whenever search or category changes
  useEffect(() => {
    fetchServices(search, category);
  }, [search, category]);

  // Fetch unique categories for the dropdown
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/services");
        const uniqueCategories = [
          ...new Set(response.data.map((service) => service.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto px-5 md:px-10 lg:px-14 py-16">
      <h1 className="text-4xl font-bold text-center mb-10 text-teal-700">Our Services</h1>

      {/* Search and Filter Section */}
      <div className="flex flex-wrap gap-4 mb-10 justify-center">
        <input
          type="text"
          placeholder="Search services..."
          className="input input-bordered w-full max-w-xs"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Dynamically update search term
        />

        <select
          className="select select-bordered max-w-xs"
          value={category}
          onChange={(e) => setCategory(e.target.value)} // Update selected category
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      
        
      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.length > 0 ? (
          services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No services found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Services;
