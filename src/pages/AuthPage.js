import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Auth from "../components/Auth/Auth.jsx";

const AuthPage = () => {
  const login = localStorage.getItem("islogin");
  const navigate = useNavigate();
  useEffect(() => {
    if (login) {
      return navigate("/dashboard");
    }
  }, [login, navigate]);
  return <Auth />;
};

export default AuthPage;
