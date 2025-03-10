import { testimonialsData } from "../assets/assets";

const Testimonial = () => {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-center text-2xl mb-12 md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Customer Testimonials
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonialsData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <p className="text-3xl text-violet-500 font-serif mb-3">"</p>
            <p className="text-gray-600 mb-6 italic">{item.text}</p>
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
              />
              <div>
                <p className="font-medium text-gray-800">{item.author}</p>
                <p className="text-sm text-gray-500">{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
