import React, { useEffect } from "react";
import "./SocialLogin.css";
import google from "../../../Assets/photos/logo/google-logo.png";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, , error] = useSignInWithGoogle(auth);
  const [alreadyUser] = useAuthState(auth);

  // show erro to user
  const notifyError = (data) => toast.error(data);

  // error by user
  if (error) {
    notifyError(error.message);
  }
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  const googleSign = () => {
    if (!alreadyUser) {
      signInWithGoogle();
    } else {
      notifyError("Already Loged in");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center py-3 mb-3">
      <div className="d-flex justify-content-center align-items-center mb-3">
        <div className="social-bar"></div>
        <p className="mb-0 mx-3">or</p>
        <div className="social-bar"></div>
      </div>
      <div>
        <button
          className="py-2 px-5 border-0 bg-white rounded-3 fw-bold shadow-sm"
          onClick={googleSign}
        >
          <img className="google-login" src={google} alt="" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
