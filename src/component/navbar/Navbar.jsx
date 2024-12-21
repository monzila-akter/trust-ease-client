import React, { useContext, useState } from 'react';
import { FaUser } from 'react-icons/fa6';
import { Link, NavLink} from 'react-router-dom';
import "./navbar.css"
import { AuthContext } from '../../provider/AuthProvider';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {user, logOut} = useContext(AuthContext)

  return (
    <nav className="bg-teal-700 p-5">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        
        {/* Website Name/Logo on the left */}
        <div className="text-3xl font-bold text-white">
          <Link to="/">
            <h2 className="">Trust<span className='text-amber-400'>Ease</span></h2>
          </Link>
        </div>

        {/* Menu Bar for large device */}
        <div className="hidden lg:flex space-x-6 flex-grow justify-center">
          <NavLink to="/" className="text-white hover:text-amber-400">Home</NavLink>
          <NavLink to="/services" className="text-white hover:text-amber-400">Services</NavLink>
          {
            user && <NavLink to="/addService" className="text-white hover:text-amber-400">Add Service</NavLink>
          }
          {
            user && <NavLink to="/myReviews" className="text-white hover:text-amber-400">My Reviews</NavLink>
          }

        </div>

        {/* login/register button for large device */}
        <div className="hidden lg:flex items-center space-x-5">
        {user? (
                <div className="relative group">
                  <img
                    className="w-12 h-12 rounded-full border-2 border-amber-400 object-cover cursor-pointer"
                    src={user?.photoURL}
                    alt="User Profile"
                  />
                  <div
                    className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-900 via-teal-800 to-teal-700  text-white text-sm font-bold px-4 py-2 rounded-lg shadow-lg scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out z-10"
                  >
                    <span className="text-lg">{user?.displayName}</span>
                  </div>
                </div>
              ) : (
                <span className="w-12 h-12 rounded-full bg-transparent flex justify-center items-center text-white text-xl border-2 border-amber-400 cursor-pointer">
                  <FaUser />
                </span>
              )}
          {
            user ? <button onClick={logOut} className="text-white border-2 border-amber-400 btn bg-transparent text-lg hover:text-amber-400 hover:bg-transparent" >Log Out</button> : <>
              <Link to="/login" className="text-white border-2 border-amber-400 btn bg-transparent text-lg hover:text-amber-400 hover:bg-transparent">Login</Link>
              <Link to="/register" className="text-white border-2 border-amber-400 btn bg-transparent text-lg hover:text-amber-400 hover:bg-transparent">Register</Link>
            </>
          }
          
         
        </div>

        {/* Mobile Menu Button for medium and smaller devices */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col bg-teal-700 p-4 space-y-3">
         <NavLink to="/" className="text-white hover:text-amber-400">Home</NavLink>
          <NavLink to="/services" className="text-white hover:text-amber-400">Services</NavLink>
          {
            user && <NavLink to="/addService" className="text-white hover:text-amber-400">Add Service</NavLink>
          }
          {
            user && <NavLink to="/myReviews" className="text-white hover:text-amber-400">My Reviews</NavLink>
          }
          
          {user ? (
                <div className="relative group">
                  <img
                    className="w-12 h-12 rounded-full border-2 border-amber-400 object-cover cursor-pointer"
                    src={user?.photoURL}
                    alt="User Profile"
                  />
                  <div
                    className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-900 via-teal-800 to-teal-700 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-lg scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out z-10"
                  >
                    <span className="text-lg">{user?.displayName}</span>
                  </div>
                </div>
              ) : (
                <span className="w-12 h-12 rounded-full bg-transparent flex justify-center items-center text-white text-xl border-2 border-amber-400 cursor-pointer">
                  <FaUser />
                </span>
              )}
          {/* Login/Register buttons in mobile menu */}
          
          {
            user? <button onClick={logOut} className="block text-white hover:text-amber-400 text-lg text-center">Log Out</button> : <>
              <Link to="/login" className="block text-white hover:text-amber-400 text-lg text-center">Login</Link>
              <Link to="/register" className="block text-white hover:text-amber-400 w-full text-center text-lg">Register</Link>
            </>
          }
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
