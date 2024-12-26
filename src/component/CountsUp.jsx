import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import axios from "axios";
import { FaServicestack } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { div } from "framer-motion/client";

const CountsUp = () => {
  const [counts, setCounts] = useState({
    servicesCount: 0,
    reviewsCount: 0,
    usersCount: 0,
  });
  const [loading, setLoading] = useState(true);

  // Fetch counts from the backend
  useEffect(() => {
    axios
      .get("https://trust-ease-server.vercel.app/counts")
      .then((response) => {
        setCounts(response.data);
        setLoading(false);
      })
      .catch(() => {
        // console.error("Error fetching counts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="mb-10 md:mb-20 w-11/12 mx-auto px-5 md:px-10 lg:px-14">
      <h2 className="text-3xl font-bold text-center text-teal-700 mb-10">Our Achievements</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
      {/* Services Count */}
      <div className="bg-teal-50 border-2 shadow-lg rounded-lg p-6 flex flex-col items-center transition hover:scale-105">
        <FaServicestack className="text-5xl text-teal-700 mb-4" />
        <h2 className="text-2xl text-teal-700 font-semibold mb-2">Services</h2>
        <p className="text-4xl font-bold text-gray-800">
          <CountUp end={counts.servicesCount} duration={2} />
        </p>
      </div>

      {/* Reviews Count */}
      <div className="bg-teal-50 border-2 shadow-lg rounded-lg p-6 flex flex-col items-center transition hover:scale-105">
        <MdRateReview className="text-5xl text-teal-700 mb-4" />
        <h2 className="text-2xl text-teal-700 font-semibold mb-2">Reviews</h2>
        <p className="text-4xl font-bold text-gray-800">
          <CountUp end={counts.reviewsCount} duration={2} />
        </p>
      </div>

      {/* Users Count */}
      <div className="bg-teal-50 border-2 shadow-lg rounded-lg p-6 flex flex-col items-center transition hover:scale-105">
        <AiOutlineUser className="text-5xl text-teal-700 mb-4" />
        <h2 className="text-2xl text-teal-700 font-semibold mb-2">Users</h2>
        <p className="text-4xl font-bold text-gray-800">
          <CountUp end={counts.usersCount} duration={2} />
        </p>
      </div>
    </div>
    </div>
  );
};

export default CountsUp;
