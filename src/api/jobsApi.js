export const jobsCreatedByPromise = (email, accessToken) => {
  return (
    fetch(
      `https://module58-career-code-server.vercel.app/jobs/applications?email=${email}`,
      {
        credentials: "include",
        headers: { authorization: `Bearer ${accessToken}` },
      }
    )
      // return fetch(`https://module58-career-code-server.vercel.app/jobsByEmailAddress?email=${email}`)
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      })
  );
};
