import { useState } from "react";

const UserForm = ({ setUser, setLoadingUser, setUserNotFound }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingUser(true);
    setInputValue("");

    fetch(`https://api.github.com/users/${inputValue}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Not Found") {
          setUserNotFound(true);
          setTimeout(() => {
            setUserNotFound(false);
          }, 3000);
        } else if (data) {
          setUser(data);
        }
        setLoadingUser(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingUser(false);
      });
  };

  return (
    <form>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Search user</button>
    </form>
  );
};

export default UserForm;