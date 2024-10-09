import React from 'react';
import logo1 from '../images/logo1.png';
import fg from '../images/fg.jpg';
import deleviry from '../images/deleviry.webp';

function Navbar() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-6 bg-opacity-70 backdrop-blur-md">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <img className="w-12 md:w-16 h-auto" src={logo1} alt="FarmCart Logo" />
          <h1 className="text-xl md:text-2xl font-bold text-pink-800">FarmCart</h1>
          <img className=" md:h-20" src={deleviry} alt="Delivery Icon" />
        </div>
        <div className="mt-4 md:mt-0">
          <img
            className="w-12 md:w-16 h-auto rounded-full shadow-lg"
            src={fg}
            alt="Side Logo"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 bg-gray-900 text-white bg-opacity-80 py-2 md:py-4 shadow-md">
        <h1 className="hover:bg-pink-400 hover:text-white transition duration-300 p-2 rounded-lg">
          <a href="/">Home</a>
        </h1>
        <h1 className="hover:bg-pink-400 hover:text-white transition duration-300 p-2 rounded-lg">
          <a href="/Footer">About</a>
        </h1>
        <h1 className="hover:bg-pink-400 hover:text-white transition duration-300 p-2 rounded-lg disabled">
          <a href="/Footer">Contact Us</a>
        </h1>
        <h1 className="hover:bg-pink-400 hover:text-white transition duration-300 p-2 rounded-lg">
          <a href="/login">Login</a>
        </h1>
        <h1 className="hover:bg-pink-400 hover:text-white transition duration-300 p-2 rounded-lg">
          <a href="/register">Sign Up</a>
        </h1>
      </div>
    </>
  );
}

export default Navbar;
