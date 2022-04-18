import React from "react";
import { Form, Button } from "react-bootstrap";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, , , error] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const notifyError = (data) => toast.error(data);

  // login system
  const handleLoginAccount = (e) => {
    // page load prevent
    e.preventDefault();

    // get value from input field
    const email = e.target.email.value;
    const password = e.target.password.value;

    // check is user login or not
    if (!user) {
      signInWithEmailAndPassword(email, password);

      // if user input wrong data or fail to login
      if (error) {
        notifyError(error.message);
      } else {
        navigate("/");
      }
    } else {
      notifyError("You are already log in 🤦‍♂️");
      return;
    }
  };
  console.log(error);
  return (
    <section className="container min-height my-3">
      <h2 className="text-center">Login</h2>
      <div className="bar"></div>
      <Form
        autoComplete="off"
        onSubmit={handleLoginAccount}
        style={{ maxWidth: "450px" }}
        className="mt-5 px-4 px-sm-0 mx-auto"
      >
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control name="email" type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <p>
          <small>
            <Link
              className="my-3 text-primary text-decoration-none d-block"
              to="/forget-password"
            >
              Forget Password ?{" "}
            </Link>
          </small>
        </p>{" "}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p className="text-center">
        <small>
          <Link
            className="my-3 text-primary  text-decoration-none d-block"
            to="/register"
          >
            Don't have an account?{" "}
          </Link>
        </small>
      </p>
      <ToastContainer />
    </section>
  );
};

export default Login;
