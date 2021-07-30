import React from "react";
import "../Style/Style.css";
import homeImage from "../Images/home.jpg";
import codeImage from "../Images/code.jpg";
import contactImage from "../Images/contact.jpg";
import {NavLink} from 'react-router-dom'

export const Home = () => {
  return (
    // <div className="container">
    <>
      <div className="myDescription">
        <div className="myPara">
          <p>
            Confused on which course to take? I have got you covered. Browse
            courses and find out the best course for you. Its free! Code With
            Harry is my attempt to teach basics and those coding techniques to
            people in short time which took me ages to learn.
          </p>
        </div>
        <div className="myDescriptionButtons">
          <button
            className="btn btn-sm btn-danger"
            style={{ marginRight: "5px" }}
          >
            Browse Blog
          </button>
          <button
            className="btn btn-sm btn-success"
            style={{ marginRight: "5px" }}
          >
            Browse Video Tutorials
          </button>
          <NavLink className="btn btn-sm btn-primary" exact to="/ContactMe">Contact Me</NavLink>
        </div>
      </div>
      <div className="myCards">
        <div className="card">
          <img src={homeImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Free Video Courses</h5>
            <p className="card-text">
              Get your programming career started with these free video courses.
              Source code is available with all the videos for amazing learning
              experience
            </p>
          </div>
        </div>
        <div className="card">
          <img src={codeImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Coding Articles</h5>
            <p className="card-text">
              Some of the latest coding information compiled in the form of
              coding articles. Keep your programming knowledge up to date with
              these articles.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={contactImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Contact Me</h5>
            <p className="card-text">
              Learn programming from these free courses. Examples are available
              with these tutorials. You can contact me for any doubt and I will
              get back to you!
            </p>
          </div>
        </div>
      </div>
      </>
   
  );
};
