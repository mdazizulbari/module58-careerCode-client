import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";

const myApplicationsPromise = (email) => {
  return fetch(`http://localhost:5000/applications?email=${email}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

const MyApplications = () => {
  const { user } = useAuth;

  return (
    <div>
      <ApplicationStats />
      <Suspense fallback={"Loading your Applications..."}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        />
      </Suspense>
    </div>
  );
};

export default MyApplications;
