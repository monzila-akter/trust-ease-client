import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Reviews from "./Reviews";
import ServiceInfo from "./ServiceInfo";

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
                    axios.get(`http://localhost:5000/services/${id}`), // Replace with your API URL
                    axios.get(`http://localhost:5000/reviews/${id}`),
                ]);
                console.log("Fetched Service Data:", serviceRes.data); // Log service data for debugging
                setService(serviceRes.data); // Set the fetched service
                setReviews(Array.isArray(reviewsRes.data) ? reviewsRes.data : []); // Ensure reviews is an array
            } catch (error) {
                console.error("Error fetching data:", error); // Log errors for debugging
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
        <div className="w-11/12 mx-auto p-5">
            {/* Service Details Section */}
            <ServiceInfo service={service} />
            {/* Reviews Section */}
            <Reviews
                reviews={reviews}
                setReviews={setReviews}
                serviceId={id}
            />
        </div>
    );
};

export default ServiceDetails;