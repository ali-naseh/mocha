import React, { useRef, useState, useContext } from "react";
import { Row, Col, Form, Input, Button, Typography, message, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import Slider from "./Carousel/Slider";
import axios from "axios";

import firstImg from "../../Assets/images/slide1.png";
import seccondImg from "../../Assets/images/slide2.png";
import thirdImg from "../../Assets/images/slide3.png";
import forthImg from "../../Assets/images/slide4.png";
import icon from "../../Assets/images/login logo - mocha cloud.svg";
import UserContext from "../../Store/user-context";

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

const AuthConfirm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();
  const codeRef = useRef("");

  // navigate previous page
  const onGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  // api call to login user if password is correct
  const onCheckCodeClick = (e) => {
    e.preventDefault();
    const email = localStorage.getItem("email");
    setLoading(true);

    axios({
      method: "post",
      url: "https://api.mochacloud.ir/accounts/login/",
      data: {
        username_or_email: email,
        password: codeRef.current.input.value,
      },
    })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          const newUser = {
            email: res.data.email,
            name: res.data.first_name,
            lname: res.data.last_name,
            phone: res.data.phone_number,
            username: res.data.username,
            Img: res.data.profile_photo,
            theme: "dark",
          };
          userCtx.setuser(newUser);
          userCtx.settoken(res.data.access_token);
          localStorage.setItem("token", res.data.access_token);
          localStorage.setItem("profile", res.data.profile_photo);

          navigate("/dashboard");
        } else {
          throw new Error("invalid");
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err.code === "ERR_NETWORK") {
          navigate("/err-network");
        }
        messageApi.open({
          type: "error",
          icon: (
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.332 4H18.668V18.668H13.332V4ZM13.332 28V22.668H18.668V28H13.332Z"
                fill="#FF0000"
              />
            </svg>
          ),
          content: "password is not correct",
          className: "code-message",
          duration: 4,
        });
      });
  };

  return (
    <div className="auth-container">
      {contextHolder}
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
            <Form className="auth-inputs" style={{ marginTop: "10%" }}>
              <Typography.Title className="auth-input-title">
                Enter enter password
              </Typography.Title>
              <Typography.Paragraph className="auth-input-p">
                Enter your password down below
              </Typography.Paragraph>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "enter the password",
                  },
                ]}
                name={"code"}
                className="auth-form-item"
                style={{ width: "75%" }}
              >
                <Input.Password
                  className="auth-password"
                  placeholder="Enter the password here..."
                  ref={codeRef}
                />
              </Form.Item>
              <Form.Item className="auth-buttons" style={{ width: "75%" }}>
                {" "}
                <Button onClick={onGoBack} className="go-back">
                  Go Back
                </Button>
                <Button
                  className="check-code"
                  type="primary"
                  htmlType="submit"
                  onClick={onCheckCodeClick}
                  style={{ backgroundColor: "#2C92F8" }}
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
                  {!loading && "Check Password"}
                </Button>
              </Form.Item>
            </Form>
            <div className="auth-footer">
              <ul>
                <li>Trems Of Us</li>
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

export default AuthConfirm;
