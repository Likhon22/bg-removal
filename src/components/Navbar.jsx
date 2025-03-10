import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext";
import { useEffect } from "react";

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const { credit, loadCreditsData } = useContext(AppContext);
  console.log(credit);

  useEffect(() => {
    loadCreditsData();
  }, [isSignedIn]);

  const { openSignIn } = useClerk();
  return (
    <div className="flex items-center justify-between p-3 md:p-4 bg-white mx-2 md:mx-4 shadow-sm sticky top-0 z-10 lg:mx-auto rounded-b-lg">
      <Link to="/" className="flex items-center">
        <img className="h-8 md:h-10" src={assets.logo} alt="" />
      </Link>
      {isSignedIn ? (
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          <button className="flex items-center bg-blue-100 px-4 sm:px-7 py-1.5 sm:py-2 rounded-full gap-1 sm:gap-2 text-sm sm:text-base text-blue-800 hover:bg-blue-200 transition-colors duration-300">
            <img className="w-5" src={assets.credit_icon} alt="" />
            <p className="text-xs sm:text-sm text-gray-600 ">
              Credits: {credit}
            </p>
          </button>
          <p className=" text-gray-600 max-sm:hidden ">Hi {user.fullName}</p>
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
