import React from "react";
import { useState, useContext } from "react";
import { Row, Col, Modal } from "antd";
import UserContext from "../../../Store/user-context";
import axios from "axios";

var pass_len = 0;
var pass_same = 0;
var pass_diff = 0;
var pass_reg = 0;
let temp_user = "";
function Checkpassword() {
  //inputs
  let newpass = document.getElementById("newpass");
  let oldpass = document.getElementById("oldpass");
  let repeat = document.getElementById("repeat");
  //classes
  let min8 = document.getElementById("min8");
  let upandlowandnum = document.getElementById("upandlowandnum");
  let same = document.getElementById("same");
  let diff = document.getElementById("diff");

  let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  let found = newpass.value.match(regex);

  if (newpass.value.length > 7) {
    min8.className = "changepass-h3-true";
    pass_len = 1;
  }
  if (newpass.value.length < 8 && newpass.value.length > 0) {
    min8.className = "changepass-h3-false";
    pass_len = 0;
  }
  if (newpass.value !== oldpass.value && newpass.value.length > 0) {
    diff.className = "changepass-h3-true";
    pass_diff = 1;
  }
  if (newpass.value === oldpass.value) {
    diff.className = "changepass-h3-false";
    pass_diff = 0;
  }
  if (found !== null) {
    upandlowandnum.className = "changepass-h3-true";
    pass_reg = 1;
  }
  if (found === null && newpass.value.length > 0) {
    upandlowandnum.className = "changepass-h3-false";
    pass_reg = 0;
  }
  if (repeat.value === newpass.value && repeat.value.length > 0) {
    same.className = "changepass-h3-true";
    pass_same = 1;
  }
  if (repeat.value !== newpass.value) {
    same.className = "changepass-h3-false";
    pass_same = 0;
  }
}

function Changepass() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { user } = useContext(UserContext);
  temp_user = user;

  const togglePassword = (event) => {
    event.preventDefault();
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <div className="changepass-mainwrap">
        <Row
          gutter={{ xl: 100, xs: 200 }}
          style={{ marginLeft: 0, marginRight: 0 }}
        >
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            <form
              className="Changepass-wrap"
              onSubmit={(event) => {
                event.preventDefault();
                if (pass_diff + pass_len + pass_same + pass_reg === 4) {
                  const token = localStorage.getItem("token");
                  let newpass = document.getElementById("newpass");
                  let oldpass = document.getElementById("oldpass");
                  console.log(token);
                  console.log(oldpass.value);
                  console.log(newpass.value);
                  console.log(temp_user.email);
                  axios({
                    method: "put",
                    url: "https://api.mochacloud.ir/accounts/changePassword/",
                    headers: {
                      Authorization: `Bearer ${token}`,
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    data: {
                      old_password: oldpass.value,
                      new_password: newpass.value,
                      email: temp_user.email,
                    },
                  })
                    .then((res) => {
                      setModalOpen(true);
                      //inputs
                      let newpass = document.getElementById("newpass");
                      let oldpass = document.getElementById("oldpass");
                      let repeat = document.getElementById("repeat");
                      //classes
                      let min8 = document.getElementById("min8");
                      let upandlowandnum =
                        document.getElementById("upandlowandnum");
                      let same = document.getElementById("same");
                      let diff = document.getElementById("diff");
                      newpass.value = "";
                      oldpass.value = "";
                      repeat.value = "";
                      min8.classList = "changepass-h3";
                      upandlowandnum.classList = "changepass-h3";
                      same.classList = "changepass-h3";
                      diff.classList = "changepass-h3";
                    })
                    .catch((err) => console.log(err));
                }
              }}
            >
              <label>Current Password</label>
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Enter your Current password"
                onChange={Checkpassword}
                id="oldpass"
              />
              <label>New Password</label>
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Enter New password"
                id="newpass"
                onChange={Checkpassword}
              />
              <label>Confirm Password</label>
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Confirm New password"
                id="repeat"
                onChange={Checkpassword}
              />
              <button type="submit" className="changepass-btn">
                Submit
              </button>
              <button onClick={togglePassword} className="changepass-btn">
                {passwordShown ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="13"
                    fill="currentColor"
                    class="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="13"
                    fill="currentColor"
                    class="bi bi-eye-slash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                  </svg>
                )}
              </button>
            </form>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            style={{ paddingLeft: "50px", paddingRight: 0 }}
            className="col-seccond"
          >
            <div className="changepass-h3-wrap">
              <h3 className="changepass-h3" id="min8">
                minimum 8 characters
              </h3>
              <h3 className="changepass-h3" id="upandlowandnum">
                A Combination of Uppercase Lettrs,Lowercase Letters,Numbers
              </h3>
              <h3 className="changepass-h3" id="diff">
                Siginficantly Diffrent from your Previos Password.
              </h3>
              <h3 className="changepass-h3" id="same">
                same new password and confirm password
              </h3>
            </div>
          </Col>
        </Row>
      </div>
      <Modal
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        className="delete-modal"
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="changepass-modal-header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        </h2>
        <div className="changepass-modal-body">
          <p>Your password has been changed successfully</p>
        </div>
      </Modal>
    </>
  );
}

export default Changepass;
