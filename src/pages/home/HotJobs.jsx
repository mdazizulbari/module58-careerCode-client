import React from "react";

const HotJobs = () => {
  const jobsPromise = fetch("http://localhost:5000/jobs")
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return <div></div>;
};

export default HotJobs;
