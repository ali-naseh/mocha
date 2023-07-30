import React from "react";
import WebSession from "./web_session";
import MobileSession from "./mobile_session";

function Session() {
  return (
    <>
      <div className="mainsession-wrap">
        <h2>web sessions</h2>
        <hr />
        <h4 className="mainsession-info">
          This is a list of devices that have logged into your account. Revoke
          any sessions that you do not recognize.
        </h4>
        <WebSession ip="iran 5.216.233.155" date="16 June ,2023" current="1" />
        <WebSession ip="iran 5.216.233.155" date="16 June ,2023" current="1" />

        <div>
          <h2>Mobile sessions</h2>
          <hr />
          <MobileSession
            ip="iran 5.216.233.155"
            date="16 June ,2023"
            current="1"
          />
          <MobileSession
            ip="iran 5.216.233.155"
            date="16 June ,2023"
            current="1"
          />
        </div>
      </div>
    </>
  );
}

export default Session;
