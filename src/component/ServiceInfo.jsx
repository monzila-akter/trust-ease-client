const ServiceInfo = ({ service }) => {
    if (!service) {
        return <div className="text-teal-700 text-center">Loading service details...</div>;
    }

    return (
        <div className="bg-white border-2 shadow-md rounded-lg p-6 mb-8">
           <div className="flex flex-col md:flex-row space-y-7 md:space-y-0 md:space-x-16">
           <div>
              
           <img
                src={service.serviceImage}
                alt={service.serviceTitle}
                className="w-full h-64 object-cover rounded-lg"
            />
           </div>
           <div>
           <h1 className="text-3xl text-teal-700 font-bold">{service.serviceTitle}</h1>
           <p className="text-gray-600 font-semibold text-lg mt-4"><strong>Category:</strong> {service.category}</p>
           <p className="text-gray-600 font-semibold text-lg mt-4"><strong>Website:</strong> {service.website}</p>
           <p className="text-teal-700 font-semibold mt-4"><strong>Price:</strong> ${service.price}</p>
           </div>
           </div>
            
           <div>
           <p className="text-gray-600 mt-4"><strong>Description:</strong> {service.description}</p>
            
            <p className="text-gray-500 mt-2"><strong>Company:</strong> {service.companyName}</p>
           </div>
        </div>
    );
};

export default ServiceInfo;
