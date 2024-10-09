import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaBox,
  FaHeart,
  FaCog,
  FaLifeRing,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../redux/Cart/index";
import { bindActionCreators } from "redux";

// Assume 'user' data is stored in local storage after login
const user = JSON.parse(localStorage.getItem("user"));

const Sidebar = () => {
  const cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  const { getallCart } = bindActionCreators(CartActions, dispatch);

  useEffect(() => {
    getallCart();
  }, []);

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Hamburger Button */}
      <div
        className="bg-gray-800 text-white p-4 top-0 left-0 z-50 cursor-pointer sticky"
        onClick={toggleSidebar}
      >
        <FaBars size={24} />
      </div>

      {/* Sidebar */}
      <div
        className={`h-screen bg-gradient-to-b from-green-600 to-green-900 text-white fixed top-0 left-0 shadow-2xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-64 z-40`}
      >
        <nav className="flex flex-col p-6 space-y-6">
          {/* User Greeting */}
          <div className="flex items-center space-x-4">
            <FaUser className="text-white text-lg" />
            <span className="text-xl font-bold">Hey {user?.data?.fname || "User"}</span>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col space-y-4">
            <a
              href="/Cart"
              className="flex items-center py-3 px-4 rounded-lg hover:bg-green-800 transition-colors duration-300"
            >
              <FaBox className="mr-3 text-lg" /> 
              My Orders
              <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cart?.Carts?.length || 0}
              </span>
            </a>

            <a
              href="#wishlist"
              className="flex items-center py-3 px-4 rounded-lg hover:bg-green-800 transition-colors duration-300"
            >
              <FaHeart className="mr-3 text-lg" /> 
              Wishlist
            </a>

            <a
              href="#settings"
              className="flex items-center py-3 px-4 rounded-lg hover:bg-green-800 transition-colors duration-300"
            >
              <FaCog className="mr-3 text-lg disabled:" /> 
              Settings
            </a>

            <a
              href="#support"
              className="flex items-center py-3 px-4 rounded-lg hover:bg-green-800 transition-colors duration-300"
            >
              <FaLifeRing className="mr-3 text-lg" /> 
              Support
            </a>

            <a
              href="/"
              className="flex items-center py-3 px-4 rounded-lg hover:bg-green-800 transition-colors duration-300"
            >
              <FaSignOutAlt className="mr-3 text-lg" /> 
              Logout
            </a>
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 p-8 transition-all duration-300 ml-64 ${isOpen ? "ml-64" : "ml-0"}`}>
        {/* Product Page or Other Content */}
      </div>
    </div>
  );
};

export default Sidebar;
