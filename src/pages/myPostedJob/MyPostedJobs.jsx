import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import JobList from "./JobList";
import useJobApi from "../../api/useJobApi";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const { jobsCreatedByPromise } = useJobApi();

  return (
    <div>
      <h2>My Posted Jobs</h2>
      <Suspense fallback={"Loading..."}>
        <JobList
          jobsCreatedByPromise={jobsCreatedByPromise(
            user.email,
            user.accessToken
          )}
        />
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
