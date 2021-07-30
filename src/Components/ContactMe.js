import React from "react";

export const ContactMe = () => {
  return (
    <div className="contactContainer">
      <div className="form-group">
        <label htmlFor="name" className="contactHeading">
          Contact me!
        </label>
        <br></br>
        <label htmlFor="name" className="contactDetails">
          Your Name
        </label>
        <input
          type="text"
          className="form-control contactDetails"
          placeholder="Enter your Name"
          style={{ width: "500px" }}
        />
        <label htmlFor="email" className="contactDetails">
          Your Email
        </label>
        <input
          type="text"
          className="form-control contactDetails"
          placeholder="Enter your Email"
        />
        <label htmlFor="phone" className="contactDetails">
          Your Phone Number
        </label>
        <input
          type="text"
          className="form-control contactDetails"
          placeholder="Enter your Phone Number"
        />
        <label htmlFor="describe" className="contactDetails">
          Describe what you want to contact me for here
        </label>
        <textarea
          type="text"
          className="form-control contactDetails"
          placeholder="Your message"
        />
        <button className="btn btn-sm btn-danger" style={{ marginTop: "15px" }}>
          Submit
        </button>
      </div>
    </div>
  );
};
