import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux/Product";
import { bindActionCreators } from "redux";
import { CartActions } from "../redux/Cart";

import Sidebar from "./sidebar";
import Footer from "./aboutus";

const categories = ["All", "Fruits", "Vegetables", "Dairy", "Bakery"];

export default function Products() {
  const products = useSelector((state) => state.product);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [notification, setNotification] = useState(null);

  const dispatch = useDispatch();
  const { gellallprd } = bindActionCreators(actionCreators, dispatch);
  const { addprodt } = bindActionCreators(CartActions, dispatch);

  useEffect(() => {
    gellallprd();
  }, []);

  const handleAddToCart = (product) => {
    addprodt(product);
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => {
      setNotification(null);
    }, 3000); // Hide notification after 3 seconds
  };

  const filteredProducts = Object.keys(products)
    .filter((key) => {
      const product = products[key];
      const isInCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearchTerm = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return isInCategory && matchesSearchTerm;
    })
    .map((key) => products[key]);

  return (
    <>
      <Sidebar />
      <div className="container mx-auto p-4 ml-64">
        {/* Notification */}
        {notification && (
          <div className="fixed top-4 right-4 bg-green-600 text-white p-3 rounded-lg shadow-lg z-50 animate-bounce">
            {notification}
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-between mb-8 items-center">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-4 md:mb-0 shadow-md"
          />

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-1/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 shadow-md"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Featured Products */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Featured Products</h2>
          <div className="grid lg:grid-cols-3 md:grid-rows-1 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-gradient-to-r from-white to-gray-100 border p-4 rounded-lg shadow-xl transform transition-all hover:-translate-y-3 hover:shadow-2xl hover:bg-gradient-to-r from-green-100 to-green-200"
              >
                {/* Badge for New or Sale items */}
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">New</span>
                )}
                {product.isOnSale && (
                  <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">Sale</span>
                )}

                {/* Image with hover zoom effect */}
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={
                      product.img == null
                        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmj8qjOlj7WQ-GGuDPXkQRh2_x0nUR6WUSQA&s"
                        : product.img
                    }
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 rounded-lg transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Product Name and Price */}
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-green-700 transition-colors duration-300">{product.name}</h3>
                  <p className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-700 transition-colors duration-300">
                    Rs {product.price}
                  </p>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-4 w-full py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
