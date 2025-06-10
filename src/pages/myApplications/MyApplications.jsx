import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";
import useApplicationApi from "../../api/useApplicationApi";

const MyApplications = () => {
  const { user } = useAuth();
  // console.log(user)
  const { myApplicationsPromise } = useApplicationApi();
  // console.log("firebase token", user.accessToken);

  return (
    <div>
      <ApplicationStats />
      <Suspense fallback={"Loading your Applications..."}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(
            user.email,
            user.accessToken
          )}
        />
      </Suspense>
    </div>
  );
};

export default MyApplications;
