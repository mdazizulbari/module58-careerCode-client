import React from "react";

const HotJobs = () => {
  const jobsPromise = fetch("http://localhost:5000/jobs") 
  .then((res) =>
    res.json()
  );
  <div className="cathc"></div>

  return <div></div>;
};

export default HotJobs;
