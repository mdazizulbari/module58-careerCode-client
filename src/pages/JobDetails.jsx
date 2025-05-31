import React from "react";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const { title, company } = useLoaderData();

  return (
    <div>
      <h2 className="text-4xl">{title}</h2>
      <p>Company: {company}</p>

      <Link to={`/jobs/${_id}`} className="btn btn-primary">
        Show Details
      </Link>
    </div>
  );
};

export default JobDetails;
