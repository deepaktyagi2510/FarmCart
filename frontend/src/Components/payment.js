import React from "react";

const Payment = () => {
  const onclickbtn = () => {
    let options = {
      key: "rzp_test_xP77ux20WwYk0l",
      amount: 50 * 100,
      currency: "INR",
      name: "FarmCart",
      description: "Purchase",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIsD27zI9sBtgRtDzaKBGeS22mLVsID8UJA&s",
      handler: (res) => {
        alert("Payment Successful");
        console.log("this is ");
        console.log(res.razorpay_payment_id);
      },
      theme: { color: "#17B169" },
    };

    let razorPay = window.Razorpay(options);
    razorPay.open();
  };
  return <button onClick={onclickbtn}>pay now</button>;
};

export default Payment;