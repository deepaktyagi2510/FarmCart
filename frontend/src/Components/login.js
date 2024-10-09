import React, { useState } from 'react';
import axios from 'axios';
import pexels from '../images/pexels.webp';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';
import Footer from './aboutus';
import { bindActionCreators } from "redux";
import { UserAction } from "../redux/User/index";
import { useDispatch } from "react-redux";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false); // State for toggling password visibility
    const [loginError, setLoginError] = useState(null); // State for login error messages
    const nv = useNavigate();

    // Email validation function using a regular expression
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        // Validate email and update the state
        setIsEmailValid(validateEmail(value));
    };

    const { UserSave } = bindActionCreators(UserAction, dispatch);
    const handleLogin = (event) => {
        event.preventDefault();
        axios
          .post("http://localhost:8081/user/login", null, {
            params: { email: email, password: password },
          })
          .then((res) => {
            if (res.data) {
              UserSave(res.data);
              nv("/Products");
              setLoginError(null); // Clear any previous error messages
            } else {
              setLoginError("Invalid email or password. Please try again."); // Show error message
            }
          })
          .catch((err) => {
            console.log(err);
            setLoginError("Invalid email or password. Please try again.");
          });
    };

    return (
        <>
            <Navbar />
            <div
                className="flex flex-col items-center justify-right min-h-screen bg-cover bg-left"
                style={{ backgroundImage: `url(${pexels})` }}
            >
                <div className="flex items-center justify-center min-h-screen">
                    <div className="bg-transparent p-8 text-center rounded-lg shadow-lg w-full max-w-md">
                        <h1 className="text-3xl font-bold text-black mb-4">Login</h1>
                        <form className="px-4 py-4 bg-gray-700 opacity-100 rounded-lg shadow-md">
                            <div className="mb-4 text-left">
                                <label htmlFor="email" className="block  font-bold mb-2 text-white">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    className={`w-full px-4 py-2 border rounded focus:outline-none ${
                                        isEmailValid ? 'focus:ring-2 focus:ring-green-500' : 'border-red-500 focus:ring-red-500'
                                    }`}
                                    type="email"
                                    placeholder="your email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                {!isEmailValid && (
                                    <p className="text-red-500 text-sm mt-2">Please enter a valid email address.</p>
                                )}
                            </div>

                            <div className="mb-4 text-left relative">
                                <label htmlFor="password" className="block  font-bold mb-2  text-white">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                                    type={passwordVisible ? "text" : "password"} // Toggle input type
                                    placeholder="your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span
                                    className="absolute right-3 top-10 cursor-pointer text-gray-500"
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                >
                                    {passwordVisible ? <FaEyeSlash /> : <FaEye />} {/* Toggle icon */}
                                </span>
                            </div>

                            <div className="mb-4 text-right">
                                <span className="text-sm text-green-600 cursor-pointer hover:underline">
                                    forgot password?
                                </span>
                            </div>

                            {/* Display login error */}
                            {loginError && (
                                <div className="mb-4 text-red-500 text-sm">
                                    {loginError}
                                </div>
                            )}

                            <div className="mb-4">
                                <button
                                    onClick={handleLogin}
                                    className="w-full py-2 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition duration-300"
                                    type="submit"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="mt-4">
                            <span className="text-sm text-black p-2 rounded">
                                <h2 className="text-black p-2 rounded-r-sm">new here?</h2>
                                <a href="/Register">SignUp</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
