import React from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const jobsPromise = fetch("http://localhost:5000/jobs")
  .then((res) => res.json())
  .catch((err) => console.log(err));

const Home = () => {
  return (
    <div>
      <Banner />
      <HotJobs jobsPromise={jobsPromise} />
    </div>
  );
};

export default Home;
