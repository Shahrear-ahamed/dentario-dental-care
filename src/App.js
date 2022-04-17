import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Homes/Home/Home";
import PageNotFound from "./Pages/Shared/PageNotFound/PageNotFound";
import Login from "./Pages/PrivetPage/Login/Login";
import Register from "./Pages/PrivetPage/Register/Register";
import ForgetPassword from "./Pages/PrivetPage/ForgetPassword/ForgetPassword";
import Blog from "./Pages/Blog/Blog";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
