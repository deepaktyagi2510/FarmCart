import React from 'react';
import logo1 from '../images/logo1.png'; // Adjust the path as necessary
import farmer from '../images/farmar.jpg'; // Adjust the path as necessary
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';

function Footer() {
  return (
    <>
    
      <footer className="bg-gray-800 text-white py-8 mt-12 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Logo and Description */}
            <div className="flex items-center mb-4 md:mb-0 text-center md:text-left">
              <img src={logo1} alt="FarmCart Logo" className="w-16 h-auto mr-4" />
              <div>
                <h2 className="text-2xl font-bold">FarmCart</h2>
                <p className="mt-2 text-sm">
                  Your go-to destination for fresh and organic farm produce delivered right to your doorstep.
                </p>
              </div>
            </div>

            {/* About Us Section */}
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 text-center md:text-left max-w-lg">
              <h3 className="text-lg font-semibold">About Us</h3>
              <p className="mt-2 text-sm">
                At FarmCart, we empower farmers by providing a platform to sell their products directly to consumers. We believe in supporting local agriculture and bringing the freshest produce to your table.
              </p>
              <p className="mt-2 text-sm">
                Our mission is to create a sustainable and transparent food system that connects farmers and consumers. By cutting out the middleman, we ensure that farmers receive fair prices for their hard work while consumers enjoy fresh, organic produce.
              </p>
              <p className="mt-2 text-sm">
                We envision a world where local farming thrives, communities are healthier, and the environment benefits from sustainable agricultural practices. FarmCart is not just a marketplace; it's a movement towards a better food future.
              </p>
            </div>

            {/* Farm Image */}
            <div className="hidden md:block">
              <img src={farmer} alt="Farm" className="w-32 h-auto rounded-lg shadow-lg" />
            </div>
          </div>

          <hr className="my-6 border-gray-600" />

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-6">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold">Contact Us</h4>
              <p className="text-sm mt-2">Email:Deepak.tyagi2510@gmail.com</p>
              <p className="text-sm">Phone: 9719819933</p>
            </div>

            {/* Newsletter Subscription */}
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold">Subscribe to Our Newsletter</h4>
              <form className="mt-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg border border-gray-400 text-black"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-600 text-white rounded-r-lg hover:bg-pink-700"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-pink-600"><FaFacebook size={24} /></a>
              <a href="#" className="text-white hover:text-pink-600"><FaTwitter size={24} /></a>
              <a href="#" className="text-white hover:text-pink-600"><FaInstagram size={24} /></a>
              <a href="#" className="text-white hover:text-pink-600"><FaLinkedin size={24} /></a>
            </div>
          </div>

          <hr className="my-6 border-gray-600" />

          {/* Footer Bottom */}
          <div className="flex justify-center items-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} FarmCart. All rights reserved.
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute bottom-8 right-8 p-3 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700"
          >
            <FaArrowUp size={20} />
          </button>
        </div>
      </footer>
    </>
  );
}

export default Footer;
