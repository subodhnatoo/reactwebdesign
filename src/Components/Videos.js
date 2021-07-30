import React from "react";
import pythonImage from "../Images/default_YAMLAio.png";
import javaImage from "../Images/java.png";
import cLanguageImage from "../Images/c_2OXTgR5.png";
import dsImage from "../Images/algo_HGtKbPH.png";
import phpImage from "../Images/php_HVsSGgg.png";
import cppLanguageImage from "../Images/cpp.png";
import webImage from "../Images/world-wide-web.png";
import gitImage from "../Images/git_SMHQRfM.png";
import androidImage from "../Images/android_eJ3rhzN.png";
import jsImage from "../Images/js.png";
import djangoImage from "../Images/django.png";
import machineImage from "../Images/cloudai.jpg";

export const Videos = () => {
  return (
    <div className="videosListContainer">
      <div className="videosContainer">
        <div className="videosImage">
          <img src={pythonImage} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="videos-card-title">
            Python Practice Programs With Logic & Explanation In Hindi
          </h5>
          <p className="videos-card-text">
            ython Practice Programs With Logic & Explanation In Hindi
          </p>
          <button className="btn btn-sm btn-outline-danger videoButtons">Start Watching</button>
        </div>
      </div>
      <div className="videosContainer">
        <div className="videosImage">
          <img src={javaImage} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="videos-card-title">Java Tutorials For Beginners</h5>
          <p className="videos-card-text">
            This series will cover Java from starting to the end. We will learn
            java from the start to the end
          </p>
          <button className="btn btn-sm btn-outline-danger videoButtons">Start Watching</button>
        </div>
      </div>
      <div className="videosContainer">
        <div className="videosImage">
          <img src={cLanguageImage} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="videos-card-title">C Language Practice Programs</h5>
          <p className="videos-card-text">
            This series contains programs for you to practice C Programming and
            related concepts
          </p>
          <button className="btn btn-sm btn-outline-danger videoButtons">Start Watching</button>
        </div>
      </div>
      <div className="videosContainer">
        <div className="videosImage">
          <img src={dsImage} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="videos-card-title">Data Structures and Algorithms Course in Hindi</h5>
          <p className="videos-card-text">
          Data Structures and algorithms course
          </p>
          <button className="btn btn-sm btn-outline-danger videoButtons">Start Watching</button>
        </div>
      </div>
      <div className="videosContainer">
        <div className="videosImage">
          <img src={phpImage} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="videos-card-title">PHP Tutorials in Hindi</h5>
          <p className="videos-card-text">
          PHP Tutorials in Hindi
          </p>
          <button className="btn btn-sm btn-outline-danger videoButtons">Start Watching</button>
        </div>
      </div>
      <div className="videosContainer">
        <div className="videosImage">
          <img src={cppLanguageImage} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="videos-card-title">C++ Tutorials In Hindi</h5>
          <p className="videos-card-text">
          C++ Tutorials In Hindi
          </p>
          <button className="btn btn-sm btn-outline-danger videoButtons">Start Watching</button>
        </div>
      </div>
      <div className="videosContainer">
        <div className="videosImage">
          <img src={webImage} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="videos-card-title">Web Development Tutorials For Beginners In Hindi: HTML, CSS, JavaScript & More</h5>
          <p className="videos-card-text">
          Web Development Tutorials For Beginners In Hindi: HTML, CSS, JavaScript & More
          </p>
          <button className="btn btn-sm btn-outline-danger videoButtons">Start Watching</button>
        </div>
      </div>
      <div className="videosContainer">
        <div className="videosImage">
          <img src={gitImage} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="videos-card-title">Complete Git Tutorials For Beginners In Hindi</h5>
          <p className="videos-card-text">
          Complete Git Tutorials For Beginners In Hindi
          </p>
          <button className="btn btn-sm btn-outline-danger videoButtons">Start Watching</button>
        </div>
      </div>
      <div className="videosContainer">
        <div className="videosImage">
          <img src={androidImage} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="videos-card-title">Android Development Tutorials In Hindi</h5>
          <p className="videos-card-text">
          Learn to create awesome android applications in hindi
          </p>
          <button className="btn btn-sm btn-outline-danger videoButtons">Start Watching</button>
        </div>
      </div>
      <div className="videosContainer">
        <div className="videosImage">
          <img src={jsImage} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="videos-card-title">JavaScript Tutorials In Hindi</h5>
          <p className="videos-card-text">
          avaScript Tutorials In Hindi
          </p>
          <button className="btn btn-sm btn-outline-danger videoButtons">Start Watching</button>
        </div>
      </div>
      <div className="videosContainer">
        <div className="videosImage">
          <img src={djangoImage} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="videos-card-title">Python Django Tutorials In Hindi</h5>
          <p className="videos-card-text">
          Learn to create awesome android applications in hindi
          </p>
          <button className="btn btn-sm btn-outline-danger videoButtons">Start Watching</button>
        </div>
      </div>
      <div className="videosContainer">
        <div className="videosImage">
          <img src={machineImage} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="videos-card-title">Machine Learning Tutorials For Beginners Using Python In Hindi</h5>
          <p className="videos-card-text">
          Machine Learning Tutorials For Beginners Using Python In Hindi
          </p>
          <button className="btn btn-sm btn-outline-danger videoButtons">Start Watching</button>
        </div>
      </div>
    </div>
  );
};
