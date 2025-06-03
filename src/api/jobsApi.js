export const jobsCreatedByPromise = (email) => {
  return fetch(`http://localhost:5000/jobs?email=${email}`)
  // return fetch(`http://localhost:5000/jobsByEmailAddress?email=${email}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};
