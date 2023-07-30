import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Divider, Typography, Spin } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import Slider from "./Carousel/Slider";

import profile from "../../Assets/images/profilesetting.png";
import firstImg from "../../Assets/images/slide1.png";
import seccondImg from "../../Assets/images/slide2.png";
import thirdImg from "../../Assets/images/slide3.png";
import forthImg from "../../Assets/images/slide4.png";
import icon from "../../Assets/images/login logo - mocha cloud.svg";

const images = [
  {
    src: firstImg,
  },
  {
    src: seccondImg,
  },
  {
    src: thirdImg,
  },
  {
    src: forthImg,
  },
];

const Auth = () => {
  const [validateStatus, setValidateStatus] = useState("success");
  const [loading, setLoading] = useState(false);
  const [emailRef, setEmailRef] = useState("");
  const navigate = useNavigate();

  // api call to check if user with this email already exist (also valdiate input to be email and nut null)
  const onButtonClick = (e) => {
    const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    e.preventDefault();
    setLoading(true);
    if (emailRef !== "" && emailRef.match(isValidEmail)) {
      axios({
        method: "post",
        url: "https://api.mochacloud.ir/accounts/HasAccount/",
        data: {
          data: emailRef,
        },
      })
        .then((res) => {
          localStorage.setItem("email", emailRef);
          localStorage.setItem("profile", profile);
          if (res.data.exists === true) {
            navigate("/auth-confirm");
          } else {
            navigate("/sign-up");
          }
          setLoading(false);
        })
        .catch((err) => {
          if (err.code === "ERR_NETWORK") {
            navigate("/err-network");
          }
          console.log(err);
          setLoading(false);
        });
    } else {
      setValidateStatus("error");
      setLoading(false);
    }
  };

  const emailChangeHandler = (e) => {
    setEmailRef(e.target.value);
    if (e.target.value !== "") {
      setValidateStatus("success");
    }
  };

  return (
    <div className="auth-container">
      <Row gutter={{ xl: 100, xs: 200 }}>
        <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 10 }}>
          <div className="auth-carousel">
            <Slider images={images} />
          </div>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 14 }}>
          <div className="auth-forms">
            <div className="auth-logo">
              {" "}
              <img src={icon} alt="" />
            </div>
            <Form className="auth-inputs">
              <Typography.Title className="auth-input-title">
                Welcome :)
              </Typography.Title>
              <Typography.Paragraph className="auth-input-p">
                Please enter your email
              </Typography.Paragraph>
              <Form.Item
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter email",
                  },
                ]}
                validateStatus={validateStatus}
                help="Please Enter Email First"
                name={"emial"}
                className="auth-form-item"
                style={{ width: "70%" }}
              >
                <Input
                  className="auth-email-code"
                  placeholder="Enter your email"
                  value={emailRef}
                  onChange={emailChangeHandler}
                />
              </Form.Item>
              <Button
                className="auth-submit"
                type="primary"
                htmlType="submit"
                onClick={onButtonClick}
                style={{ width: "70%", backgroundColor: "#2C92F8" }}
              >
                <Spin
                  spinning={loading}
                  indicator={
                    <LoadingOutlined
                      style={{
                        fontSize: 28,
                        color: "#fff",
                      }}
                      spin
                    />
                  }
                />
                {!loading && "Continue"}
              </Button>
              <Divider
                style={{ borderColor: "#C1C1C1", width: "70%" }}
                className="auth-divider"
              >
                Or Login With
              </Divider>
              <Button className="google-login" style={{ width: "70%" }}>
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.794 19.2462H40.2502V19.1666H23.0002V26.8333H33.8322C32.2519 31.2963 28.0055 34.5 23.0002 34.5C16.6493 34.5 11.5002 29.3509 11.5002 23C11.5002 16.6491 16.6493 11.5 23.0002 11.5C25.9317 11.5 28.5987 12.6059 30.6295 14.4124L36.0507 8.99106C32.6276 5.80077 28.0487 3.83331 23.0002 3.83331C12.4154 3.83331 3.8335 12.4152 3.8335 23C3.8335 33.5848 12.4154 42.1666 23.0002 42.1666C33.585 42.1666 42.1668 33.5848 42.1668 23C42.1668 21.7149 42.0346 20.4604 41.794 19.2462Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M6.04346 14.0789L12.3407 18.6971C14.0446 14.4785 18.1712 11.5 23.0002 11.5C25.9317 11.5 28.5988 12.6059 30.6295 14.4124L36.0508 8.99106C32.6276 5.80077 28.0487 3.83331 23.0002 3.83331C15.6383 3.83331 9.25387 7.9896 6.04346 14.0789Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M23.0001 42.1667C27.9509 42.1667 32.4493 40.272 35.8504 37.191L29.9183 32.1712C27.9294 33.6839 25.499 34.502 23.0001 34.5C18.0149 34.5 13.7819 31.3212 12.1873 26.8851L5.93701 31.7007C9.1091 37.9078 15.551 42.1667 23.0001 42.1667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M41.7939 19.2462H40.25V19.1667H23V26.8334H33.832C33.0761 28.9574 31.7145 30.8135 29.9153 32.1722L29.9182 32.1703L35.8503 37.1901C35.4305 37.5715 42.1667 32.5834 42.1667 23C42.1667 21.7149 42.0344 20.4604 41.7939 19.2462Z"
                    fill="#1976D2"
                  />
                </svg>{" "}
                Continue With Google
              </Button>
            </Form>
            <div className="auth-footer">
              <ul>
                <li>Terms Of Us</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Auth;
