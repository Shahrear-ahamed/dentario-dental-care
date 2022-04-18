import React from "react";
import "./PageNotFound..css";

const PageNotFound = () => {
  return (
    <section className="div-size container position-relative">
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="position-relative">
          <h2 className="text-center error-font">404</h2>
          <h4 className=" error-text text-center position-absolute top-50 start-50 translate-middle">
            Sorry Page Not Found
          </h4>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
