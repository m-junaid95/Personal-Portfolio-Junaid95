import React, { useState } from "react";

// Styles
import "./testimonials.css";

// Icon
import testimonialSVG from "images/review.png";

// components
import { Heading } from "components/Heading/Heading";
import Testimonial from "./Testimonial/Testimonial";

const Portfolio = ({ testimonials }) => {

  return (
    <section
      data-aos="fade-left"
      className="testimonial-section"
      name="testimonial"
      id="testimonials"
    >
      <Heading
        text={`Client Testimonials`}
        style={{ padding: "3rem" }}
      />
      <div className="testimonials">
        {testimonials &&
          testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${"block"}`}
            >
              <div className="svg-image-container">
                <img src={testimonialSVG} alt="testimonial" />
              </div>
              <div className="buttons-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  className="svg"
                >
                  <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  className="svg"
                  style={{ marginLeft: "1rem" }}
                >
                  <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                </svg>
              </div>
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
