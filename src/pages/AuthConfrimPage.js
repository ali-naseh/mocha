import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AuthConfirm from "../components/Auth/AuthConfirmation";

const AuthConfirmationPage = () => {
  const login = localStorage.getItem("islogin");
  const navigate = useNavigate();
  useEffect(() => {
    if (login) {
      return navigate("/dashboard");
    }
  }, [login, navigate]);
  return <AuthConfirm />;
};

export default AuthConfirmationPage;
