import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Rating from "react-rating";
import { AuthContext } from "../provider/AuthProvider";
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null); // For Update Modal
    const [loading, setLoading] = useState(true);

    // Fetch logged-in user's reviews
    useEffect(() => {
        if (user?.email) {
            axios
                .get(`https://trust-ease-server.vercel.app/myReviews`, {
                    params: { userEmail: user.email },
                })
                .then((res) => {
                    // console.log(res.data);
                    setReviews(res.data);
                    setLoading(false);
                })
                .catch(() => {
                    // console.error("Error fetching reviews:", err);
                    setLoading(false);
                });
        }
    }, [user?.email]);

    // Update a review
    const handleUpdateSubmit = (updatedReview) => {
        axios
            .patch(`https://trust-ease-server.vercel.app/reviews/${updatedReview._id}`, updatedReview, {
                withCredentials: true,
            })
            .then(() => {
                setReviews((prev) =>
                    prev.map((review) =>
                        review._id === updatedReview._id ? updatedReview : review
                    )
                );
                setSelectedReview(null); // Close modal
                Swal.fire("Success", "Review updated successfully!", "success");
            })
            .catch(() => {
                // console.error("Error updating review:", err);
                Swal.fire("Error", "Failed to update review.", "error");
            });
    };

    // Delete a review
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`https://trust-ease-server.vercel.app/reviews/${id}`, {
                        params: { userEmail: user.email },
                    })
                    .then(() => {
                        setReviews((prev) => prev.filter((review) => review._id !== id));
                        Swal.fire("Deleted!", "Your review has been deleted.", "success");
                    })
                    .catch(() => {
                        // console.error("Error deleting review:", err);
                        Swal.fire("Error", "Failed to delete review.", "error");
                    });
            }
        });
    };

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="w-11/12 mx-auto px-5 md:px-10 lg:px-14 mt-[150px] mb-16">
            <h2 className="text-4xl text-center text-teal-700 font-bold mb-8">My Reviews</h2>

            {reviews.length > 0 ? (
                <div className="grid gap-6">
                    {reviews.map((review) => (
                        <div
                            key={review._id}
                            className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4"
                        >
                            <h3 className="text-xl text-teal-700 font-bold">
                                {review.serviceTitle}
                            </h3>
                            <p className="text-gray-600"><strong>Feedback:</strong> {review.text}</p>
                            <p className="text-base font-medium text-gray-500 mb-2"><strong>Rating:</strong> {review.rating}/5</p>
                            <div className="flex gap-4">
                                <button
                                    className="btn btn-warning text-xl"
                                    onClick={() => setSelectedReview(review)}
                                >
                                    <FaPenToSquare></FaPenToSquare>
                                </button>
                                <button
                                    className="btn btn-error text-xl text-white"
                                    onClick={() => handleDelete(review._id)}
                                >
                                   <FaTrashAlt></FaTrashAlt>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 text-center mt-10">No reviews found.</p>
            )}

            {/* Update Modal */}
            {selectedReview && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-3 text-teal-700">Update Review</h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleUpdateSubmit(selectedReview);
                            }}
                        >
                            <input
                                type="text"
                                value={selectedReview.serviceTitle}
                                className="input input-bordered w-full mb-4"
                                readOnly
                            />
                            <textarea
                                value={selectedReview.text}
                                className="textarea textarea-bordered w-full mb-4"
                                onChange={(e) =>
                                    setSelectedReview({
                                        ...selectedReview,
                                        text: e.target.value,
                                    })
                                }
                            />
                            <div className="mb-4">
                                <p className="text-sm text-gray-500 mb-2">Rate this service:</p>
                                <Rating
                                    initialRating={selectedReview.rating}
                                    onChange={(value) =>
                                        setSelectedReview({
                                            ...selectedReview,
                                            rating: value,
                                        })
                                    }
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
                            <div className="modal-action">
                                <button type="submit" className="btn btn-success text-lg">
                                    Save
                                </button>
                                <button
                                    className="btn btn-error text-lg"
                                    onClick={() => setSelectedReview(null)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyReviews;
