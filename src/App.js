import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthConfirmationPage from "./pages/AuthConfrimPage";
import ProtectedRouts from "./pages/ProtectedRouts";
import DashboardPage from "./pages/DashboardPage";
import Errornetwork from "./pages/Networkerror";
import DiscordPage from "./pages/discord";
import LandingPlans from "./pages/Plans";
import AuthPage from "./pages/AuthPage";
import AboutUs from "./pages/About_us";
import SignUpForm from "./pages/SignUp";
import Error500 from "./pages/500eror";
import Lannding from "./pages/landing";
import NoPage from "./pages/NoPage";

import "./Assets/Styles/App.less";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Lannding />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/plans" element={<LandingPlans />} />
      <Route path="/discord-page" element={<DiscordPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route
        path="/error"
        element={
          <ProtectedRouts>
            <Error500 />
          </ProtectedRouts>
        }
      />
      <Route
        path="/err-network"
        element={
          <ProtectedRouts>
            <Errornetwork />
          </ProtectedRouts>
        }
      />

      <Route
        path="/auth-confirm"
        element={
          <ProtectedRouts>
            <AuthConfirmationPage />
          </ProtectedRouts>
        }
      />
      <Route
        path="/sign-up"
        element={
          <ProtectedRouts>
            <SignUpForm />
          </ProtectedRouts>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRouts>
            <DashboardPage />
          </ProtectedRouts>
        }
      />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
