

const MeetPartners = () => {
  return (
    <div className="mb-10 md:mb-20 py-16 bg-teal-50">
        <div className="w-11/12 mx-auto px-5 md:px-10 lg:px-14">
      <h2 className="text-4xl font-bold text-center mb-10 text-teal-700">
        Meet Our Partners
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Partner 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
          <img
            src="https://i.ibb.co.com/HVvkfXK/k-12-tech-innovation-news.jpg" // Replace with actual logo URL
            alt="Tech Innovators"
            className="w-32 h-32 mx-auto object-cover rounded-md mt-6"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-teal-700">Tech Innovators</h3>
            <p className="text-gray-600 mt-3">
              Leading innovations in technology and software solutions.
            </p>
          </div>
        </div>

        {/* Partner 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
          <img
            src="https://i.ibb.co.com/ZdpN0nn/brain-shaped-light-bulb-surrounded-by-colorful-icons-representing-ideas-thinking-1280751-50843.jpg" // Replace with actual logo URL
            alt="Creative Minds"
            className="w-32 h-32 object-cover rounded-md mx-auto mt-6 border-2"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-teal-700">Creative Minds</h3>
            <p className="text-gray-600 mt-3">
              Experts in branding and creative marketing strategies.
            </p>
          </div>
        </div>

        {/* Partner 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
          <img
            src="https://i.ibb.co.com/ZgNz7tn/images-18.jpg" // Replace with actual logo URL
            alt="Green Earth Initiative"
            className="w-32 h-32 object-cover rounded-md mx-auto mt-6"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-teal-700">
              Green Earth Initiative
            </h3>
            <p className="text-gray-600 mt-3">
              Focused on sustainability and environmental responsibility.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MeetPartners;
