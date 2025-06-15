export const myApplicationsPromise = (email, accessToken) => {
  return fetch(
    `https://module58-career-code-server.vercel.app/applications?email=${email}`,
    {
      credentials: "include",
      headers: { authorization: `Bearer ${accessToken}` },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
