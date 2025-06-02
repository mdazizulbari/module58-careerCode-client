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
      </form>
    </div>
  );
};

export default AddJob;
