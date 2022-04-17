import React from "react";
import "./PageNotFound..css";

const PageNotFound = () => {
  return (
    <section className="container my-5 py-5">
      <div className="position-relative">
        <h2 className="text-center error-font">404</h2>
        <h4 className="text-center position-absolute top-50 start-50 translate-middle">
          Sorry Page Not Found
        </h4>
      </div>
    </section>
  );
};

export default PageNotFound;
