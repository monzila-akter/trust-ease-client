import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const MyServices = () => {
    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredServices, setFilteredServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null); // For update modal

    // Fetch services created by the logged-in user
    useEffect(() => {
        if (user?.email) {
            axios
                .get(`https://trust-ease-server.vercel.app/myServices`, {
                    params: { userEmail: user.email },
                })
                .then((res) => {
                    setServices(res.data);
                    setFilteredServices(res.data); // Initialize filtered services
                })
                .catch((err) => toast.error("Error fetching services:", err));
        }
    }, [user?.email]);

    // Filter services by search term
    useEffect(() => {
        const filtered = services.filter((service) =>
            service.serviceTitle.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredServices(filtered);
    }, [search, services]);

    // Handle service update submission
    const handleUpdateSubmit = (updatedService) => {
        // console.log("Updating service with data:", updatedService); // Debugging log

        if (!updatedService.serviceTitle || !updatedService.price) {
            Swal.fire("Error", "Service title and price are required.", "error");
            return;
        }

        axios
            .patch(`https://trust-ease-server.vercel.app/services/${updatedService._id}`, updatedService, {
                withCredentials: true, // Ensure cookies are included
            })
            .then(() => { 
                // console.log('res.data', res);
                
                setServices((prev) =>
                    prev.map((service) =>
                        service._id === updatedService._id ? updatedService : service
                    )
                );
                setSelectedService(null); // Close the modal
                Swal.fire("Success", "Service updated successfully!", "success");
            })
            .catch((err) => {
                // console.log('err', err);
                
                // console.error("Error updating service:", err.response?.data || err.message);
                Swal.fire("Error", err.response?.data?.message || "Failed to update service.", "error");
            });
    };

    // Handle service delete
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
                    .delete(`https://trust-ease-server.vercel.app/services/${id}`, {
                        withCredentials: true, // Ensure cookies are included
                    })
                    .then(() => {
                        setServices((prev) => prev.filter((service) => service._id !== id));
                        Swal.fire("Deleted!", "Your service has been deleted.", "success");
                    })
                    .catch(() => {
                        // console.error("Error deleting service:", err);
                        Swal.fire("Error", "Failed to delete service.", "error");
                    });
            }
        });
    };

    return (
        <div className="w-11/12 mx-auto px-5 md:px-10 lg:px-14 mt-[100px] py-16">
            <h2 className="text-4xl text-teal-700 font-bold text-center mb-8">My Services</h2>

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search services..."
                className="input input-bordered w-full max-w-lg mb-4"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Services Table */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Service Title</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredServices.map((service, index) => (
                            <tr key={service._id}>
                                <th>{index + 1}</th>
                                <td>{service.serviceTitle}</td>
                                <td>${service.price}</td>
                                <td>
                                    <button
                                        className="btn btn-warning text-lg mr-2"
                                        onClick={() => {
                                            // console.log("Selected service for update:", service); // Debugging log
                                            setSelectedService(service);
                                        }}
                                    >
                                        <FaPenToSquare></FaPenToSquare>
                                    </button>
                                    <button
                                        className="btn btn-error text-lg text-white"
                                        onClick={() => handleDelete(service._id)}
                                    >
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Update Modal */}
            {selectedService && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Update Service</h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleUpdateSubmit(selectedService);
                            }}
                        >
                            <input
                                type="text"
                                value={selectedService?.serviceTitle || ""}
                                className="input input-bordered w-full mb-4"
                                onChange={(e) =>
                                    setSelectedService({
                                        ...selectedService,
                                        serviceTitle: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="number"
                                value={selectedService?.price || ""}
                                className="input input-bordered w-full mb-4"
                                onChange={(e) =>
                                    setSelectedService({
                                        ...selectedService,
                                        price: parseFloat(e.target.value),
                                    })
                                }
                            />
                            <div className="modal-action">
                                <button type="submit" className="btn btn-success">
                                    Save
                                </button>
                                <button
                                    className="btn btn-error"
                                    onClick={() => setSelectedService(null)}
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

export default MyServices;
