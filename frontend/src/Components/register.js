import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import pexels from '../images/pexels.webp';
import Navbar from "./navbar";
import Footer from "./aboutus";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const { fname, lname, phone, address, city, pincode, email, password } = formData;

    if (!fname || !lname || !phone || !address || !city || !pincode || !email || !password) {
      alert("All fields are required.");
      return false;
    }

    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(fname) || !nameRegex.test(lname)) {
      alert("Names cannot contain numbers or special characters.");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number must be exactly 10 digits and contain only numbers.");
      return false;
    }

    return true;
  };

  const checkUserExists = async (email) => {
    try {
      const response = await axios.get(`http://localhost:8081/user?email=${email}`);
      return response.data.exists; // Assuming your backend returns a boolean 'exists' field
    } catch (error) {
      console.log("Error checking user existence:", error);
      return false;
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const userExists = await checkUserExists(formData.email);
      if (userExists) {
        alert("A user with this email already exists. Please use a different email.");
      } else {
        axios
          .post("http://localhost:8081/user/", formData)
          .then((res) => {
            if (res.data != null) {
              alert("User has been created");
              navigate("/login");
            }
          })
          .catch((error) => {
            console.log(error);
          });
        console.log("Registering with:", formData);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="flex flex-col items-center justify-right min-h-screen bg-cover bg-left"
        style={{ backgroundImage: `url(${pexels})` }}
      >
        <div className="flex flex-col place-items-end justify-right max-w-screen bg-cover">
          <div className="bg-opacity-50 p-10 text-center rounded-lg w-full max-w-lg bg-white">
            <h1 className="text-3xl font-bold text-black place-items-start mb-4">SignUp</h1>
            <form
              action=""
              method=""
              onSubmit={handleRegister}
              className="px-11 py-5 bg-gray-700 bg-opacity-100 rounded-xl shadow-md"
            >
              {[
                {
                  label: "First Name",
                  id: "fname",
                  type: "text",
                  placeholder: "Your first name",
                },
                {
                  label: "Last Name",
                  id: "lname",
                  type: "text",
                  placeholder: "Your last name",
                },
                {
                  label: "Phone Number",
                  id: "phone",
                  type: "tel",
                  placeholder: "Your phone number",
                },
                {
                  label: "Address",
                  id: "address",
                  type: "text",
                  placeholder: "Your address",
                },
                {
                  label: "City",
                  id: "city",
                  type: "text",
                  placeholder: "Your city",
                },
                {
                  label: "Pincode",
                  id: "pincode",
                  type: "text",
                  placeholder: "Your pincode",
                },
                {
                  label: "Email",
                  id: "email",
                  type: "email",
                  placeholder: "Your email",
                },
                {
                  label: "Password",
                  id: "password",
                  type: "password",
                  placeholder: "Your password",
                },
              ].map(({ label, id, type, placeholder }) => (
                <div className="mb-4 text-left" key={id}>
                  <label
                    htmlFor={id}
                    className="block text-white font-bold mb-2"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={formData[id]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              ))}
              <div className="mb-4">
                <button
                  className="w-full py-2 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition duration-300"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="mt-4 text-black">
              <span className="text-sm">
                Already have an account?{" "}
                <a href="/login" className="text-green-600 hover:underline">
                  Login
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Register;
