import React from "react";
import { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8chqlcr",
        "template_hk2zadp",
        form.current,
        "DK-p10KHZqt7OUARR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="join">
      <div className="left-j">
        <div></div>
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP </span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} action="" className="email" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter you email address"
          />
          <button className="jbtn">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
