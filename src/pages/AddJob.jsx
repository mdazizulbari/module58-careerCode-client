import React from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    // process salary range data
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };
    // process requirements
    const requirementsString = newJob.requirements;
    const requirementsDirty = requirementsString.split(",");
    const requirementsClean = requirementsDirty.map((req) => req.trim());
    newJob.requirements = requirementsClean;
    // process responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((req) => req.trim());

    newJob.status = "active";
    console.log(newJob);
    // save job to db
    axios
      .post("https://module58-career-code-server.vercel.app/jobs/", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "This new Job has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Please add a job</h2>
      <form action="" onSubmit={handleAddAJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            className="input"
            placeholder="Job Title"
            name="title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            className="input"
            placeholder="Company Name"
            name="company"
          />

          <label className="label">Location</label>
          <input
            type="text"
            className="input"
            placeholder="Company Location"
            name="location"
          />

          <label className="label">Company Logo</label>
          <input
            type="text"
            className="input"
            placeholder="Company Logo URL"
            name="company_logo"
          />
        </fieldset>

        {/* job type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Type</legend>

          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="On-Site"
              value={"On-Site"}
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
              value={"Remote"}
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
              value={"Hybrid"}
            />
          </div>
        </fieldset>

        {/* job category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Category</legend>

          <select defaultValue="Job Category" className="select">
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* application deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>

          <input type="date" className="input" name="deadline" />
        </fieldset>

        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="">
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                className="input"
                name="min"
                placeholder="Minimum Salary"
              />
            </div>

            <div className="">
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                className="input"
                placeholder="Maximum Salary"
                name="max"
              />
            </div>

            <div className="">
              <label className="label">Currency</label>
              <select
                defaultValue="Select a Currency"
                name="currency"
                className="select"
              >
                <option disabled={true}>Job Category</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Description</legend>

          <textarea
            className="textarea"
            placeholder="Job Description"
            name="description"
          ></textarea>
        </fieldset>

        {/* Job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>

          <textarea
            className="textarea"
            placeholder="Requirements (saparated by comma)"
            name="requirements"
          ></textarea>
        </fieldset>

        {/* Job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>

          <textarea
            className="textarea"
            placeholder="Responsibilities (saparated by comma)"
            name="responsibilities"
          ></textarea>
        </fieldset>

        {/* HR Details */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">HR Details</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            className="input"
            placeholder="HR Name"
            name="hr_name"
          />

          <label className="label">Company</label>
          <input
            type="email"
            className="input"
            placeholder="HR Email"
            name="hr_email"
            defaultValue={user.email}
          />
        </fieldset>

        <input type="submit" value="Add Job" className="btn" />
      </form>
    </div>
  );
};

export default AddJob;
