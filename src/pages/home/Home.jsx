import React from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = () => {
  const jobsPromise = fetch("http://localhost:5000/jobs")
    .then((res) => res.json())
    .catch((err) => console.log(err));
    
  return (
    <div>
      <Banner />
      <HotJobs />
    </div>
  );
};

export default Home;
