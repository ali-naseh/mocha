import React, { useContext, useRef, useState } from "react";
import { Row, Col, Form, Input, Button, message, Typography, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Slider from "./Carousel/Slider";
import axios from "axios";
import UserContext from "../../Store/user-context";
import PhoneInput from "./PhoneInput";

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

const SignUp = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [phoneRef, setPhoneRef] = useState("");
  const email = localStorage.getItem("email");
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();
  const lastNameRef = useRef("");
  const userNameRef = useRef("");
  const nameRef = useRef("");
  const passRef = useRef("");

  // api call to register new user and login after that
  const onContinue = (e) => {
    e.preventDefault();
    setLoading(true);

    axios({
      method: "post",
      url: "https://api.mochacloud.ir/accounts/register/",
      data: {
        username: userNameRef.current.input.value,
        password: passRef.current.input.value,
        phone: `0${phoneRef}`,
        first_name: nameRef.current.input.value,
        last_name: lastNameRef.current.input.value,
        email: email,
      },
    })
      .then((res) => {
        axios({
          method: "post",
          url: "https://api.mochacloud.ir/accounts/login/",
          data: {
            username_or_email: email,
            password: passRef.current.input.value,
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

              navigate("/dashboard");
            } else {
              throw new Error("invalid");
            }
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);

            if (err.code === "ERR_NETWORK") {
              navigate("/net-error");
            }

            messageApi.open({
              type: "error",
              content: "Code is not correct",
              className: "code-message",
              duration: 4,
            });
          });
      })
      .catch((err) => {
        setLoading(false);

        if (err.code === "ERR_NETWORK") {
          navigate("/net-error");
        }

        messageApi.open({
          type: "error",
          content: err.response.data.detail,
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
            <Form
              className="auth-inputs"
              style={{ marginTop: "-80px", marginLeft: "10%" }}
            >
              <Typography.Title
                className="auth-input-title"
                style={{ fontSize: "35px" }}
              >
                Tell us more about yourself
              </Typography.Title>

              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please enter your name ",
                  },
                ]}
                className="auth-form-item"
                style={{ width: "65%" }}
                label={"First Name"}
              >
                <Input
                  className="auth-email-code signup-names"
                  placeholder="Enter your name"
                  ref={nameRef}
                  style={{ marginBottom: "4%" }}
                />
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Your Lastname",
                    },
                  ]}
                  label="Last Name"
                  className="signup-names"
                >
                  {" "}
                  <Input
                    className="auth-email-code"
                    placeholder="Enter your lastname"
                    ref={lastNameRef}
                    style={{ marginBottom: "4%" }}
                  />
                </Form.Item>
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please enter your username ",
                  },
                ]}
                name={"username"}
                className="auth-form-item"
                style={{ width: "65%", marginBottom: "4%" }}
                label="Username"
              >
                <Input
                  className="auth-email-code"
                  placeholder="Enter your username"
                  ref={userNameRef}
                />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please enter your password ",
                  },
                ]}
                name={"password"}
                className="auth-form-item"
                style={{ width: "65%", marginBottom: "4%" }}
                label="Password"
              >
                <Input.Password
                  className="auth-password"
                  placeholder="Enter your password"
                  ref={passRef}
                />
              </Form.Item>

              <PhoneInput
                className="auth-email-code"
                placeholder="Enter your phone number"
                value={phoneRef}
                onChange={setPhoneRef}
              />

              <Button
                className="auth-submit"
                type="primary"
                htmlType="submit"
                onClick={onContinue}
                style={{
                  marginTop: "2%",
                  width: "65%",
                  backgroundColor: "#2C92F8",
                }}
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
            </Form>
            <div className="auth-footer" style={{ height: 0 }}>
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

export default SignUp;
