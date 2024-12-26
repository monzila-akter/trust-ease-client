import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Reviews from "./Reviews";
import ServiceInfo from "./ServiceInfo";
import toast from "react-hot-toast";

const ServiceDetails = () => {
    const { id } = useParams(); // Get service ID from URL
    const [service, setService] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the service and reviews data
        const fetchData = async () => {
            try {
                const [serviceRes, reviewsRes] = await Promise.all([
                    axios.get(`https://trust-ease-server.vercel.app/services/${id}`), // Replace with your API URL
                    axios.get(`https://trust-ease-server.vercel.app/reviews/${id}`),
                ]);
                setService(serviceRes.data); // Set the fetched service
                setReviews(Array.isArray(reviewsRes.data) ? reviewsRes.data : []); // Ensure reviews is an array
            } catch (error) {
                toast.error("Error fetching data:", error); // Log errors for debugging
            } finally {
                setLoading(false); // Stop loading indicator
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="w-11/12 mx-auto px-5 md:px-10 lg:px-14 my-16">
            {/* Service Details Section */}
            <ServiceInfo service={service} />
            {/* Reviews Section */}
            <Reviews
                reviews={reviews}
                setReviews={setReviews}
                serviceId={id}
                serviceTitle={service.serviceTitle}
            />
        </div>
    );
};

export default ServiceDetails;
