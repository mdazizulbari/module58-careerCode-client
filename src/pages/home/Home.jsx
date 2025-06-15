import React, { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const jobsPromise = fetch("https://module58-career-code-server.vercel.app/jobs")
  .then((res) => res.json())
  .catch((err) => console.log(err));

const Home = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={"loading hot jobs"}>
        <HotJobs jobsPromise={jobsPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
