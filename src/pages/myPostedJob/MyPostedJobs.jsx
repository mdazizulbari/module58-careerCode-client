import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import JobList from "./JobList";
import { jobsCreatedByPromise } from "../../api/jobsApi";

const MyPostedJobs = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>My Posted Jobs</h2>
      <Suspense fallback={"Loading..."}>
        <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
