import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {_id, serviceImage, serviceTitle, description, category, price } = service;
  
    return (
      <div className="bg-teal-50 rounded-lg overflow-hidden shadow-lg transition hover:scale-105">
        <img
          src={serviceImage}
          alt={serviceTitle}
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <h2 className="text-xl text-teal-700 font-bold">{serviceTitle}</h2>
          <p className="text-sm text-gray-600 my-2">{description.slice(0, 80)}...</p>
          <p className="text-sm text-gray-500 mb-2"><strong>Category:</strong> {category}</p>
          <p className="text-lg font-medium text-teal-700"><strong>Price:</strong> ${price}</p>
          <Link to={`/services/${_id}`}>
          <button className="mt-6 btn bg-teal-700 text-lg font-semibold text-white">
            See Details
          </button>
          </Link>
        </div>
      </div>
    );
  };

export default ServiceCard;