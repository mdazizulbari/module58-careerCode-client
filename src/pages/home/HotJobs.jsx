import React, { use } from "react";

const HotJobs = ({jobsPromise}) => {
const jobs=use(jobsPromise)
  return <div>{jobs.teng}</div>;
};

export default HotJobs;
