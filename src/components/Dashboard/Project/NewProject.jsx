import React, { useState, useEffect } from "react";
import { Button, Form, Modal, Select, Input, Upload, message } from "antd";
import { useNavigate } from "react-router-dom";
import AddMemberModal from "./AddMember";
import axios from "axios";

const NewProject = (props) => {
  const [selected, setSelected] = useState("Choose Project Template");
  const [validateStatus, setValidateStatus] = useState("success");
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [members, setMembers] = useState([]);
  const [nameRef, setNameRef] = useState("");
  const navigate = useNavigate();

  // templates select input handler
  const selectedHandler = (e) => {
    if (props.template) {
      setSelected(props.template);
    } else {
      setSelected(e);
    }
  };

  const nameChangeHandler = (e) => {
    setNameRef(e.target.value);
  };

  const handleCancel = () => {
    props.setIsOpen(false);
    setSelected("Choose a template");
    setValidateStatus("success");
    setNameRef("");
    setMembers([]);
  };

  // normal files for upload input
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const addMemberHandler = (newMember) => {
    setMembers([...members, newMember]);
    console.log(members);
    console.log(newMember);
  };

  // empty inputs
  useEffect(() => {
    if (props.template) {
      setSelected(props.template);
    }
    setValidateStatus("success");
    setMembers([]);
    setNameRef("");
  }, [props.template]);

  // api call to add new project and add its members
  const handleOk = () => {
    setLoading(true);
    const token = localStorage.getItem("token");

    setTimeout(() => {
      if (nameRef) {
        setLoading(false);
        props.setIsOpen(false);

        axios({
          method: "post",
          url: "https://api.mochacloud.ir/workspace/create/",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: {
            name: nameRef,
          },
        })
          .then((res) => {
            if (res.data.status === "out of resource:(") {
              messageApi.open({
                type: "error",
                content: "You have limit of creating one project in this plan.",
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
                style: {
                  fontFamily: "Inter",
                  verticalAlign: "middle",
                },
                duration: 4,
              });
            } else {
              members.forEach((member) => {
                axios({
                  method: "post",
                  url: `https://api.mochacloud.ir/workspace/${res.data.id}/add_member/`,
                  headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  data: {
                    user_id: member.id,
                  },
                })
                  .then((res) => {
                    console.log(res);
                    props.onAddProject(res.data.workspace);
                  })
                  .catch((err) => console.log(err));
              });
            }
            setSelected("Choose a template");
            setNameRef("");
            setMembers([]);
            props.onOk();
          })
          .catch((err) => {
            if (err.code === "ERR_NETWORK") {
              navigate("/err-network");
            }
            console.log(err);
          });
      } else {
        setValidateStatus("error");
        setLoading(false);
      }
    }, 3000);
  };

  return (
    <Modal
      closable="true"
      className="new-proj-modal"
      open={props.isOpen}
      title="Create new project"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleOk}
        >
          create project
        </Button>,
      ]}
    >
      {contextHolder}
      <div className="modal-content-wrap">
        <div className="new-proj-inputs">
          <Form>
            <Form.Item
              rules={[
                {
                  required: true,
                  type: "string",
                  message: "Enter the name of project",
                },
              ]}
              validateStatus={validateStatus}
              help="Enter the name of project"
              style={{ width: "100%", height: "16%" }}
              label="Project Name"
            >
              <Input
                onChange={nameChangeHandler}
                value={nameRef}
                placeholder="Project Name"
                style={{
                  height: "40px",
                  width: "100%",
                  minHeight: "unset",
                  borderRadius: "10px",
                  border: " 1px solid #737880",
                  backgroundColor: "inherit",
                  color: "#FFF",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              />
            </Form.Item>
            <Form.Item
              label="Programing language"
              style={{ width: "100%", height: "16%" }}
            >
              <Select
                placeholder="Select a programming language"
                style={{ height: "40px" }}
              >
                <Select.Option value="python">python</Select.Option>
                <Select.Option value="java">java</Select.Option>
                <Select.Option value="javascript">javascript</Select.Option>
              </Select>
            </Form.Item>{" "}
            <Form.Item
              label="Project Template"
              style={{ width: "100%", height: "14%" }}
            >
              <Select
                placeholder="Select a template"
                style={{ height: "40px" }}
                value={selected}
                onChange={selectedHandler}
              >
                {props.langs.map((lang) => (
                  <Select.Option key={lang.name} value={lang.name}>
                    {lang.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Import Files">
              <Form.Item
                name="dragger"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                style={{ width: "100%", height: "18%" }}
              >
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <svg
                      width="71"
                      height="71"
                      viewBox="0 0 71 71"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M35.4998 17.7499H59.1694C62.4177 17.7499 65.0802 20.4102 65.0802 23.6696V53.2499C65.0755 54.817 64.4516 56.3186 63.3443 57.4275C62.2371 58.5363 60.7364 59.1625 59.1694 59.1696H11.8302C8.58193 59.1696 5.91943 56.5004 5.91943 53.2499V17.7499C5.9241 16.1829 6.54806 14.6813 7.65528 13.5724C8.76249 12.4636 10.2632 11.8373 11.8302 11.8303H29.5802L35.4998 17.7499Z"
                        fill="#BBB9B9"
                      />
                    </svg>
                  </p>
                  <p className="ant-upload-text">
                    Drag and Drop a File Here to Import
                  </p>
                  <p className="ant-upload-hint">Import File</p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
          </Form>
        </div>
        <div className="new-proj-members">
          <div className="add-member-button">
            <button onClick={() => setIsOpen(true)}>add member</button>
          </div>
          <div className="members">
            {members.map((member, index) => (
              <div className="member" key={index}>
                <div>
                  <svg
                    width="58"
                    height="59"
                    viewBox="0 0 58 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="29"
                      cy="29.5"
                      rx="29"
                      ry="29.5"
                      fill="#8E8F92"
                    />
                    <ellipse
                      cx="29.1347"
                      cy="29.6372"
                      rx="27.2465"
                      ry="27.7163"
                      fill="#2B333F"
                    />
                    <path
                      d="M29.135 30.6373C34.471 30.6373 38.7676 26.2418 38.7676 20.8559C38.7676 15.4699 34.471 11.0745 29.135 11.0745C23.799 11.0745 19.5024 15.4699 19.5024 20.8559C19.5024 26.2418 23.799 30.6373 29.135 30.6373Z"
                      stroke="#8E8F92"
                      stroke-width="2"
                    />
                    <path
                      d="M6.20459 46.3767C17.8394 30.7728 38.1283 29.7896 52.8744 46.3767"
                      stroke="#8E8F92"
                      stroke-width="2"
                    />
                  </svg>{" "}
                </div>
                <div className="member-name">{member.name}</div>
                <div className="member-role">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AddMemberModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addMember={addMemberHandler}
      />
    </Modal>
  );
};

export default NewProject;
