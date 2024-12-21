import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle} from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createNewUser, setUser, updateUserProfile, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);

  // Handle form submission
  const onSubmit = (data) => {
    const { name, photoUrl, email, password } = data;

    // Register user
    createNewUser(email, password)
      .then(result => {
        // console.log(result.user)
        setUser(result.user);
        updateUserProfile({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setUser({ displayName: name, photoURL: photoUrl })
            navigate("/");
            Swal.fire({
                title: 'Success!',
                text: 'Registered Successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
          })
          .catch(err => toast.error(err.message));
      })
      .catch(err => toast.error(err.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        setUser(result.user);
        navigate("/");
        Swal.fire({
            title: 'Success!',
            text: 'Registered Successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
      })
      .catch(err => toast.error("Google login failed: " + err.message));
  };

  return (
    <div className='px-5 flex justify-center items-center'>
      <div className="w-full max-w-sm md:max-w-lg mx-auto mt-14 p-6 bg-white shadow-lg rounded-lg border-2">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">Please Register Now!</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              {...register("name", { required: "Name is required" })}
              className="bg-white mt-2 p-3 border border-gray-300 rounded-md w-full"
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", { required: "Email is required", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
              className="bg-white mt-2 p-3 border border-gray-300 rounded-md w-full"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message || "Invalid email"}</p>}
          </div>

          {/* Photo URL Field */}
          <div>
            <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700">Photo URL</label>
            <input
              type="url"
              id="photoUrl"
              name="photoUrl"
              {...register("photoUrl", { required: "Photo URL is required" })}
              className="bg-white mt-2 p-3 border border-gray-300 rounded-md w-full"
              placeholder="Enter your photo URL"
            />
            {errors.photoUrl && <p className="text-sm text-red-500 mt-1">{errors.photoUrl.message}</p>}
          </div>

          {/* Password Field */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
                pattern: {
                  value: /[A-Z]/,
                  message: "Password must contain at least one uppercase letter"
                },
                validate: (value) => {
                  if (!/[a-z]/.test(value)) {
                    return "Password must contain at least one lowercase letter.";
                  }
                  return true;
                }
              })}
              className="bg-white mt-2 p-3 border border-gray-300 rounded-md w-full"
              placeholder="Enter your password"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-6 top-[45px] text-gray-500 text-lg">
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye />}
            </div>
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gray-700 text-xl font-semibold rounded-md text-white mt-4"
          >
            Register
          </button>

          <p className='font-medium text-gray-500'>
            Already have an account? Please <Link to="/login" className='text-lg text-red-500'>Login</Link>
          </p>
        </form>
        <div className="divider py-4">OR</div>
        <button
          onClick={handleGoogleLogin}
          type="submit"
          className="w-full btn  bg-transparent text-xl font-semibold rounded-md text-blue-600  border-2 border-blue-600"
        >
          <FaGoogle />
          Google
        </button>
      </div>
    </div>
  );
};

export default Register;
