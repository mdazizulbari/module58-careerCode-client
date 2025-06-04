import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // if (currentUser?.email) {
      //   const userData = { email: currentUser.email };
      //   axios
      //     .post(`http://localhost:5000/jwt`, userData, {
      //       withCredentials: true,
      //     })
      //     .then((res) => {
      //       console.log("token after jwt", res.data);
      //       // const token = res.data.token;
      //       // localStorage.setItem("token", token);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // }
      if (currentUser?.email) {
        axios
          .post(
            "http://localhost:5000/jwt",
            { email: currentUser.email },
            { withCredentials: true }
          )
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      }
      console.log("user in the auth state change", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
