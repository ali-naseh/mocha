import React from "react";
import { Row, Col } from "antd";

const Plans = (props) => {
  return (
    <Row
      gutter={{ xl: 300 }}
      style={{ width: "100%", marginLeft: 0, marginRight: 0 }}
    >
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 8 }}
        style={{ paddingLeft: 0, paddingRight: 0, ...props.style }}
      >
        {" "}
        <div id="first-plan">
          <h2>Basic</h2>
          <div>
            {" "}
            <p>Suitable for individual developers and hobby projects</p>
          </div>
          <ul>
            <li>Cloud-based programming environment </li>
            <li>Basic code editor with syntax highlighting </li>
            <li>Version control for 2 projects </li>
            <li>Limited 10GB storage capacity </li>
          </ul>
          <div className="plans-price">
            <p>$9.99/Month</p>
            <button type="submit">Start Plan</button>
          </div>
        </div>
      </Col>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 8 }}
        style={{ paddingLeft: 0, paddingRight: 0, ...props.style }}
      >
        <div id="second-plan">
          <h2>Pro</h2>
          <div>
            {" "}
            <p>Ideal for small teams and professional developers</p>
          </div>
          <ul>
            <li>All the Basic plan features</li>
            <li>
              Advanced code editor with auto-completion and debugging tools
            </li>
            <li>up to 15 projects</li>
            <li>Increased storage capacity (50GB)</li>
            <li>Collaboration tools for team projects</li>
          </ul>
          <div className="plans-price">
            <p>$19.99/Month</p>
            <button type="submit">Start Plan</button>
          </div>
        </div>
      </Col>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 8 }}
        style={{ paddingLeft: 0, paddingRight: 0, ...props.style }}
      >
        <div id="third-plan">
          <h2>Enterprise</h2>
          <div>
            <p>large-scale development teams and organizations</p>
          </div>
          <ul>
            <li>All the Pro plan features </li>
            <li>
              {" "}
              Enterprise-grade code editor with advanced debugging and profiling
              tools
            </li>
            <li>multiple projects (Unlimited) </li>
            <li>Scalable storage capacity (customizable)</li>
            <li>Customizable security </li>
            <li>Options Enterprise-level analytics and reporting</li>
          </ul>
          <div className="plans-price">
            <p>$99.99/Month</p>
            <button type="submit">Start Plan</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Plans;
