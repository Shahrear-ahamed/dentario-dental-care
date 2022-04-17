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
  return (
    <section className="container min-height my-3 d-flex flex-column align-items-center">
      <h2>Login</h2>
      <Form
        autoComplete="off"
        onSubmit={handleLoginAccount}
        className="mt-4 px-4 w-auto px-sm-0"
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
              className="my-3 text-black text-decoration-none d-block"
              to="/forget-password"
            >
              Forget Password?{" "}
            </Link>
          </small>
        </p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="text-center">
        <small>
          <Link
            className="my-3 text-black text-decoration-none d-block"
            to="/register"
          >
            New to Dentario?{" "}
          </Link>
        </small>
      </p>
      <ToastContainer />
    </section>
  );
};

export default Login;
