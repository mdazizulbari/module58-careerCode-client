import React, { use } from "react";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);

  return (
    <div>
      <h3>Jobs Applied so far: {applications.length}</h3>
    </div>
  );
};

export default ApplicationList;
