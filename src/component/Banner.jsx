import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 1 ? 3 : prev - 1));
  };

  return (
    <div className="flex justify-center mt-[75px] mb-10 md:mb-20">
      <div className="carousel w-full h-[500px] mx-auto">
        {/* Slide 1 */}
        <div
          className={`carousel-item relative w-full ${
            currentSlide === 1 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://i.ibb.co.com/qrpVyjV/1689796287258.jpg" // Replace with relevant image URL
            className="w-full h-full object-cover"
            alt="Discover New Services"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-5 md:px-0">
            <h1 data-aos="fade-right" className="text-3xl md:text-5xl font-semibold">
              Discover New Services
            </h1>
            <p data-aos="fade-left" className="text-lg md:text-2xl mt-4">
              Explore the best services and make informed decisions with trusted reviews.
            </p>
            <Link to="/services">
            <button
              data-aos="fade-right"
              className="btn bg-transparent border-2 border-white text-white text-xl mt-6 hover:bg-white hover:text-black"
            >
              Start Exploring
            </button>
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              onClick={handlePrev}
              className="btn btn-circle bg-transparent border-2 border-white text-white text-xl"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="btn btn-circle bg-transparent border-2 border-white text-white text-xl"
            >
              ❯
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className={`carousel-item relative w-full ${
            currentSlide === 2 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://i.ibb.co.com/rv0VqGp/istockphoto-1395650800-612x612.jpg" // Replace with relevant image URL
            className="w-full h-full object-cover"
            alt="Share Your Experience"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-5 md:px-0">
            <h1 className="text-3xl md:text-5xl font-semibold">Share Your Experience</h1>
            <p className="text-lg md:text-2xl mt-4">
              Help others by sharing your valuable feedback on services you've used.
            </p>
            <button className="btn bg-transparent border-2 border-white text-white text-xl mt-6 hover:bg-white hover:text-black">
              Write a Review
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              onClick={handlePrev}
              className="btn btn-circle bg-transparent border-2 border-white text-white text-xl"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="btn btn-circle bg-transparent border-2 border-white text-white text-xl"
            >
              ❯
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className={`carousel-item relative w-full ${
            currentSlide === 3 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://i.ibb.co.com/qgWzKWf/Strategies-to-Enhance-Product-Quality-in-Manufacturing.jpg" // Replace with relevant image URL
            className="w-full h-full object-cover"
            alt="Your Trusted Platform"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-5 md:px-0">
            <h1 className="text-3xl md:text-5xl font-semibold">Your Trusted Platform</h1>
            <p className="text-lg md:text-2xl mt-4">
              Join our community to find and share authentic service reviews.
            </p>
            <button className="btn bg-transparent border-2 border-white text-white text-xl mt-6 hover:bg-white hover:text-black">
              Get Started
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              onClick={handlePrev}
              className="btn btn-circle bg-transparent border-2 border-white text-white text-xl"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="btn btn-circle bg-transparent border-2 border-white text-white text-xl"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
