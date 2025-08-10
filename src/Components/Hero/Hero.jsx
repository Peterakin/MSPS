import React from "react";
import "./Hero.css";
import { GiRapidshareArrow } from "react-icons/gi";
import student from "../../assets/S1.jpg";
import student1 from "../../assets/S2.jpg";
import student2 from "../../assets/S3.jpg";
import student3 from "../../assets/S4.jpg";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero_content">
          <h1>
            <span>Empower</span> Your Future With Cutting Edge{" "}
            <span>Skills</span>
          </h1>
          <p>
            Unlock your potential with courses designed to help you thrive in
            the digital age. From coding to creative arts, we provide the tools
            you need to succeed.
          </p>
          <div className="buttons">
            <a href="#" className="cta-button">
              Enroll Now
            </a>
            <a href="#" className="courses-button">
              Explore Our Courses
            </a>
          </div>
          <GiRapidshareArrow className="hero_icon" />
        </div>
        <div className="hero_images">
          <div className="img_top">
            <img src={student} alt="" className="stuent_img" />
            <img src={student1} alt="" className="stuent_img_one" />
          </div>
          <div className="img_buttom">
            <img src={student2} alt="" className="stuent_img_two" />
            <img src={student3} alt="" className="stuent_img_three" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
