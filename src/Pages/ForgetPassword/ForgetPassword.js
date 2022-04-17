import React from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const ForgetPassword = () => {
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
    <section className="container min-height my-3 w-75 d-flex flex-column align-items-center">
      <h2>Register</h2>
      <Form
        autoComplete="off"
        onSubmit={handleForgetPassword}
        className="mt-4 px-4 px-sm-0 w-50"
      >
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control name="email" type="email" placeholder="Email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Email
        </Button>
      </Form>
      <ToastContainer />
    </section>
  );
};

export default ForgetPassword;
