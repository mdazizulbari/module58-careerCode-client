import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/JobApply";
import MyApplications from "../pages/myApplications/MyApplications";
import AddJob from "../pages/AddJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "jobs/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
        element: <JobDetails />,
      },
      {
        path: "jobApply/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path: "myApplications",
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/jobs/${params.id}`),
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "addJob",
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/jobs/${params.id}`),
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      { path: "register", element: <Register /> },
      { path: "signIn", element: <SignIn /> },
    ],
  },
]);

export default router;
