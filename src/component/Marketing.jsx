import Lottie from "lottie-react";
import React from "react";
import boostLottieData from "../assets/lottie/boost.json";

const Marketing = () => {
  return (
    <div className="mb-10 md:mb-20">
             <section className="bg-teal-50 py-16">
      <div className="w-11/12 mx-auto px-5 md:px-10 lg:px-14">
        

        {/* About Us Content */}
        <div className="flex flex-col lg:flex-row items-center space-x-0 justify-between lg:space-x-12 space-y-8  lg:space-y-0">
          
          {/* Text Section */}
          
          <div
           className="lg:w-1/2 text-center lg:text-left">
            {/* Section Title */}
        <h2 
        className="text-teal-700 text-4xl font-bold mb-8"> Boost Your Reach with Us</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
            At Trust Ease, we empower businesses to connect with a
            wider audience. Leverage our platform to showcase your services,
            gain trust through reviews, and stand out in a competitive market.
            Let us help you grow while users find the best options for their
            needs.
          </p>
            

            {/* Learn More Button */}
            <div className="mt-8">
              <a 
                href="#"
                className="inline-block bg-teal-700 text-white py-2 px-6 rounded-lg text-lg hover:bg-teal-900 "
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div
           className="lg:w-96">
            <Lottie animationData={boostLottieData}></Lottie>
          </div>
        </div>
      </div>
    </section>
        </div>
  );
};

export default Marketing;
