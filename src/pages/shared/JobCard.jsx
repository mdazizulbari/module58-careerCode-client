import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    company_logo,
    requirements,
    title,
    location,
    description,
    company,
    _id,
    salaryRange,
  } = job;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex gap-2">
        <figure>
          <img src={company_logo} className="w-16" alt="Shoes" />
        </figure>
        <div className="">
          <h3 className="text-3xl">{company}</h3>
          <p className="flex items-center gap-1">
            <FaMapMarkerAlt />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`} className="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
