import React from "react";
import Changepass from "./Changepass";
import Emailverfication from "./Emailverfication";
import Twofactor from "./twofactor";

function PrivacyAndSecurity() {
  return (
    <>
      <div className="privacyandsecurity-wrap">
        <div>
          <strong style={{ fontSize: "26px" }}>Security</strong>
          <Twofactor />
          <Emailverfication />
        </div>
        <div>
          <strong style={{ fontSize: "26px" }}>Change Password</strong>
          <Changepass />
        </div>
      </div>
    </>
  );
}

export default PrivacyAndSecurity;
