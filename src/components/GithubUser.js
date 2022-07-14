import { useEffect, useState } from "react";
import Repositories from "./Repositories";

const GithubUser = ({ user, setUser }) => {
  const [repos, setRepos] = useState(null);
  const [loadingRepos, setLoadingRepos] = useState(false);

  useEffect(() => {
    if (user) {
      setLoadingRepos(true);
      fetch(`https://api.github.com/users/${user.login}/repos`)
        .then((res) => res.json())
        .then((data) => {
          setLoadingRepos(false);
          setRepos(data);
        });
    }
  }, [user]);

  return (
    <div className="user-details">
      <button onClick={() => setUser(null)}>Clear</button>
      <h3>User account: {user.login}</h3>
      <h3>User name: {user.name ? user.name : "-"}</h3>
      <img
        src={user.avatar_url}
        alt={`${user.name} avatar`}
        width="80px"
        height="80px"
      />
      <h3>Location: {user.location ? user.location : "-"}</h3>
      <h3>Bio: {user.bio ? user.bio : "-"}</h3>

      {loadingRepos && <p>Loading repositories</p>}
      {repos && <Repositories repos={repos} />}
    </div>
  );
};

export default GithubUser;
