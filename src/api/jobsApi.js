export const jobsCreatedByPromise = (email, accessToken) => {

  return (
    fetch(`http://localhost:5000/jobs/applications?email=${email}`, {
      credentials: "include",
      headers: { authorization: `Bearer ${accessToken}` },
    })
      // return fetch(`http://localhost:5000/jobsByEmailAddress?email=${email}`)
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      })
  );
};
