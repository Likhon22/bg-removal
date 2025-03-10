import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Result = () => {
  return (
    <div className="mx-4 my-3 lg:mx-auto max-w-6xl mt-14 min-h-[75vh]">
      <div className="bg-white p-4 md:p-8 rounded-xl shadow-md">
        {/* image container */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* left side */}
          <div className="flex-1">
            <p className="text-lg font-medium mb-3 text-gray-700">Original</p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <img
                src={assets.image_w_bg}
                alt="Original Image"
                className="w-full object-contain rounded-lg"
              />
            </div>
          </div>
          {/* right side */}
          <div className="flex-1">
            <p className="text-lg font-medium mb-3 text-gray-700">
              Background Removed
            </p>
            <div className="bg-[#f5f5f5] p-4 rounded-lg border-2 border-dashed border-gray-300">
              <img
                src={assets.image_wo_bg}
                alt="Background Removed Image"
                className="w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/"
          className="bg-white border border-gray-300 text-gray-700 rounded-full py-2.5 px-6 hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center w-full sm:w-auto"
        >
          Try another image
        </Link>
        <a
          href="#"
          className="bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-full py-2.5 px-6 hover:opacity-90 transition-opacity duration-300 flex items-center justify-center w-full sm:w-auto"
        >
          Download image
        </a>
      </div>
    </div>
  );
};

export default Result;
