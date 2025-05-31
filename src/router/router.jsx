import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "jobs/:id",
        loader: ({ params }) => fetch(`https://localhost:5000/jobs/${params}`),
        Component: JobDetails,
      },
      { path: "register", Component: Register },
      { path: "signIn", Component: SignIn },
    ],
  },
]);

export default router;
