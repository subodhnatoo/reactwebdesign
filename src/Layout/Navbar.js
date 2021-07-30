import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="mynavbar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/Videos">Videos</NavLink>
      <NavLink exact to="/Blog">Blog</NavLink>
      <NavLink exact to="/ContactMe">Contact Me</NavLink>
      <div className="right">
        <input
          type="text"
          className="form-control"
          style={{ height: "25px", width: "175px" }}
          placeholder="Search"
        />
        <button className="btn btn-sm myButtons">Search</button>
        <button className="btn btn-sm myButtons">Login</button>
        <button className="btn btn-sm myButtons">SignUp</button>
      </div>
    </div>
  );
};
