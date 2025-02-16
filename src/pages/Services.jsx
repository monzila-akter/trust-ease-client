import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import ServiceCard from "../component/ServiceCard";
import debounce from "lodash.debounce"; // Install with npm install lodash.debounce
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // Search term
  const [category, setCategory] = useState(""); // Selected category
  const [categories, setCategories] = useState([]); // List of categories
  const [sortBy, setSortBy] = useState(""); // Sorting criteria
  const [searchParams, setSearchParams] = useSearchParams();

  // Debounced function to fetch services based on search and filter criteria
  const fetchServices = (query, selectedCategory) => {
    setLoading(true);
    axios
      .get("https://trust-ease-server.vercel.app/services", {
        params: { search: query, category: selectedCategory }, // Pass search and category as query parameters
      })
      .then((response) => {
        setServices(response.data);
      })
      .catch(() => {
        // console.error("Error fetching services:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Debounced version of fetch function
  const debouncedFetchData = useCallback(
    debounce((query, selectedCategory) => {
      fetchServices(query, selectedCategory);
    }, 500), // Debounce delay
    []
  );

  // Fetch unique categories for the dropdown
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://trust-ease-server.vercel.app/services"
        );
        const uniqueCategories = [
          ...new Set(response.data.map((service) => service.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        toast.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
    if (!searchParams.get("search") && !searchParams.get("category")) {
      fetchServices();
    }
  }, []);

  useEffect(() => {
    const initialQuery = searchParams.get("search") || "";
    const initialCategory = searchParams.get("category") || "";
    setSearch(initialQuery);
    setCategory(initialCategory);
    if (initialQuery || initialCategory) {
      debouncedFetchData(initialQuery, initialCategory);
    }
  }, [searchParams]);

  // Sort services based on the selected criteria
  const sortedServices = [...services].sort((a, b) => {
    if (sortBy === "price_asc") {
      return a.price - b.price;
    } else if (sortBy === "price_desc") {
      return b.price - a.price;
    } else {
      return 0; // No sorting
    }
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto px-5 md:px-10 lg:px-14 mt-[100px] py-16">
      <h1 className="text-4xl font-bold text-center mb-10 text-teal-700">
        Our Services
      </h1>

      {/* Search, Filter, and Sort Section */}
      <div className="flex flex-wrap gap-4 mb-10 justify-center">
        <input
          type="text"
          placeholder="Search services..."
          className="input input-bordered w-full max-w-xs"
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            setSearch(value);
            setSearchParams({ search: value, category: category });
            debouncedFetchData(value, category);
          }} // Dynamically update search term
        />

        <select
          className="select select-bordered max-w-xs"
          value={category}
          onChange={(e) => {
            const value = e.target.value;
            setCategory(value);
            setSearchParams({ search: search, category: value });
            debouncedFetchData(search, value);
          }} // Update selected category
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Sorting Dropdown */}
        <select
          className="select select-bordered max-w-xs"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)} // Update sorting criteria
        >
          <option value="">Sort By</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedServices.length > 0 ? (
          sortedServices.map((service) => (
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