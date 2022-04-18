import React from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";

const ForgetPassword = () => {
  const navigate = useNavigate()
  const [sendPasswordResetEmail, , error] = useSendPasswordResetEmail(auth);
  const [user] = useAuthState(auth);
  // toast send from here
  const toastSucess = (data) => toast.success(data);
  const toastError = (data) => toast.error(data);

  // forget password form
  const handleForgetPassword = (e) => {
    e.preventDefault();

    // get email
    const email = e.target.email.value;

    if (!email) {
      return toastError("Input field are empty");
    }

    // user loged in or not
    if (user) {
      toastSucess("Hola are using your account");
      return;
    } else {
      sendPasswordResetEmail(email);
    }

    // find error and show user
    if (error) {
      toastError("User not found with this email");
    } else {
      toastSucess("Please check your inbox or spam");
    }
  };
  return (
    <section className="container min-height my-3">
      <h2 className="text-center">Forget Password?</h2>
      <div className="bar"></div>
      <Form
        autoComplete="off"
        onSubmit={handleForgetPassword}
        style={{ maxWidth: "450px" }}
        className="mt-5 px-4 px-sm-0 mx-auto"
      >
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control name="email" type="email" placeholder="Email" />
        </Form.Group>
        <div className="d-flex justify-content-center">
          {" "}
          <Button variant="primary" type="submit">
            Update Password
          </Button>
          <button
            onClick={() => navigate("/login")}
            className="btn btn-primary ms-3"
          >
            Login Page
          </button>
        </div>
      </Form>
      <ToastContainer />
    </section>
  );
};

export default ForgetPassword;
