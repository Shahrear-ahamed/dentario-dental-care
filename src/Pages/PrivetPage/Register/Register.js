import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Register.css";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  // set state for create uesr account
  const [createUserWithEmailAndPassword, , , error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const [user] = useAuthState(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);

  // error toast
  const notifyError = (data) => toast.error(data);
  // after send data check error and or not go home
  if (error) {
    notifyError(error.message);
  }

  const handleCreateAccount = async (e) => {
    // page load prevent
    e.preventDefault();
    // get value from input field
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // check user log in or not
    if (user) {
      return notifyError("Your are log in. You can not create account");
    }

    // check both password are same or not
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      await sendEmailVerification(email);
      await navigate("/");
    } else {
      notifyError("password not match");
    }
  };

  return (
    <section className="container min-height my-3">
      <h2 className="text-center">Register</h2>
      <div className="bar"></div>
      <Form
        autoComplete="off"
        onSubmit={handleCreateAccount}
        style={{ maxWidth: "450px" }}
        className="mt-5 px-4 px-sm-0 mx-auto"
      >
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Control name="name" type="text" placeholder="Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
          <Form.Control
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onClick={() => setAgree(!agree)}
            label="Agree with Terms and condition"
          />
        </Form.Group>
        <Button disabled={agree ? false : true} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="text-center">
        <small>
          <Link
            className="my-3 text-primary text-decoration-none d-block"
            to="/login"
          >
            Already have an account?{" "}
          </Link>
        </small>
      </p>
      <ToastContainer />
    </section>
  );
};

export default Register;
