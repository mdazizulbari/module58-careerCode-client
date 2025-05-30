import React, { use } from "react";
import JobCard from "../shared/JobCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);
  console.log(jobsPromise);

  return (
    <div>
      <h2 className="text-center text-4xl">Hot Jobs of the day</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
