import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="container div-size py-4">
      <div>
        <h4>About Me</h4>
        <div className="bars"></div>
      </div>
      <div className="mt-4">
        <p className="fs-5 mb-0">Hi! I'm</p>
        <h2>Shahrear Ahamed</h2>
        <div>
          <p>
            I am a web developer. Now that I'm learning web development, I want
            to be a full-stack web developer. At this point I'm learning the
            React js , which was created by Facebook. I want to be a MERN stack
            developer. After learning web development i'll learn app
            development.
          </p>
          <h3>My Dream</h3>
          <p>
            After finishing this road, I will try to start my own small IT farm
            with my friends. I have a big dream. My dream is to create a fully
            automated volunteer system for collecting donations from others.
            With this money, my system or organization will try to help poor
            people to recover from their poverty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
