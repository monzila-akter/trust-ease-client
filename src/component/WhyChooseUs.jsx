import React from "react";
import { FaClockRotateLeft, FaHandshakeAngle, FaRocket } from "react-icons/fa6";

const WhyChooseUs = () => {
  return (
    <div className="bg-teal-700 py-16 mb-10 md:mb-20">
      <div className="w-11/12 mx-auto px-5 md:px-10 lg:px-14">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105">
            <div className=" text-teal-700  text-3xl mr-4">
              <FaRocket></FaRocket>
            </div>
            <div>
              <h3 className="text-xl font-bold text-teal-700">
                Fast and Reliable
              </h3>
              <p className="text-gray-600 mt-2">
                We ensure quick and dependable service delivery to save you time
                and effort.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105">
            <div className=" text-teal-700 text-3xl mr-4">
              <FaHandshakeAngle></FaHandshakeAngle>
            </div>
            <div>
              <h3 className="text-xl font-bold text-teal-700">Trusted Reviews</h3>
              <p className="text-gray-600 mt-2">
                Reviews from verified users help you make informed decisions.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105">
            <div className="text-3xl text-teal-700 mr-4">
              <FaClockRotateLeft></FaClockRotateLeft>
            </div>
            <div>
              <h3 className="text-xl font-bold text-teal-700">
                24/7 Support
              </h3>
              <p className="text-gray-600 mt-2">
                Our dedicated team is available around the clock to assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
