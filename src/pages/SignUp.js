import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SignUp from "../components/Auth/SignUpForm";

const SignUpForm = () => {
  const login = localStorage.getItem("islogin");
  const navigate = useNavigate();

  useEffect(() => {
    if (login) {
      return navigate("/dashboard");
    }
  }, [login, navigate]);

  return <SignUp />;
};

export default SignUpForm;
