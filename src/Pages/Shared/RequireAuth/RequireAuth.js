import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  // check user have logain on not
  if (loading) {
    return <Loading />;
  }

  // return login page are here if login or not
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // return main page where he came
  return children;
};

export default RequireAuth;
