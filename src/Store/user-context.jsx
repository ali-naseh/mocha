import React, { useEffect } from "react";
import { createContext, useState } from "react";


const UserContext = createContext({
  user: {},
  token: "",
});

const initialValue = () => {
  const currUser = localStorage.getItem("user");
  return currUser ? JSON.parse(currUser) : {};
};

export function UserContextProvider(props) {
  const [user, setuser] = useState(initialValue);
  const [token, settoken] = useState("");

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const context = {
    user: user,
    token: token,
    settoken: settoken,
    setuser: setuser,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
