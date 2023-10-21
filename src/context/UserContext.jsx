import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  const loginUser = (user, token) => {
    setCurrentUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("loggedIn", true);
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("loggedIn");
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, loginUser, logoutUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
