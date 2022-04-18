import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import Banner from "../Banner/Banner";
import Consultation from "../Consultation/Consultation";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  const [, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="div-size">
      <Banner />
      <Services />
      <Consultation />
    </section>
  );
};

export default Home;
