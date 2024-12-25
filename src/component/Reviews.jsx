import React, { useState, useContext } from "react";
import axios from "axios";
import Rating from "react-rating";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";


const Reviews = ({ reviews = [], setReviews, serviceId, serviceTitle }) => {
    const { user, loading } = useContext(AuthContext); // Access user from AuthContext
    const [newReview, setNewReview] = useState("");
    const [rating, setRating] = useState(0);

    const addReview = () => {
        if (!user) {
            Swal.fire({
                title: "Login Required",
                text: "Please log in to add a review.",
                icon: "warning",
                confirmButtonText: "OK",
            });
            return;
        }

        const review = {
            text: newReview,
            rating,
            serviceId,
            serviceTitle,
            userName: user.displayName || "Anonymous", // Use user's display name
            userEmail: user.email || "Anonymous", 
            userPhoto: user.photoURL || "https://via.placeholder.com/150",
            postedDate: new Date(),
        };

        // POST the new review to the server
        axios.post("http://localhost:5000/reviews", review, {withCredentials: true}).then(() => {
            setReviews([...reviews, review]); // Update the reviews state
            setNewReview(""); // Clear the text area
            setRating(0); // Reset the rating input

            // SweetAlert for success message
            Swal.fire({
                title: "Review Added!",
                text: "Your review has been successfully submitted.",
                icon: "success",
                confirmButtonText: "OK",
            });
        });
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl text-teal-700 font-bold mb-4">Reviews</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {/* Show existing reviews */}
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <div key={index} className="border-b border-gray-200 py-4 flex items-start gap-4">
                                <img
                                    src={review.userPhoto}
                                    alt={`${review.userName}'s avatar`}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <p className="text-gray-800">{review.text}</p>
                                    <div className="flex items-center justify-between mt-2">
                                        <p className="text-sm text-gray-500">By: {review.userName}</p>
                                        <p className="text-teal-700 font-semibold">
                                            Rating: {review.rating}/5
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No reviews yet.</p>
                    )}
                    {/* Add a new review */}
                    <div className="bg-gray-100 p-4 rounded-lg mt-6">
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded-md"
                            rows="4"
                            placeholder="Write your review..."
                            value={newReview}
                            onChange={(e) => setNewReview(e.target.value)}
                        ></textarea>
                        <div className="mt-4">
                            <p className="text-sm text-gray-500 mb-2">Rate this service:</p>
                            <Rating
                                initialRating={rating}
                                onChange={(value) => setRating(value)} // Set the rating value
                                emptySymbol={
                                    <svg
                                        className="w-6 h-6 text-gray-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        ></path>
                                    </svg>
                                }
                                fullSymbol={
                                    <svg
                                        className="w-6 h-6 text-teal-700"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                    </svg>
                                }
                            />
                        </div>
                        <button
                            className="bg-teal-700 text-white px-4 py-2 rounded-md mt-4 hover:bg-teal-800"
                            onClick={addReview}
                        >
                            Add Review
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Reviews;
