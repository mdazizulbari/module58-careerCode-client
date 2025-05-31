import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/JobApply";

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
      {
        path: "jobApply/:id",
        loader: ({ params }) => fetch(`https://localhost:5000/jobs/${params}`),
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
        // 4min51s
      },
      { path: "register", Component: Register },
      { path: "signIn", Component: SignIn },
    ],
  },
]);

export default router;
