import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-teal-700 px-5 md:px-8 py-12">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Website Logo/Name and Description */}
        <div className="text-white">
          <Link to="/">
            <h2 className="text-3xl font-bold">
              Trust<span className="text-amber-400">Ease</span>
            </h2>
          </Link>
          <p className="mt-4 text-sm">
            TrustEase is your go-to platform for reliable services and trusted reviews. We’re dedicated to connecting you with the best in the business, ensuring seamless experiences.
          </p>
        </div>
        
        {/* Useful Links */}
        <div className='ml-0 md:ml-[50px] lg:ml-[165px]'>
          <h3 className="text-lg font-semibold text-amber-400 mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-white hover:text-amber-400">Home</Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:text-amber-400">Services</Link>
            </li>
            <li>
              <Link to="/addService" className="text-white hover:text-amber-400">Add Service</Link>
            </li>
            <li>
              <Link to="/myReviews" className="text-white hover:text-amber-400">My Reviews</Link>
            </li>
          </ul>
        </div>
        
        {/* Social Links and Copyright */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold text-amber-400 mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-end space-x-4 mb-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className='border-b-2 w-11/12 mx-auto mt-16 border-gray-400 mb-5'></div>
      <div className='text-center'>
      <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} TrustEase. All Rights Reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;
