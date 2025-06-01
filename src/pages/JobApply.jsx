import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../hooks/useAuth";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  console.log(jobId, user);

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    // console.log(linkedIn, github, resume);
    const application = {
      jobId, applicant: user.email,
  };

  return (
    <div>
      <h2 className="text-4xl">
        Apply for this <Link to={`/jobs/${jobId}`}>Job</Link>
      </h2>
      <form onSubmit={handleApply} action="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            className="input"
            name="linkedIn"
            placeholder="LinkedIn Profile Link"
          />

          <label className="label">GitHub Link</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="GitHub Link"
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Resume Link"
          />

          <input type="submit" value="Apply" className="btn" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
