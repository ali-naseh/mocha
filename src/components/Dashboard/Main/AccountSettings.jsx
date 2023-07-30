import React, { useContext, useEffect, useRef, useState } from "react";
import { Modal, Upload, message, Spin } from "antd";
import UserContext from "../../../Store/user-context";
import { Link, useNavigate } from "react-router-dom";
import { CiCircleTwoTone, LoadingOutlined } from "@ant-design/icons";
import axios from "axios";

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const AcccountSettings = () => {
  const { user, setuser } = useContext(UserContext);
  const [messageApi, contextHolder] = message.useMessage();
  const [lnameRef, setLnameRef] = useState(user.lname);
  const [phoneRef, setPhoneRef] = useState(user.phone);
  const [modal3Open, setModal3Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [nameRef, setNameRef] = useState(user.name);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const usernNameRef = useRef("");
  const navigate = useNavigate();
  const countryRef = useRef("");
  const emailRef = useRef("");
  const cityRef = useRef("");
  const bioRef = useRef("");
  const [userInfo, setUserInfo] = useState({
    name: user.name,
    lname: user.lname,
    email: user.email,
    username: user.username,
    phone: user.phone,
    Img: user.Img,
    city: "Tehran",
    country: "Iran",
  });

  // api call to get user profile photo
  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    axios({
      method: "get",
      url: "https://api.mochacloud.ir/accounts/UserProfilePhoto/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setImageUrl(`https://api.mochacloud.ir${res.data.profile_photo}`);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // api call to upload new profile photo
  const handleUpload = (info) => {
    const token = localStorage.getItem("token");
    setLoading(true);
    axios({
      method: "put",
      url: "https://api.mochacloud.ir/accounts/UserProfilePhoto/",
      data: {
        profile_photo: info.file,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        setLoading(false);
        setImageUrl(`https://api.mochacloud.ir${res.data.profile_photo}`);
        setuser((prev) => {
          return {
            ...prev,
            Img: `https://api.mochacloud.ir${res.data.profile_photo}`,
          };
        });
      })
      .catch((err) => console.log(err));
  };

  const uploadButton = (
    <div className={"img-cont-overlay"}>
      {!loading && <img src={userInfo.Img} alt="" />}
      <p>Edit Profile</p>
    </div>
  );

  const sure = () => {
    setModalOpen(false);
    setModal2Open(true);
  };

  // api call to confirm and delete account of user
  const text_confirm = () => {
    const token = localStorage.getItem("token");
    const email_del = localStorage.getItem("email");
    const form1 = document.getElementById("form1");
    const pass_del = form1.del_pass.value;
    const entred_text = form1.confirm.value;
    const text =
      "I read the rules and I know that if I delete my account, all my data will be gone, and I won't be able to recover it.";
    if (entred_text.toUpperCase() === text.toUpperCase()) {
      axios({
        method: "delete",
        url: "https://api.mochacloud.ir/accounts/UserDeleteAccountView/",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: {
          email: email_del,
          password: pass_del,
        },
      })
        .then((res) => {
          setModal2Open(false);
          setModal3Open(true);
          localStorage.clear();
        })
        .catch((err) => {
          if (err.code === "ERR_BAD_REQUEST") {
            alert("you entred wrong password");
          }
        });
    }

    if (entred_text.toUpperCase() !== text.toUpperCase()) {
      alert("you entrd wrong text");
    }
  };

  // api call to edit user info
  const onSave = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    axios({
      method: "put",
      url: "https://api.mochacloud.ir/accounts/editProfile/",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        phone: phoneRef,
        first_name: nameRef,
        last_name: lnameRef,
      },
    })
      .then((res) => {
        const currUser = {
          email: res.data.email,
          name: res.data.first_name,
          lname: res.data.last_name,
          phone: res.data.phone,
          username: res.data.username,
          Img: user.Img,
          theme: "dark",
        };
        setuser(currUser);
        setUserInfo((prev) => {
          return { ...prev, currUser };
        });

        messageApi.open({
          type: "success",
          content: "Profile Edited",
          icon: <CiCircleTwoTone twoToneColor="#52c41a" />,
          style: {
            fontFamily: "Inter",
            verticalAlign: "middle",
          },
          duration: 3,
        });
      })
      .catch((err) => {
        if (err.code === "ERR_NETWORK") {
          navigate("/err-network");
        }
        console.log(err);
      });
  };

  return (
    <>
      <div className="setting-profile">
        {contextHolder}
        <h2>My Profile</h2>
        <div className="container">
          <div className="setting-profile-photo">
            <Upload
              name="avatar"
              listType="picture-circle"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={beforeUpload}
              customRequest={handleUpload}
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
              {!loading ? (
                <div className="img-cont-overlay">
                  <img src={imageUrl} alt="avatar" />
                  <p>Edit Profile</p>
                </div>
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
          <div className="setting-profile-input">
            <form onSubmit={onSave}>
              <div className="profile-name">
                {" "}
                <div className="profile-firstname">
                  {" "}
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={nameRef}
                    onChange={(e) => setNameRef(e.target.value)}
                  />
                </div>
                <div className="profile-lastname">
                  {" "}
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={lnameRef}
                    onChange={(e) => setLnameRef(e.target.value)}
                  />
                </div>
              </div>
              <div className="profile-username">
                <label htmlFor="userName">UserName</label>
                <input
                  type="text"
                  name="userName"
                  value={userInfo.username}
                  ref={usernNameRef}
                />
              </div>

              <div className="profile-bio">
                {" "}
                <label htmlFor="bio">Bio</label>
                <input
                  type="text"
                  name="bio"
                  placeholder="Add a bio"
                  ref={bioRef}
                />
              </div>
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
      <div className="setting-personal-info">
        <h2>Personal Info</h2>
        <div className="container">
          <form onSubmit={onSave}>
            <div className="profile-email-country">
              {" "}
              <div className="profile-email">
                {" "}
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  disabled={true}
                  defaultValue={userInfo.email}
                  ref={emailRef}
                />
              </div>
              <div className="profile-country">
                {" "}
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  name="country"
                  disabled={true}
                  defaultValue={userInfo.country}
                  ref={countryRef}
                />
              </div>
            </div>
            <div className="profile-phone-city">
              {" "}
              <div className="profile-phone">
                {" "}
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={phoneRef}
                  onChange={(e) => setPhoneRef(e.target.value)}
                />
              </div>
              <div className="profile-city">
                {" "}
                <label htmlFor="city">City/State</label>
                <input
                  type="text"
                  name="city"
                  disabled={true}
                  defaultValue={userInfo.city}
                  ref={cityRef}
                />
              </div>
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
      <div className="setting-delete-account">
        <h2>Deleting Account</h2>
        <div className="container">
          <p>
            Deleting your account permanently removes all your data, projects,
            and settings from our platform. It is an irreversible action that
            results in the complete removal of your presence and access to our
            services.
          </p>
          <button onClick={() => setModalOpen(true)}>
            Delete Account{" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {" "}
              <g>
                {" "}
                <path fill="none" d="M0 0h24v24H0z" />{" "}
                <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z" />{" "}
              </g>{" "}
            </svg>{" "}
          </button>
          <Modal
            title="Delete account"
            centered
            open={modalOpen}
            onOk={sure}
            onCancel={() => setModalOpen(false)}
            className="delete-modal"
            okButtonProps={{
              style: {
                backgroundColor: "#1d2025",
                color: "#f34343",
                border: "none",
                boxShadow: "none",
              },
            }}
            cancelButtonProps={{
              style: {
                backgroundColor: "#00b7ff",
                color: "white",
                border: "none",
              },
            }}
            okText="yes I'm Sure"
          >
            <svg
              width="202"
              height="123"
              viewBox="0 0 202 123"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1018_11872)">
                <path
                  d="M47.0006 75C49.0006 80.2 54.5006 82.5 57.0006 83L13.5 82.5L3 83V85.5L6.5 99.5C9.16667 102.833 15.1 110.5 17.5 114.5C19.9 118.5 31.8333 121.833 37.5 123H87.5L187.5 121.5L194 118.5L200 109.5L198 98.5L195.5 93.5L184.5 89H177.5L181.5 80.5V72L177.5 64.5L168 55H154V48L146 28L133.5 13.5L114.5 3.5H93L65 13.5L45.5006 43C45.1672 51.5 45.0006 69.8 47.0006 75Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M37.1987 122.897C42.668 122.816 53.584 120.97 59.5179 116.197C59.8943 115.893 60.2537 115.601 60.5974 115.318C65.3849 110.09 71.0621 103.568 76.1442 97.0852C73.2993 99.3391 68.4545 103.25 61.3778 109.12C48.3583 119.921 31.9909 118.804 20.4593 112.472C11.234 107.407 6.94373 94.2235 5.95179 88.2647V84.168H69.5801C65.4302 83.8425 61.1026 83.4433 57.068 83.0373L45.3833 82.3059H38.2665L29.6321 62.5465L31.4622 57.8644L25.8054 55.6485L23.5919 61.3116L28.2689 63.1439L36.6423 82.3059H24.875L14.9845 59.6729L25.1606 45.1178L25.3815 44.802L25.2514 44.4392L21.2434 33.2613L23.3861 28.7132L17.892 26.1189L15.3006 31.6196L19.843 33.7648L23.7208 44.58L13.526 59.1612L13.2865 59.5031L13.4539 59.8867L23.2508 82.3059H0C0 93.0719 4.03673 103.398 11.2221 111.01C18.144 118.344 27.4418 122.582 37.1987 122.883V122.897ZM41.225 64.5881C41.2118 64.4213 41.201 64.2626 41.1929 64.1144L41.1872 64.206C41.0095 62.3469 40.9185 60.4624 40.9185 58.5571C40.9185 26.2172 67.1049 0 99.4068 0C129.611 0 154.468 22.922 157.569 52.3391C158.47 52.2363 159.386 52.1834 160.314 52.1834C173.559 52.1834 184.296 62.9331 184.296 76.1929C184.296 80.2687 183.282 84.1069 181.492 87.4692C182.403 87.3224 183.338 87.2472 184.29 87.2472C194.071 87.2472 202 95.2506 202 105.124C202 114.996 194.071 123 184.29 123C183.656 123 183.029 122.966 182.411 122.9H55.4231C55.8516 122.784 56.3069 122.66 56.7897 122.528C60.2827 121.574 71.2065 120.716 79.2443 120.22C104.783 120.333 157.016 120.101 187.481 119.921C191.821 118.307 200.129 112.845 198.641 103.907C196.781 92.7338 183.018 90.4992 177.438 92.7338C173.324 94.3806 171.211 95.9441 170.517 96.6651C173.783 92.9587 179.963 84.0563 179.67 76.7195C179.298 67.4089 174.09 59.2155 165.162 56.981C158.02 55.1934 153.506 57.7258 152.143 59.2155C153.878 52.2639 152.366 33.9651 132.427 16.3867C107.504 -5.58645 74.7693 9.31055 69.5615 14.1521C69.1427 14.5417 68.6539 14.9841 68.1086 15.478L68.1078 15.4787C61.8733 21.1232 48.2385 33.4668 46.8703 49.9049C46.4044 55.5025 46.2668 59.8591 46.5602 63.3167L46.4984 63.3122C46.7463 67.2845 48.0607 75.9747 51.3342 78.9541C53.1093 80.5696 54.746 81.4553 56.0309 81.9074C54.7051 81.7048 53.1249 81.3234 51.5083 80.7141L51.8036 80.7499C50.9332 80.5123 48.4386 79.2997 45.4281 76.3553C43.1478 74.1252 41.9823 69.8877 41.4827 66.7229C41.3841 66.0153 41.2981 65.3039 41.225 64.5881Z"
                  fill="white"
                />
                <path
                  d="M100.033 78.1627C97.9614 78.1627 94.7369 79.8066 95.0899 80L100.033 79.9033L104.858 80C105.093 79.8066 102.104 78.1627 100.033 78.1627Z"
                  fill="white"
                />
                <path
                  d="M100.084 72.4213C92.9615 72.4213 89.1085 77.1294 87.7074 79.426C90.1593 78.0481 96.063 75.5218 100.084 75.5218C104.054 75.5218 109.152 78.2012 111.176 79.426C109.424 77.0528 106.505 72.4213 100.084 72.4213Z"
                  fill="black"
                />
                <path
                  d="M79.6497 35.4495C79.7431 33.9797 78.2483 31.8897 78.015 32.0045C77.8981 32.0045 73.9285 38.6648 69.8419 40.617C65.9095 42.4955 63.4198 42.9136 60.5011 42.5691C59.6814 42.4724 55.4807 40.9615 57.5824 42.9136C59.2493 44.462 62.4309 44.7461 63.7371 44.8628L63.7705 44.8658C76.1469 44.2916 79.5329 37.2868 79.6497 35.4495Z"
                  fill="black"
                />
                <path
                  d="M79.6497 35.4495C79.7431 33.9797 78.2483 31.8897 78.015 32.0045C77.8981 32.0045 73.9285 38.6648 69.8419 40.617C65.9095 42.4955 63.4198 42.9136 60.5011 42.5691C59.6814 42.4724 55.4807 40.9615 57.5824 42.9136C59.2493 44.462 62.4309 44.7461 63.7371 44.8628L63.7705 44.8658C76.1469 44.2916 79.5329 37.2868 79.6497 35.4495Z"
                  fill="black"
                />
                <path
                  d="M79.6497 35.4495C79.7431 33.9797 78.2483 31.8897 78.015 32.0045C77.8981 32.0045 73.9285 38.6648 69.8419 40.617C65.9095 42.4955 63.4198 42.9136 60.5011 42.5691C59.6814 42.4724 55.4807 40.9615 57.5824 42.9136C59.2493 44.462 62.4309 44.7461 63.7371 44.8628L63.7705 44.8658C76.1469 44.2916 79.5329 37.2868 79.6497 35.4495Z"
                  fill="black"
                />
                <path
                  d="M119.353 35.4483C119.26 33.979 120.754 31.8897 120.988 32.0045C121.104 32.0045 125.074 38.6625 129.16 40.6139C133.092 42.4918 135.581 42.9098 138.499 42.5654C139.319 42.4687 143.519 40.9583 141.418 42.9098C139.751 44.4576 136.57 44.7416 135.264 44.8583L135.23 44.8612C122.855 44.2873 119.47 37.285 119.353 35.4483Z"
                  fill="black"
                />
                <path
                  d="M119.353 35.4483C119.26 33.979 120.754 31.8897 120.988 32.0045C121.104 32.0045 125.074 38.6625 129.16 40.6139C133.092 42.4918 135.581 42.9098 138.499 42.5654C139.319 42.4687 143.519 40.9583 141.418 42.9098C139.751 44.4576 136.57 44.7416 135.264 44.8583L135.23 44.8612C122.855 44.2873 119.47 37.285 119.353 35.4483Z"
                  fill="black"
                />
                <path
                  d="M119.353 35.4483C119.26 33.979 120.754 31.8897 120.988 32.0045C121.104 32.0045 125.074 38.6625 129.16 40.6139C133.092 42.4918 135.581 42.9098 138.499 42.5654C139.319 42.4687 143.519 40.9583 141.418 42.9098C139.751 44.4576 136.57 44.7416 135.264 44.8583L135.23 44.8612C122.855 44.2873 119.47 37.285 119.353 35.4483Z"
                  fill="black"
                />
                <path
                  d="M81.5192 55.1962C81.5192 61.5382 76.2918 66.6794 69.8434 66.6794C63.395 66.6794 58.1676 61.5382 58.1676 55.1962C58.1676 48.8541 63.395 43.7129 69.8434 43.7129C76.2918 43.7129 81.5192 48.8541 81.5192 55.1962Z"
                  fill="#404040"
                />
                <path
                  d="M140.832 55.4258C140.832 61.7679 135.605 66.9091 129.157 66.9091C122.708 66.9091 117.481 61.7679 117.481 55.4258C117.481 49.0838 122.708 43.9426 129.157 43.9426C135.605 43.9426 140.832 49.0838 140.832 55.4258Z"
                  fill="#404040"
                />
                <path
                  d="M79.6511 52.555C79.6511 54.6479 77.926 56.3445 75.7981 56.3445C73.6701 56.3445 71.9451 54.6479 71.9451 52.555C71.9451 50.4622 73.6701 48.7656 75.7981 48.7656C77.926 48.7656 79.6511 50.4622 79.6511 52.555Z"
                  fill="white"
                />
                <path
                  d="M127.055 52.555C127.055 54.6479 125.33 56.3445 123.202 56.3445C121.074 56.3445 119.349 54.6479 119.349 52.555C119.349 50.4622 121.074 48.7656 123.202 48.7656C125.33 48.7656 127.055 50.4622 127.055 52.555Z"
                  fill="white"
                />
                <path
                  d="M73.8132 57.378C73.8132 58.4561 72.9245 59.3301 71.8283 59.3301C70.7321 59.3301 69.8434 58.4561 69.8434 57.378C69.8434 56.2998 70.7321 55.4258 71.8283 55.4258C72.9245 55.4258 73.8132 56.2998 73.8132 57.378Z"
                  fill="white"
                />
                <path
                  d="M129.157 57.378C129.157 58.4561 128.268 59.3301 127.172 59.3301C126.075 59.3301 125.187 58.4561 125.187 57.378C125.187 56.2998 126.075 55.4258 127.172 55.4258C128.268 55.4258 129.157 56.2998 129.157 57.378Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1018_11872">
                  <rect width="202" height="123" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h2 className="delete-modal-header">
              Are you sure you want to delete your account?
            </h2>
            <div className="delete-modal-body">
              <p style={{ fontFamily: "InterSemiBold" }}>
                We're sorry to see you go. Before you proceed with deleting your
                account, please consider the following:
              </p>
              <p>
                1.Data Loss: Deleting your account will permanently erase all
                your data, including projects, files, and settings. This action
                cannot be undone.
              </p>
              <p>
                2.No Recovery: Once your account is deleted, we won't be able to
                recover any of your data. Make sure to back up any important
                information before proceeding.
              </p>
              <p>
                3.Future Access: You'll no longer be able to access your
                projects and resources on our platform after the account is
                deleted.
              </p>
            </div>
          </Modal>
          <Modal
            title="Delete account"
            centered
            open={modal2Open}
            onOk={text_confirm}
            onCancel={() => setModal2Open(false)}
            className="delete-modal"
            okButtonProps={{
              style: {
                backgroundColor: "#1d2025",
                color: "#00b7ff",
                border: "none",
                boxShadow: "none",
              },
            }}
            cancelButtonProps={{
              style: {
                backgroundColor: "#00b7ff",
                color: "white",
                border: "none",
              },
            }}
            okText="Submit"
          >
            <svg
              width="202"
              height="123"
              viewBox="0 0 202 123"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1020_11936)">
                <path
                  d="M47.0006 75C49.0006 80.2 54.5006 82.5 57.0006 83L13.5 82.5L3 83V85.5L6.5 99.5C9.16667 102.833 15.1 110.5 17.5 114.5C19.9 118.5 31.8333 121.833 37.5 123H87.5L187.5 121.5L194 118.5L200 109.5L198 98.5L195.5 93.5L184.5 89H177.5L181.5 80.5V72L177.5 64.5L168 55H154V48L146 28L133.5 13.5L114.5 3.5H93L65 13.5L45.5006 43C45.1672 51.5 45.0006 69.8 47.0006 75Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M81.4411 62C77.9411 69 78.4411 72.5 81.4411 72.5C84.4411 72.5 84.4414 69 81.4411 62Z"
                  fill="#2C92F8"
                  stroke="#2C92F8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M37.1987 122.897C42.668 122.816 53.584 120.97 59.5179 116.197C59.8943 115.893 60.2537 115.601 60.5974 115.318C65.3849 110.09 71.0621 103.568 76.1442 97.0852C73.2993 99.3391 68.4545 103.25 61.3778 109.12C48.3583 119.921 31.9909 118.804 20.4593 112.472C11.234 107.407 6.94373 94.2235 5.95179 88.2647V84.168H69.5801C65.4302 83.8425 61.1026 83.4433 57.068 83.0373L45.3833 82.3059H38.2665L29.6321 62.5465L31.4622 57.8644L25.8054 55.6485L23.5919 61.3116L28.2689 63.1439L36.6423 82.3059H24.875L14.9845 59.6729L25.1606 45.1178L25.3815 44.802L25.2514 44.4392L21.2434 33.2613L23.3861 28.7132L17.892 26.1189L15.3006 31.6196L19.843 33.7648L23.7208 44.58L13.526 59.1612L13.2865 59.5031L13.4539 59.8867L23.2508 82.3059H0C0 93.0719 4.03673 103.398 11.2221 111.01C18.144 118.344 27.4418 122.582 37.1987 122.883V122.897ZM41.225 64.5881C41.2118 64.4213 41.201 64.2626 41.1929 64.1144L41.1872 64.206C41.0095 62.3469 40.9185 60.4624 40.9185 58.5571C40.9185 26.2172 67.1049 0 99.4068 0C129.611 0 154.468 22.922 157.569 52.3391C158.47 52.2363 159.386 52.1834 160.314 52.1834C173.559 52.1834 184.296 62.9331 184.296 76.1929C184.296 80.2687 183.282 84.1069 181.492 87.4692C182.403 87.3224 183.338 87.2472 184.29 87.2472C194.071 87.2472 202 95.2506 202 105.124C202 114.996 194.071 123 184.29 123C183.656 123 183.029 122.966 182.411 122.9H55.4231C55.8516 122.784 56.3069 122.66 56.7897 122.528C60.2827 121.574 71.2065 120.716 79.2443 120.22C104.783 120.333 157.016 120.101 187.481 119.921C191.821 118.307 200.129 112.845 198.641 103.907C196.781 92.7338 183.018 90.4992 177.438 92.7338C173.324 94.3806 171.211 95.9441 170.517 96.6651C173.783 92.9587 179.963 84.0563 179.67 76.7195C179.298 67.4089 174.09 59.2155 165.162 56.981C158.02 55.1934 153.506 57.7258 152.143 59.2155C153.878 52.2639 152.366 33.9651 132.427 16.3867C107.504 -5.58645 74.7693 9.31055 69.5615 14.1521C69.1427 14.5417 68.6539 14.9841 68.1086 15.478L68.1078 15.4787C61.8733 21.1232 48.2385 33.4668 46.8703 49.9049C46.4044 55.5025 46.2668 59.8591 46.5602 63.3167L46.4984 63.3122C46.7463 67.2845 48.0607 75.9747 51.3342 78.9541C53.1093 80.5696 54.746 81.4553 56.0309 81.9074C54.7051 81.7048 53.1249 81.3234 51.5083 80.7141L51.8036 80.7499C50.9332 80.5123 48.4386 79.2997 45.4281 76.3553C43.1478 74.1252 41.9823 69.8877 41.4827 66.7229C41.3841 66.0153 41.2981 65.3039 41.225 64.5881Z"
                  fill="white"
                />
                <path
                  d="M100.033 78.1627C97.9614 78.1627 94.7369 79.8066 95.0899 80L100.033 79.9033L104.858 80C105.093 79.8066 102.104 78.1627 100.033 78.1627Z"
                  fill="white"
                />
                <path
                  d="M100.084 72.4213C92.9615 72.4213 89.1085 77.1294 87.7074 79.426C90.1593 78.0481 96.063 75.5218 100.084 75.5218C104.054 75.5218 109.152 78.2012 111.176 79.426C109.424 77.0528 106.505 72.4213 100.084 72.4213Z"
                  fill="black"
                />
                <path
                  d="M79.6497 35.4495C79.7431 33.9797 78.2483 31.8897 78.015 32.0045C77.8981 32.0045 73.9285 38.6648 69.8419 40.617C65.9095 42.4955 63.4198 42.9136 60.5011 42.5691C59.6814 42.4724 55.4807 40.9615 57.5824 42.9136C59.2493 44.462 62.4309 44.7461 63.7371 44.8628L63.7705 44.8658C76.1469 44.2916 79.5329 37.2868 79.6497 35.4495Z"
                  fill="black"
                />
                <path
                  d="M79.6497 35.4495C79.7431 33.9797 78.2483 31.8897 78.015 32.0045C77.8981 32.0045 73.9285 38.6648 69.8419 40.617C65.9095 42.4955 63.4198 42.9136 60.5011 42.5691C59.6814 42.4724 55.4807 40.9615 57.5824 42.9136C59.2493 44.462 62.4309 44.7461 63.7371 44.8628L63.7705 44.8658C76.1469 44.2916 79.5329 37.2868 79.6497 35.4495Z"
                  fill="black"
                />
                <path
                  d="M79.6497 35.4495C79.7431 33.9797 78.2483 31.8897 78.015 32.0045C77.8981 32.0045 73.9285 38.6648 69.8419 40.617C65.9095 42.4955 63.4198 42.9136 60.5011 42.5691C59.6814 42.4724 55.4807 40.9615 57.5824 42.9136C59.2493 44.462 62.4309 44.7461 63.7371 44.8628L63.7705 44.8658C76.1469 44.2916 79.5329 37.2868 79.6497 35.4495Z"
                  fill="black"
                />
                <path
                  d="M119.353 35.4483C119.26 33.979 120.754 31.8897 120.988 32.0045C121.104 32.0045 125.074 38.6625 129.16 40.6139C133.092 42.4918 135.581 42.9098 138.499 42.5654C139.319 42.4687 143.519 40.9583 141.418 42.9098C139.751 44.4576 136.57 44.7416 135.264 44.8583L135.23 44.8612C122.855 44.2873 119.47 37.285 119.353 35.4483Z"
                  fill="black"
                />
                <path
                  d="M119.353 35.4483C119.26 33.979 120.754 31.8897 120.988 32.0045C121.104 32.0045 125.074 38.6625 129.16 40.6139C133.092 42.4918 135.581 42.9098 138.499 42.5654C139.319 42.4687 143.519 40.9583 141.418 42.9098C139.751 44.4576 136.57 44.7416 135.264 44.8583L135.23 44.8612C122.855 44.2873 119.47 37.285 119.353 35.4483Z"
                  fill="black"
                />
                <path
                  d="M119.353 35.4483C119.26 33.979 120.754 31.8897 120.988 32.0045C121.104 32.0045 125.074 38.6625 129.16 40.6139C133.092 42.4918 135.581 42.9098 138.499 42.5654C139.319 42.4687 143.519 40.9583 141.418 42.9098C139.751 44.4576 136.57 44.7416 135.264 44.8583L135.23 44.8612C122.855 44.2873 119.47 37.285 119.353 35.4483Z"
                  fill="black"
                />
                <path
                  d="M81.5192 55.1962C81.5192 61.5382 76.2918 66.6794 69.8434 66.6794C63.395 66.6794 58.1676 61.5382 58.1676 55.1962C61.5 51.5 66.5 48.7656 72.5 44.8628C78 46 81.5192 48.8541 81.5192 55.1962Z"
                  fill="#404040"
                />
                <path
                  d="M140.5 54C140.5 60.342 135.605 66.9091 129.157 66.9091C122.708 66.9091 117.481 61.7679 117.481 55.4258C117.481 49.0838 123.313 44.8583 126.5 44.8583C133.5 48.7656 134.5 49.5 140.5 54Z"
                  fill="#404040"
                />
                <path
                  d="M79.6511 52.555C79.6511 54.6479 77.926 56.3445 75.7981 56.3445C73.6701 56.3445 71.9451 54.6479 71.9451 52.555C71.9451 50.4622 73.6701 48.7656 75.7981 48.7656C77.926 48.7656 79.6511 50.4622 79.6511 52.555Z"
                  fill="white"
                />
                <path
                  d="M127.055 52.555C127.055 54.6479 125.33 56.3445 123.202 56.3445C121.074 56.3445 119.349 54.6479 119.349 52.555C119.349 50.4622 121.074 48.7656 123.202 48.7656C125.33 48.7656 127.055 50.4622 127.055 52.555Z"
                  fill="white"
                />
                <path
                  d="M73.8132 57.378C73.8132 58.4561 72.9245 59.3301 71.8283 59.3301C70.7321 59.3301 69.8434 58.4561 69.8434 57.378C69.8434 56.2998 70.7321 55.4258 71.8283 55.4258C72.9245 55.4258 73.8132 56.2998 73.8132 57.378Z"
                  fill="white"
                />
                <path
                  d="M129.157 57.378C129.157 58.4561 128.268 59.3301 127.172 59.3301C126.075 59.3301 125.187 58.4561 125.187 57.378C125.187 56.2998 126.075 55.4258 127.172 55.4258C128.268 55.4258 129.157 56.2998 129.157 57.378Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1020_11936">
                  <rect width="202" height="123" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <h5 className="delete-modal2-body">
              To proceed with account deletion, please confirm that you have
              read and understood our rules by typing the following sentence and
              enter your password:
            </h5>
            <h5 className="delete-modal2-confirmtext">
              I read the rules and I know that if I delete my account, all my
              data will be gone, and I won't be able to recover it.
            </h5>
            <form id="form1">
              <input
                type="text"
                className="delete-modal2-input"
                name="confirm"
              />
              <input
                type="password"
                placeholder="enter your password"
                className="delete-modal2-input2"
                name="del_pass"
              />
            </form>
          </Modal>
          <Modal
            title="Delete account"
            centered
            open={modal3Open}
            className="delete-modal3"
            okButtonProps={{ style: { display: "none" } }}
            cancelButtonProps={{ style: { display: "none" } }}
          >
            <svg
              width="202"
              height="123"
              viewBox="0 0 202 123"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1020_11936)">
                <path
                  d="M47.0006 75C49.0006 80.2 54.5006 82.5 57.0006 83L13.5 82.5L3 83V85.5L6.5 99.5C9.16667 102.833 15.1 110.5 17.5 114.5C19.9 118.5 31.8333 121.833 37.5 123H87.5L187.5 121.5L194 118.5L200 109.5L198 98.5L195.5 93.5L184.5 89H177.5L181.5 80.5V72L177.5 64.5L168 55H154V48L146 28L133.5 13.5L114.5 3.5H93L65 13.5L45.5006 43C45.1672 51.5 45.0006 69.8 47.0006 75Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M81.4411 62C77.9411 69 78.4411 72.5 81.4411 72.5C84.4411 72.5 84.4414 69 81.4411 62Z"
                  fill="#2C92F8"
                  stroke="#2C92F8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M37.1987 122.897C42.668 122.816 53.584 120.97 59.5179 116.197C59.8943 115.893 60.2537 115.601 60.5974 115.318C65.3849 110.09 71.0621 103.568 76.1442 97.0852C73.2993 99.3391 68.4545 103.25 61.3778 109.12C48.3583 119.921 31.9909 118.804 20.4593 112.472C11.234 107.407 6.94373 94.2235 5.95179 88.2647V84.168H69.5801C65.4302 83.8425 61.1026 83.4433 57.068 83.0373L45.3833 82.3059H38.2665L29.6321 62.5465L31.4622 57.8644L25.8054 55.6485L23.5919 61.3116L28.2689 63.1439L36.6423 82.3059H24.875L14.9845 59.6729L25.1606 45.1178L25.3815 44.802L25.2514 44.4392L21.2434 33.2613L23.3861 28.7132L17.892 26.1189L15.3006 31.6196L19.843 33.7648L23.7208 44.58L13.526 59.1612L13.2865 59.5031L13.4539 59.8867L23.2508 82.3059H0C0 93.0719 4.03673 103.398 11.2221 111.01C18.144 118.344 27.4418 122.582 37.1987 122.883V122.897ZM41.225 64.5881C41.2118 64.4213 41.201 64.2626 41.1929 64.1144L41.1872 64.206C41.0095 62.3469 40.9185 60.4624 40.9185 58.5571C40.9185 26.2172 67.1049 0 99.4068 0C129.611 0 154.468 22.922 157.569 52.3391C158.47 52.2363 159.386 52.1834 160.314 52.1834C173.559 52.1834 184.296 62.9331 184.296 76.1929C184.296 80.2687 183.282 84.1069 181.492 87.4692C182.403 87.3224 183.338 87.2472 184.29 87.2472C194.071 87.2472 202 95.2506 202 105.124C202 114.996 194.071 123 184.29 123C183.656 123 183.029 122.966 182.411 122.9H55.4231C55.8516 122.784 56.3069 122.66 56.7897 122.528C60.2827 121.574 71.2065 120.716 79.2443 120.22C104.783 120.333 157.016 120.101 187.481 119.921C191.821 118.307 200.129 112.845 198.641 103.907C196.781 92.7338 183.018 90.4992 177.438 92.7338C173.324 94.3806 171.211 95.9441 170.517 96.6651C173.783 92.9587 179.963 84.0563 179.67 76.7195C179.298 67.4089 174.09 59.2155 165.162 56.981C158.02 55.1934 153.506 57.7258 152.143 59.2155C153.878 52.2639 152.366 33.9651 132.427 16.3867C107.504 -5.58645 74.7693 9.31055 69.5615 14.1521C69.1427 14.5417 68.6539 14.9841 68.1086 15.478L68.1078 15.4787C61.8733 21.1232 48.2385 33.4668 46.8703 49.9049C46.4044 55.5025 46.2668 59.8591 46.5602 63.3167L46.4984 63.3122C46.7463 67.2845 48.0607 75.9747 51.3342 78.9541C53.1093 80.5696 54.746 81.4553 56.0309 81.9074C54.7051 81.7048 53.1249 81.3234 51.5083 80.7141L51.8036 80.7499C50.9332 80.5123 48.4386 79.2997 45.4281 76.3553C43.1478 74.1252 41.9823 69.8877 41.4827 66.7229C41.3841 66.0153 41.2981 65.3039 41.225 64.5881Z"
                  fill="white"
                />
                <path
                  d="M100.033 78.1627C97.9614 78.1627 94.7369 79.8066 95.0899 80L100.033 79.9033L104.858 80C105.093 79.8066 102.104 78.1627 100.033 78.1627Z"
                  fill="white"
                />
                <path
                  d="M100.084 72.4213C92.9615 72.4213 89.1085 77.1294 87.7074 79.426C90.1593 78.0481 96.063 75.5218 100.084 75.5218C104.054 75.5218 109.152 78.2012 111.176 79.426C109.424 77.0528 106.505 72.4213 100.084 72.4213Z"
                  fill="black"
                />
                <path
                  d="M79.6497 35.4495C79.7431 33.9797 78.2483 31.8897 78.015 32.0045C77.8981 32.0045 73.9285 38.6648 69.8419 40.617C65.9095 42.4955 63.4198 42.9136 60.5011 42.5691C59.6814 42.4724 55.4807 40.9615 57.5824 42.9136C59.2493 44.462 62.4309 44.7461 63.7371 44.8628L63.7705 44.8658C76.1469 44.2916 79.5329 37.2868 79.6497 35.4495Z"
                  fill="black"
                />
                <path
                  d="M79.6497 35.4495C79.7431 33.9797 78.2483 31.8897 78.015 32.0045C77.8981 32.0045 73.9285 38.6648 69.8419 40.617C65.9095 42.4955 63.4198 42.9136 60.5011 42.5691C59.6814 42.4724 55.4807 40.9615 57.5824 42.9136C59.2493 44.462 62.4309 44.7461 63.7371 44.8628L63.7705 44.8658C76.1469 44.2916 79.5329 37.2868 79.6497 35.4495Z"
                  fill="black"
                />
                <path
                  d="M79.6497 35.4495C79.7431 33.9797 78.2483 31.8897 78.015 32.0045C77.8981 32.0045 73.9285 38.6648 69.8419 40.617C65.9095 42.4955 63.4198 42.9136 60.5011 42.5691C59.6814 42.4724 55.4807 40.9615 57.5824 42.9136C59.2493 44.462 62.4309 44.7461 63.7371 44.8628L63.7705 44.8658C76.1469 44.2916 79.5329 37.2868 79.6497 35.4495Z"
                  fill="black"
                />
                <path
                  d="M119.353 35.4483C119.26 33.979 120.754 31.8897 120.988 32.0045C121.104 32.0045 125.074 38.6625 129.16 40.6139C133.092 42.4918 135.581 42.9098 138.499 42.5654C139.319 42.4687 143.519 40.9583 141.418 42.9098C139.751 44.4576 136.57 44.7416 135.264 44.8583L135.23 44.8612C122.855 44.2873 119.47 37.285 119.353 35.4483Z"
                  fill="black"
                />
                <path
                  d="M119.353 35.4483C119.26 33.979 120.754 31.8897 120.988 32.0045C121.104 32.0045 125.074 38.6625 129.16 40.6139C133.092 42.4918 135.581 42.9098 138.499 42.5654C139.319 42.4687 143.519 40.9583 141.418 42.9098C139.751 44.4576 136.57 44.7416 135.264 44.8583L135.23 44.8612C122.855 44.2873 119.47 37.285 119.353 35.4483Z"
                  fill="black"
                />
                <path
                  d="M119.353 35.4483C119.26 33.979 120.754 31.8897 120.988 32.0045C121.104 32.0045 125.074 38.6625 129.16 40.6139C133.092 42.4918 135.581 42.9098 138.499 42.5654C139.319 42.4687 143.519 40.9583 141.418 42.9098C139.751 44.4576 136.57 44.7416 135.264 44.8583L135.23 44.8612C122.855 44.2873 119.47 37.285 119.353 35.4483Z"
                  fill="black"
                />
                <path
                  d="M81.5192 55.1962C81.5192 61.5382 76.2918 66.6794 69.8434 66.6794C63.395 66.6794 58.1676 61.5382 58.1676 55.1962C61.5 51.5 66.5 48.7656 72.5 44.8628C78 46 81.5192 48.8541 81.5192 55.1962Z"
                  fill="#404040"
                />
                <path
                  d="M140.5 54C140.5 60.342 135.605 66.9091 129.157 66.9091C122.708 66.9091 117.481 61.7679 117.481 55.4258C117.481 49.0838 123.313 44.8583 126.5 44.8583C133.5 48.7656 134.5 49.5 140.5 54Z"
                  fill="#404040"
                />
                <path
                  d="M79.6511 52.555C79.6511 54.6479 77.926 56.3445 75.7981 56.3445C73.6701 56.3445 71.9451 54.6479 71.9451 52.555C71.9451 50.4622 73.6701 48.7656 75.7981 48.7656C77.926 48.7656 79.6511 50.4622 79.6511 52.555Z"
                  fill="white"
                />
                <path
                  d="M127.055 52.555C127.055 54.6479 125.33 56.3445 123.202 56.3445C121.074 56.3445 119.349 54.6479 119.349 52.555C119.349 50.4622 121.074 48.7656 123.202 48.7656C125.33 48.7656 127.055 50.4622 127.055 52.555Z"
                  fill="white"
                />
                <path
                  d="M73.8132 57.378C73.8132 58.4561 72.9245 59.3301 71.8283 59.3301C70.7321 59.3301 69.8434 58.4561 69.8434 57.378C69.8434 56.2998 70.7321 55.4258 71.8283 55.4258C72.9245 55.4258 73.8132 56.2998 73.8132 57.378Z"
                  fill="white"
                />
                <path
                  d="M129.157 57.378C129.157 58.4561 128.268 59.3301 127.172 59.3301C126.075 59.3301 125.187 58.4561 125.187 57.378C125.187 56.2998 126.075 55.4258 127.172 55.4258C128.268 55.4258 129.157 56.2998 129.157 57.378Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1020_11936">
                  <rect width="202" height="123" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h5>Your account has been deleted!</h5>
            <h5 className="delete-modal3-desc">
              We're sorry to see you go, and hope to see you back in the future!
            </h5>
            <Link to={"/"} className="delete-modal3-btn">
              go back to home page
            </Link>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default AcccountSettings;
