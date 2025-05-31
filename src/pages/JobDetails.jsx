import React from "react";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const { title, _id, company } = useLoaderData();

  return (
    <div>
      <h2 className="text-4xl">{title}</h2>
      <p>Company: {company}</p>

      <Link to={`/jobApply/${_id}`} className="btn btn-primary">
        Apply Now
      </Link>
    </div>
  );
};

export default JobDetails;
