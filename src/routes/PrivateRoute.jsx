import React from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);

  if (!user) {
    <Navigate to={`/`} />;
  }

  return children;
};

export default PrivateRoute;
