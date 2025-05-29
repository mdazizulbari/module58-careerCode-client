import React, { use } from "react";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);
  return <div>{jobs.tength}</div>;
};

export default HotJobs;
