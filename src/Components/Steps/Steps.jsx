import React from "react";
import "./Steps.css";
import { FcApproval, FcReadingEbook } from "react-icons/fc";
import { IoIosPeople } from "react-icons/io";

const Steps = () => {
  return (
    <div>
      <div className="steps">
        <div className="step">
          <div className="step_list">
            <FcReadingEbook className="icon" />
            <div className="content">
              <h3>Interactive Learning</h3>
              <p>
                Engage with hands-on projects and real-world scenarios and learn
                from industry leaders and seasoned professionals.
              </p>
            </div>
          </div>
          <div className="step_list">
            <FcApproval className="icon" />
            <div className="content">
              <h3>Accredited Programs</h3>
              <p>
                Gain skills that makes you stand out in the job market and earn
                certifications that are recognized by employers worldwide.
              </p>
            </div>
          </div>
          <div className="step_list">
            <IoIosPeople className="icon" />
            <div className="content">
              <h3>Supportive Community</h3>
              <p>
                Connect with fellow students and mentors across the globe to
                stay updated with latest trends and technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
