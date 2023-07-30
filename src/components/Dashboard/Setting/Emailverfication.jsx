import React from "react";

function Emailverfication() {
  return (
    <>
      <div className="twofactor-wrap">
        <div>
          <div className="change-pass-title">Email verification</div>
          <div className="change-pass-text" style={{ color: "#aaabae" }}>
            verify your email address{" "}
          </div>
        </div>
        <button className="setting-btn-enable">Enable</button>
      </div>
    </>
  );
}

export default Emailverfication;
