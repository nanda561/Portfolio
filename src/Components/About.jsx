import React, { useState } from "react";
import "./About.css";
import ProfilePhoto from "../assets/aboutpic.webp"; 
import Resume from "../assets/resume.pdf"; 

export const About = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000); // Reset the animation after 2 seconds
  };

  return (
    <div className="about-container">
      {/* Left Section: Rounded Image */}
      <div className="about-image">
        <img src={ProfilePhoto} alt="Profile" />
      </div>

      {/* Right Section: Content */}
      <div className="about-content">
        <h1 className="about-heading">
          About <span>Me</span>
        </h1>
        <p className="about-description">
          I am a passionate software developer with a strong drive to create
          innovative and impactful solutions. My journey in software
          development has been fueled by a deep curiosity and commitment to
          learning. I enjoy tackling challenges that require blending creativity
          with technical expertise to deliver user-centric designs and efficient
          systems.
        </p>

        {/* Animated Download Button */}
        <span style={{ color: "#f9532d", fontSize:"30px", border:"5px", borderColor:"#f9532d"}}>Download Resume</span>{" "}
        <div
  id="btn-download"
  className={downloaded ? "downloaded" : ""}
  onClick={handleDownload}
>
  <a href={Resume} download>
    <div className="download-content">
      <svg width="48px" height="48px" viewBox="0 0 22 16">
        <path
          d="M2,10 L6,13 L12.8760559,4.5959317 C14.1180021,3.0779974 16.2457925,2.62289624 18,3.5 L18,3.5 C19.8385982,4.4192991 21,6.29848669 21,8.35410197 L21,10 C21,12.7614237 18.7614237,15 16,15 L1,15"
          id="check"
        ></path>
        <polyline
          points="4.5 8.5 8 11 11.5 8.5"
          className="svg-out"
        ></polyline>
        <path d="M8,1 L8,11" className="svg-out"></path>
      </svg>
      
    </div>
  </a>
</div>
      </div>
    </div>
  );
};
