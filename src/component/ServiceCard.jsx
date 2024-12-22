import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, serviceImage, serviceTitle, description, category, price } = service;

  return (
    <motion.div
      className="bg-teal-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl flex flex-col h-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Image Section */}
      <img
        src={serviceImage}
        alt={serviceTitle}
        className="w-full h-48 object-cover"
      />
      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-xl text-teal-700 font-bold">{serviceTitle}</h2>
        <p className="text-sm text-gray-600 my-2 flex-1">
          {description.slice(0, 80)}...
        </p>
        <p className="text-lg font-medium text-teal-700 mb-4">
          <strong>Price:</strong> ${price}
        </p>
        <Link to={`/services/${_id}`}>
          <button className="w-full mt-auto bg-teal-700 text-lg font-semibold text-white py-2 rounded hover:bg-teal-800">
            See Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
