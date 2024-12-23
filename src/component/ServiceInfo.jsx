const ServiceInfo = ({ service }) => {
    if (!service) {
        return <div className="text-teal-700 text-center">Loading service details...</div>;
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h1 className="text-3xl text-teal-700 font-bold">{service.serviceTitle}</h1>
            <img
                src={service.serviceImage}
                alt={service.serviceTitle}
                className="w-full h-64 object-cover rounded-lg mt-4"
            />
            <p className="text-gray-600 mt-4">{service.description}</p>
            <p className="text-teal-700 font-semibold mt-4">Price: ${service.price}</p>
            <p className="text-gray-500 mt-2">Company: {service.companyName}</p>
        </div>
    );
};

export default ServiceInfo;
