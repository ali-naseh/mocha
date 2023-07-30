import React from "react";
import { Row, Col } from "antd";

import gif from "../../Assets/images/landinggif3.mp4";

const Landing4 = () => {
  return (
    <>
      <div className="landing2-wrap">
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
            <video autoPlay loop muted className="landing-gif">
              <source src={gif} type="video/mp4" />
            </video>
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
            <div className="landing2-desc">
              <strong className="landing2-strong">
                Build fast , no setup needed
              </strong>
              <p className="landing2-par">
                Build projects quickly without the need for any setup or
                configuration.
              </p>
              <br></br>
              <p className="landing2-link">learn more about workspaces</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Landing4;
