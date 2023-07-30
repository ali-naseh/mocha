import React, { useState } from "react";
import { Button, Form, Input, Modal, Select } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddMemberModal = (props) => {
  const [role, setRole] = useState("Select a role");
  const [status, setStatus] = useState("success");
  const [loading, setLoading] = useState(false);
  const [emailRef, setEmailRef] = useState("");
  const navigate = useNavigate();

  // role select input handler
  const onSelectChange = (e) => {
    setRole(e);
  };

  // close modal
  const handleCancel = () => {
    props.setIsOpen(false);
    setRole("Select a role");
    setEmailRef("");
    setStatus("success");
  };

  const handleChange = (e) => {
    setEmailRef(e.target.value);
  };

  // api call to check if there is a such user (by email)
  const handleOk = () => {
    const token = localStorage.getItem("token");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      axios({
        method: "post",
        url: "https://api.mochacloud.ir/accounts/searchUser/",
        data: {
          username_or_email: emailRef,
        },
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.data.length !== 0) {
            const newMember = {
              id: res.data[0].id,
              name: res.data[0].first_name,
              role: role,
            };
            setStatus("success");
            props.setIsOpen(false);
            props.addMember(newMember);
          } else {
            setStatus("error");
          }
        })
        .catch((err) => {
          if (err.code === "ERR_NETWORK") {
            navigate("/err-network");
          }
          console.log(err);
        });
      setRole("Select a role");
      setEmailRef("");
    }, 3000);
  };

  return (
    <>
      <Modal
        centered
        open={props.isOpen}
        title="Add New Member"
        onOk={handleOk}
        onCancel={handleCancel}
        className="add-member-modal"
        footer={[
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Add
          </Button>,
        ]}
      >
        <Form>
          <Form.Item
            rules={[
              {
                required: true,
                type: "email",
                message: "Enter the email of member",
              },
            ]}
            validateStatus={status}
            help="No Such User"
            style={{ width: "100%" }}
            label="Member Email"
          >
            <Input
              placeholder="Email"
              value={emailRef}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            label="Member role"
            style={{ width: "100%" }}
            rules={[
              {
                required: true,
                message: "Please select a role",
              },
            ]}
          >
            <Select
              placeholder="Select a role"
              value={role}
              onChange={onSelectChange}
            >
              <Select.Option value="Project Manager">
                Project Manager
              </Select.Option>
              <Select.Option value="Designer">Designer</Select.Option>
              <Select.Option value="Back-End Developer">
                Back-End Developer
              </Select.Option>
              <Select.Option value="Front-End Developer">
                Front-End Developer
              </Select.Option>
              <Select.Option value="Devops">Devops</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default AddMemberModal;
