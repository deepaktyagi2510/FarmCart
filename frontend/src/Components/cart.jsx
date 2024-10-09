import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { CartActions } from "../redux/Cart/index";
import { useNavigate } from "react-router-dom";
import { UserAction } from "../redux/User";
import axios from "axios";

const Cartt = () => {
  const navigate = useNavigate();
  const onclickbtn = () => {
    let amountInPaise = Math.round(totalPrice * 100);
    let options = {
      key: "rzp_test_xP77ux20WwYk0l",
      amount: amountInPaise, // Convert the total price to paise
      currency: "INR",
      name: "FarmCart",
      description: "Purchase",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIsD27zI9sBtgRtDzaKBGeS22mLVsID8UJA&s",
      handler: (res) => {
        alert("Payment Successful");
        axios({
          method: "POST",
          url: "http://localhost:8081/payment/",
          data: {
            razpayId: res.razorpay_payment_id,
          },
        })
          .then((res) => {
            ordersave(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        onClean();
      },
      theme: { color: "#17B169" },
    };

    let razorPay = new window.Razorpay(options);
    razorPay.open();
  };

  const cart = useSelector((state) => state.Cart);
  const user = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const { getallCart, getclean, Remove, addprodt } = bindActionCreators(
    CartActions,
    dispatch
  );
  const { UserD } = bindActionCreators(UserAction, dispatch);

  useEffect(() => {
    getallCart();
    UserD();
  }, []);

  function ordersave(r) {
    axios
      .post("http://localhost:8081/order/", {
        quantity: cart.Carts.length,
        user: { uid: user.data.uid },
        totalPrice: totalPrice,
        payid: { payid: r.payid },
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onClickADD() {
    navigate("/Products");
  }

  function onClean() {
    getclean();
    getallCart();
  }

  // Calculate the total price of all items in the cart
  const totalPrice = cart.Carts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">This is your Cart</h1>
        <div className="flex space-x-4 mb-4">
          <button
            onClick={onClean}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Remove All
          </button>
          <button
            onClick={onClickADD} 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Additems
          </button>
          <br />
          <p className="mt-4 text-lg font-semibold">
            Total Items: {cart.Carts.length}
          </p>
          <p className="mt-4 text-lg font-semibold">
            Total Price: Rs.{totalPrice.toFixed(0)}{" "}
            {/* Display the total price */}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.Carts.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-lg font-semibold mt-2">Rs.{item.price}</p>
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => Remove(item)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Sub -
                  </button>
                  <p className="text-gray-700">Quantity: {item.quantity}</p>
                  <button
                    onClick={() => addprodt(item)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    ADD +
                  </button>
                  {/* <p className="text-gray-900 font-bold">
                    Total: Rs.{item.price * item.quantity}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-transform duration-200 hover:scale-105 mt-4 mx-auto block"
          onClick={onclickbtn}
        >
          Pay Now
        </button>
      </div>
    </>
  );
};

export default Cartt;
