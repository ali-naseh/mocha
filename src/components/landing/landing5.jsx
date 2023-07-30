import React from "react";
import { Row, Col } from "antd";

import gif from "../../Assets/images/landinggif4.mp4";

const Landing5 = () => {
  return (
    <>
      <div className="landing2-wrap">
        <Row style={{ display: "flex", justifyContent: "space-around" }}>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
            <div className="landing2-desc">
              <strong className="landing2-strong">Learn as you build</strong>
              <p className="landing2-par">
                Follow step-by-step tutorials to create your dream project,
                whatever it may be.
              </p>
              <br></br>
              <p className="landing2-link">learn more about Tutorials</p>
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

export default Landing5;
