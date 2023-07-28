import React from "react";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";

const Pay = () => {
  const [amount, setAmount] = useState(Math.random() * 100);

  const PayNow = () => {

    if (amount === "") {
    } else {
        var options = {
            key: "rzp_test_4rYulQk0uTdcuL",
            key_secret: "FSMlKjuFQtKbRtwQcf8X5p29",
            amount: parseInt(amount * 100),
            currency: "INR",
            order_receipt: 'order_rcptid_' + "zvshj",
            name: "Archiviomariorusso",
            description: "for testing purpose",
            handler: function (response) {
              console.log(response)
              const paymentId = response.razorpay_payment_id
          
      
              try {
                alert("success")
              } catch (error) {
                console.log(error)
              }
            },
      
            theme: {
              color: "#141414"
            }
          };
          var pay = new window.Razorpay(options);
          pay.open();
          console.log(pay)
  };}

  return (
    <>
      <div className="fixed sm:top-[50%] sm:left-[40%] top-[49%] left-[30%]">
        <div
          className="cursor-pointer"
          onClick={() => {
            PayNow();
          }}
        >
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-sm md:text-base lg:text-lg"
          >
            ARCHIVIO MARIO RUSSO
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Pay;
