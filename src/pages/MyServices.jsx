import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

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
                .get(`http://localhost:5000/myServices`, {
                    params: { userEmail: user.email },
                })
                .then((res) => {
                    setServices(res.data);
                    setFilteredServices(res.data); // Initialize filtered services
                })
                .catch((err) => console.error("Error fetching services:", err));
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
        console.log("Updating service with data:", updatedService); // Debugging log

        if (!updatedService.serviceTitle || !updatedService.price) {
            Swal.fire("Error", "Service title and price are required.", "error");
            return;
        }

        axios
            .patch(`http://localhost:5000/services/${updatedService._id}`, updatedService, {
                withCredentials: true, // Ensure cookies are included
            })
            .then((res) => {
                console.log('res.data', res);
                
                setServices((prev) =>
                    prev.map((service) =>
                        service._id === updatedService._id ? updatedService : service
                    )
                );
                setSelectedService(null); // Close the modal
                Swal.fire("Success", "Service updated successfully!", "success");
            })
            .catch((err) => {
                console.log('err', err);
                
                console.error("Error updating service:", err.response?.data || err.message);
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
                    .delete(`http://localhost:5000/services/${id}`, {
                        withCredentials: true, // Ensure cookies are included
                    })
                    .then(() => {
                        setServices((prev) => prev.filter((service) => service._id !== id));
                        Swal.fire("Deleted!", "Your service has been deleted.", "success");
                    })
                    .catch((err) => {
                        console.error("Error deleting service:", err);
                        Swal.fire("Error", "Failed to delete service.", "error");
                    });
            }
        });
    };

    return (
        <div className="w-11/12 mx-auto mt-6">
            <h2 className="text-2xl text-teal-700 font-bold mb-4">My Services</h2>

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
                                        className="btn btn-warning btn-sm mr-2"
                                        onClick={() => {
                                            console.log("Selected service for update:", service); // Debugging log
                                            setSelectedService(service);
                                        }}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="btn btn-error btn-sm"
                                        onClick={() => handleDelete(service._id)}
                                    >
                                        Delete
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
