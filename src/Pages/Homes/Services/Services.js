import React from "react";
import SingleService from "../SingleService/SingleService";

const Services = ({ services }) => {
  return (
    <section className="container my-3">
      <h2 className="text-center">Our Services</h2>
      <div className="row">
        {services.map((service) => (
          <SingleService key={service.id} props={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
