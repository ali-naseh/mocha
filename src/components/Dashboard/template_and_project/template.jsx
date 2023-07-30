import React from "react";
import { Row, Col } from "antd";

import Python from "../../../Assets/images/Python.svg";
import Java from "../../../Assets/images/java.svg";
import Javascript from "../../../Assets/images/javascript.svg";

const Languages = [
  {
    src: Python,
    name: "python",
    info: "Empowering Code with Simplicity",
    view: "12.3k",
  },
  {
    src: Java,
    name: "Java",
    info: "Unleash the Potential of Platform Independence.",
    view: "12.3k",
  },
  {
    src: Javascript,
    name: "Javascript",
    info: "Empowering Code with Simplicity",
    view: "33.3k",
  },
];

function Template(props) {
  return (
    <>
      <div className="temp-mainwrap">
        <Row
          gutter={{ xl: 100, xs: 200 }}
          style={{ marginRight: 0, marginLeft: 0, width: "100%" }}
        >
          {Languages.map((Language) => (
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 8 }}
              key={Language.name}
            >
              <div
                className="temp-wrap"
                onClick={() => props.onClick(Language.name)}
              >
                <div>
                  <img src={Language.src} alt="" />
                </div>
                <div>
                  <strong className="temp-strong">{Language.name}</strong>
                  <p>{Language.info}</p>
                  <div className="temp-info">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>
                    <p>{Language.view}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Template;
