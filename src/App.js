import { useState } from "react";
import UserForm from "./components/UserForm";
import GithubUser from "./components/GithubUser";



function App() {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);

  return (
    <>
      <h1>Github User Finder</h1>
      <UserForm
        setUser={setUser}
        setLoadingUser={setLoadingUser}
        setUserNotFound={setUserNotFound}
      />

      {user && <GithubUser user={user} setUser={setUser} />}

      {loadingUser && <p>Loading User</p>}
      {userNotFound && <p>User Not Found</p>}
    </>
  );
}

export default App;
