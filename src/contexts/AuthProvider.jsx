import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPasswor(email, password);
  };

  const authInfo = { loading, createUser };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
