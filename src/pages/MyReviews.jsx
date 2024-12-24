import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null); // For Update Modal
    const [loading, setLoading] = useState(true);

    // Fetch logged-in user's reviews
    useEffect(() => {
        if (user?.email) {
            axios
                .get(`http://localhost:5000/myReviews`, {
                    params: { userEmail: user.email },
                })
                .then((res) => {
                    console.log(res.data)
                    setReviews(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Error fetching reviews:", err);
                    setLoading(false);
                });
        }
    }, [user?.email]);

    // Update a review
    const handleUpdateSubmit = (updatedReview) => {
        axios
            .patch(`http://localhost:5000/reviews/${updatedReview._id}`, updatedReview)
            .then(() => {
                setReviews((prev) =>
                    prev.map((review) =>
                        review._id === updatedReview._id ? updatedReview : review
                    )
                );
                setSelectedReview(null); // Close modal
                Swal.fire("Success", "Review updated successfully!", "success");
            })
            .catch((err) => {
                console.error("Error updating review:", err);
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
                    .delete(`http://localhost:5000/reviews/${id}`, {
                        params: { userEmail: user.email },
                    })
                    .then(() => {
                        setReviews((prev) => prev.filter((review) => review._id !== id));
                        Swal.fire("Deleted!", "Your review has been deleted.", "success");
                    })
                    .catch((err) => {
                        console.error("Error deleting review:", err);
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
        <div className="w-11/12 mx-auto mt-6">
            <h2 className="text-2xl text-teal-700 font-bold mb-4">My Reviews</h2>

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
                            <p className="text-gray-600">{review.text}</p>
                            <p className="text-sm text-gray-500">Rating: {review.rating}/5</p>
                            <div className="flex gap-2">
                                <button
                                    className="btn btn-warning btn-sm"
                                    onClick={() => setSelectedReview(review)}
                                >
                                    Update
                                </button>
                                <button
                                    className="btn btn-error btn-sm"
                                    onClick={() => handleDelete(review._id)}
                                >
                                    Delete
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
                        <h3 className="font-bold text-lg">Update Review</h3>
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
                            <input
                                type="number"
                                value={selectedReview.rating}
                                min="1"
                                max="5"
                                className="input input-bordered w-full mb-4"
                                onChange={(e) =>
                                    setSelectedReview({
                                        ...selectedReview,
                                        rating: parseFloat(e.target.value),
                                    })
                                }
                            />
                            <div className="modal-action">
                                <button type="submit" className="btn btn-success">
                                    Save
                                </button>
                                <button
                                    className="btn btn-error"
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
