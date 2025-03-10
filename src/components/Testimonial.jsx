import { testimonialsData } from "../assets/assets";

const Testimonial = () => {
  return (
    <div>
      <h1 className="text-center text-2xl mb-12 md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Customer Testimonials
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className=" bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-500"
          >
            <p>"</p>
            <p>{item.text}</p>
            <div>
              <img src={item.image} alt="" />
              <div>
                <p>{item.author}</p>
                <p>{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
