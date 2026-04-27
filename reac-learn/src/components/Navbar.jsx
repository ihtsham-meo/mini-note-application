import React from "react";

const Navbar = () => {
  return (
    <div className="flex  h-15 w-full justify-between pl-5 items-center text-2xl text-bold font-semibold bg-gray-300">
      <h1>Jobs.pk</h1>
      <div className="btn">
        <button className="transition-all duration-200  hover:scale-105 active:scale-95">
          Home
        </button>
        <button className="transition-all duration-200  hover:scale-105 active:scale-95">
          Contact Us
        </button>
        <button
          className="transition-all duration-200  hover:scale-105 active:scale-95"
        >
          Login
        </button>
        <button className="transition-all duration-200  hover:scale-105 active:scale-95">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
