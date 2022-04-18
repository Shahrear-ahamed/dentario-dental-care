import React from "react";
import SingleService from "../SingleService/SingleService";

const Services = ({ services }) => {
  return (
    <section id="services" className="container my-4">
      <h2 className="text-center mb-3">My Services</h2>
      <div className="row my-3 g-3">
        {services.map((service) => (
          <SingleService key={service.id} props={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
