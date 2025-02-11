import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"; 
import ServiceCard from "./ServiceCard";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const FeaturedServices = () => {
  const [featuredServices, setFeaturedServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://trust-ease-server.vercel.app/featuredServices") // Backend endpoint
      .then((response) => {
        setFeaturedServices(response.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Error fetching featured services:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto px-5 md:px-10 lg:px-14 mb-10 md:mb-20">
      <h2 className="text-4xl font-bold text-teal-700 text-center mb-10">Featured Services</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {featuredServices.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </motion.div>
      <Link to="/services">
      <button className="btn bg-teal-700 text-lg text-white font-semibold mt-12 block mx-auto hover:bg-teal-800 transition hover:scale-105">Show More</button></Link>
    </div>
  );
};

export default FeaturedServices;
