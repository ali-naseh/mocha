import React from "react";
import { Row, Col } from "antd";

import gif from "../../Assets/images/puzzle.mp4";

const Landing3 = () => {
  return (
    <>
      <div className="landing2-wrap">
        <Row style={{ display: "flex", justifyContent: "space-around" }}>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
            <div className="landing2-desc">
              <strong className="landing2-strong">
                Deploy instantly, bring projects to life quickly
              </strong>
              <p className="landing2-par">
                Deploy effortlessly, no configuration needed. Share creations
                with custom domains.
              </p>
              <br></br>
              <p className="landing2-link">learn more about Deployments</p>
            </div>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
            <video autoPlay loop muted className="landing-gif">
              <source src={gif} type="video/mp4" />
            </video>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Landing3;
