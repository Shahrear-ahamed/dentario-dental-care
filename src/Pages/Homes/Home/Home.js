import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import Banner from "../Banner/Banner";
import Consultation from "../Consultation/Consultation";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  const [, loading] = useAuthState(auth);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://shahrear-ahamed.github.io/fetch-api/dentario-dental-care.json"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="div-size">
      <Banner />
      <Services services={services} />
      <Consultation />
    </section>
  );
};

export default Home;
