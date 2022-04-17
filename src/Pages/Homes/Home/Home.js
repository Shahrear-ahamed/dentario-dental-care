import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Consultation from "../Consultation/Consultation";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://shahrear-ahamed.github.io/fetch-api/dentario-dental-care.json"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section>
      <Banner />
      <Services services={services} />
      <Consultation />
    </section>
  );
};

export default Home;
