import React from "react";

function Twofactor() {
  return (
    <>
      <div className="twofactor-wrap">
        <div>
          <div className="change-pass-title">two-factor authentication</div>
          <div className="change-pass-text" style={{ color: "#aaabae" }}>
            receive code via sms or email every time you login{" "}
          </div>
        </div>
        <button className="setting-btn-disable">Disable</button>
      </div>
    </>
  );
}

export default Twofactor;
