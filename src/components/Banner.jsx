import React from "react";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 max-w-6xl mx-auto">
      {/* left side */}
      <div className="text-center md:text-left w-full md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold xl:text-5xl text-neutral-700 leading-tight">
          Remove the <br />{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            background
          </span>
          from <br />
          images for free
        </h1>
        <p className="my-4 text-gray-600 text-lg">
          Upload your images, <br className="hidden md:block" /> get a clean,{" "}
          <br className="hidden md:block" /> background-free version.
        </p>
        <div className="mt-6 flex justify-center md:justify-start">
          <input className="hidden" type="file" name="" id="img" />
          <label
            className="bg-gradient-to-r cursor-pointer from-violet-600 to-fuchsia-500 w-56 rounded-full text-white px-4 py-2 flex justify-center items-center gap-2 hover:scale-105 transition-all duration-500"
            htmlFor="img"
          >
            <img className="w-4" src={assets.upload_btn_icon} alt="" />
            <p>Upload your image</p>
          </label>
        </div>
      </div>
      {/* right side */}
      <div className="w-full md:w-1/2">
        <img
          className="w-full max-w-md mx-auto"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
