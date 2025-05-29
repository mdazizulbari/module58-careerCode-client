import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(email, password);
  };

  const authInfo = {loading,createUser};

  return <AuthContext>{children}</AuthContext>;
};

export default AuthProvider;
