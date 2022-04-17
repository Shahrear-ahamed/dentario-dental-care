import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section className="banner-container d-flex justify-content-center align-items-center">
      <div className="container d-flex flex-column align-items-center text-center text-white px-sm-2">
        <h1 className="mb-4 banner-title">
          We Believe Everyone Should Have Easy Access To Great Dental Care
        </h1>
        <p className="mt-2 banner-para">
          Dental bridges are also utilised to replace missing teeth and are used
          when one or more natural teeth remain. Dental bridges consist of one
          crown for each gap in your smile
        </p>
        <button onClick={() => navigate("/blog")} className="btn btn-primary">
          Read More
        </button>
      </div>
    </section>
  );
};

export default Banner;
