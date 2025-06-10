import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useJobApi = () => {
  const axiosSecure = useAxiosSecure();

  const jobsCreatedByPromise = (email) => {
    return axiosSecure
      .get(`jobs/applications?email=${email}`)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
  };

  return { jobsCreatedByPromise };
};

export default useJobApi;
