import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const { openSignIn } = useClerk();
  return (
    <div className="flex items-center justify-between p-3 md:p-4 bg-white mx-2 md:mx-4 shadow-sm sticky top-0 z-10 lg:mx-auto rounded-b-lg">
      <Link to="/" className="flex items-center">
        <img className="h-8 md:h-10" src={assets.logo} alt="" />
      </Link>
      {isSignedIn ? (
        <div>
          <UserButton />
        </div>
      ) : (
        <button
          onClick={openSignIn}
          className="bg-zinc-800 text-white rounded-full flex justify-center items-center px-3 py-1.5 md:px-4 md:py-2 gap-1 text-sm md:text-base hover:bg-zinc-700 transition-colors duration-300"
        >
          Get Started{" "}
          <img className="w-2.5 md:w-3" src={assets.arrow_icon} alt="" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
