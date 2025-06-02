import React from "react";

const AddJob = () => {
  return (
    <div>
      <h2>Please add a job</h2>
      <form action="">
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

          <button className="btn btn-neutral mt-4">Login</button>
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
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
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

          <input type="date" className="input" />
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
                name="salaryMin"
                placeholder="Minimum Salary"
              />
            </div>

            <div className="">
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                className="input"
                placeholder="Maximum Salary"
                name="salaryMax"
              />
            </div>

            <div className="">
              <label className="label">Currency</label>
              <select defaultValue="Select a Currency" className="select">
                <option disabled={true}>Job Category</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/*  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Salary Range</legend>
        </fieldset>

        {/*  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>
        </fieldset>

        {/*  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
