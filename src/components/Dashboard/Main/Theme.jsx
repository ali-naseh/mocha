import React from "react";
import { Col, Row } from "antd";

import theme3 from "../../../Assets/images/Rectangle 44.png";
import theme1 from "../../../Assets/images/Rectangle 44 (2).png";
import theme2 from "../../../Assets/images/Rectangle 44 (1).png";

const Theme = () => {
  return (
    <Row
      gutter={{ xl: 300 }}
      style={{ width: "100%", height: "70vh", marginLeft: 0 }}
      className="theme-wrap"
    >
      <div style={{ width: "100%" }}>
        <h2
          style={{
            color: "#FFF",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            textTransform: "capitalize",
            marginBottom: "15px",
            fontFamily: "InterMedium",
          }}
          className="theme-h2"
        >
          Choose Theme
        </h2>
        <p
          style={{
            color: "rgba(255, 255, 255, 0.60)",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            textTransform: "capitalize",
            fontFamily: "InterMedium",
          }}
          className="theme-p"
        >
          customizing your workspace , make it more enjoyable and comfortable to
          work !
        </p>
      </div>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 12 }}
        md={{ span: 8 }}
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div className="theme">
          <div className="theme-img">
            <img src={theme1} alt="" />
          </div>
          <div className="theme-name">
            <p>Dark Theme</p>
          </div>
        </div>
      </Col>
      <Col
        xs={{ span: 12 }}
        sm={{ span: 12 }}
        md={{ span: 8 }}
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div className="theme">
          <div className="theme-img">
            <img src={theme2} alt="" />
          </div>
          <div className="theme-name">
            <p>light Theme</p>
          </div>
        </div>
      </Col>
      <Col
        xs={{ span: 12 }}
        sm={{ span: 12 }}
        md={{ span: 8 }}
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div className="theme">
          {" "}
          <div className="theme-img">
            <img src={theme3} alt="" />
          </div>
          <div className="theme-name">
            <p>Dark Blue Theme</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Theme;
