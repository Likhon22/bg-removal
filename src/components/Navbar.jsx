import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white mx-4">
      <Link to="/">
        {" "}
        <img src={assets.logo} alt="" />
      </Link>
      <button className="bg-zinc-800 text-white rounded-full flex justify-center items-center px-4 py-2 gap-1">
        Get Started <img className="w-3" src={assets.arrow_icon} alt="" />
      </button>
    </div>
  );
};

export default Navbar;
