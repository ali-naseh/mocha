import React, { useState, useEffect } from "react";
import Modal from "antd/es/modal/Modal";
import axios from "axios";
import { Row } from "antd";
import AddMemberModal from "../Project/AddMember";

function Project(props) {
  const [members, setMembers] = useState(props.members);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [modal4Open, setModal4Open] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [ports, setports] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMembers(props.members);
  }, [props.members]);

  // api call to get all open ports on specific project
  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.mochacloud.ir/workspace/${props.id}/ports/`,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setports(res.data.Ports);
      })
      .catch((err) => console.log(err));
  }, [props.id, token]);

  function delete_ok(res) {
    setModalOpen(false);
    props.project_state(!props.project);
  }

  // api to close an open port on specific project
  function sure() {
    setLoading(true);
    axios({
      method: "post",
      url: "https://api.mochacloud.ir/workspace/delete/",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        id: props.id,
      },
    })
      .then((res) => {
        delete_ok(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  const addMemberHandler = (newMember) => {
    axios({
      method: "post",
      url: `https://api.mochacloud.ir/workspace/${props.id}/add_member/`,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        user_id: newMember.id,
      },
    })
      .then((res) => {
        setMembers(res.data.workspace.member);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="project-wrap">
        <div
          className="project-tittle"
          onClick={() => {
            var address = props.address;
            window.open(`http://${address}`);
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.9981 18H37.0021L25.9981 7.00199V18ZM12.0001 4.00199H28.0021L40.0021 16.002V40.002C40.0017 40.5271 39.8978 41.0471 39.6965 41.5321C39.4952 42.0171 39.2003 42.4578 38.8287 42.8288C38.457 43.1999 38.016 43.4941 37.5306 43.6947C37.0453 43.8953 36.5252 43.9984 36.0001 43.998H12.0001C9.78007 43.998 7.99807 42.198 7.99807 40.002V7.99799C7.99648 7.47228 8.09895 6.95145 8.29958 6.46552C8.50021 5.9796 8.79503 5.53819 9.16705 5.16673C9.53906 4.79527 9.98092 4.50111 10.4671 4.30121C10.9534 4.10131 11.4744 3.99962 12.0001 4.00199ZM30.0001 36V31.998H12.0001V36H30.0001ZM36.0001 28.002V24H12.0001V28.002H36.0001Z"
              fill="#95999F"
            />
          </svg>
          <strong>{props.name}</strong>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {props.owner.email === localStorage.getItem("email") && (
            <button
              title="add member"
              className="project-btn"
              onClick={() => setModal4Open(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                class="bi bi-person-plus"
                viewBox="0 0 16 16"
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                <path
                  fill-rule="evenodd"
                  d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
            </button>
          )}
          <button
            title="ports"
            className="project-btn"
            onClick={() => setModal2Open(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              class="bi bi-modem"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 1.5A1.5 1.5 0 0 1 7 0h2a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-1.404 1.497c.35.305.872.678 1.628 1.056A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.224-.947c.756-.378 1.277-.75 1.628-1.056A1.5 1.5 0 0 1 5.5 12.5v-11ZM7 1a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 9 1H7Z" />
              <path d="M8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
            </svg>
          </button>
          <button className="project-btn" onClick={() => setModalOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              class="bi bi-trash3"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
            </svg>
          </button>
        </div>
      </div>
      <Modal
        title="Delete Project"
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
          loading: loading,
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
        <h2 className="delete-modal-header">
          Are you sure you want to delete your Project?
        </h2>
      </Modal>
      <Modal
        title={
          <div className="portmodal-header">
            <div>Ports</div>
            <button
              className="portmodal-btn"
              onClick={() => setModal3Open(true)}
            >
              Add +
            </button>
          </div>
        }
        centered
        headers="none"
        open={modal2Open}
        onOk={sure}
        onCancel={() => setModal2Open(false)}
        className="port-modal"
        okButtonProps={{
          style: {
            display: "none",
          },
        }}
        cancelButtonProps={{
          style: {
            display: "none",
          },
        }}
      >
        <div style={{ textAlign: "center" }}>
          {ports.length ? (
            ports.map((port) => (
              <Row>
                <div className="port-wrap">
                  <div
                    className="port-info"
                    onClick={() => {
                      window.open(`http://${port.address}`);
                    }}
                  >
                    <div>{port.port}</div>
                    <div>Address</div>
                    <div className="port-open">Open</div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="white"
                    class="bi bi-trash3"
                    viewBox="0 0 16 16"
                    onClick={() => {
                      axios({
                        method: "post",
                        url: `https://api.mochacloud.ir/workspace/${props.id}/ports/remove/`,
                        headers: {
                          Authorization: `Bearer ${token}`,
                          Accept: "application/json",
                          "Content-Type": "application/json",
                        },
                        data: {
                          port: port.port,
                        },
                      })
                        .then((res) => {
                          setports(res.data.Ports);
                        })
                        .catch((err) => console.log(err));
                    }}
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                  </svg>
                </div>
              </Row>
            ))
          ) : (
            <p style={{ color: "white", fontSize: "16px" }}>No Ports Yet</p>
          )}
        </div>
      </Modal>
      <Modal
        title={
          <div className="portmodal-header">
            <div>Enter Port number</div>
          </div>
        }
        centered
        headers="none"
        open={modal3Open}
        onCancel={() => setModal3Open(false)}
        className="port-modal"
        footer={[
          <button type="submit" form="port-form" className="portmodal-btn">
            Add +
          </button>,
          <button
            className="portmodal-btn-cancel"
            onClick={() => setModal3Open(false)}
          >
            Cancel
          </button>,
        ]}
      >
        <form
          id="port-form"
          onSubmit={(event) => {
            event.preventDefault();
            var form = document.getElementById("port-form");

            if (
              parseInt(form.num.value) > 2999 &&
              parseInt(form.num.value) < 10001
            ) {
              axios({
                method: "post",
                url: `https://api.mochacloud.ir/workspace/${props.id}/ports/add/`,
                headers: {
                  Authorization: `Bearer ${token}`,
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                data: {
                  port: form.num.value,
                },
              }).then((res) => {
                console.log(res.data);
                setports(res.data.Ports);
                setModal3Open(false);
              });
            } else {
              alert("enter between 3000 to 10000");
            }
          }}
        >
          <input
            className="port-input"
            type="text"
            name="num"
            placeholder="enter between 3000 to 10000"
          />
        </form>
      </Modal>
      <Modal
        title={
          <div className="portmodal-header">
            <div>{props.name} project members</div>
          </div>
        }
        centered
        headers="none"
        open={modal4Open}
        onCancel={() => setModal4Open(false)}
        className="port-modal"
        footer={[
          <button className="portmodal-btn" onClick={() => setIsOpen(true)}>
            Add member
          </button>,
          <button
            className="portmodal-btn-cancel"
            onClick={() => setModal4Open(false)}
          >
            Cancel
          </button>,
        ]}
      >
        {members.length ? (
          members.map((member) => (
            <div style={{ color: "white", paddingBottom: "10px" }}>
              {member.email}
            </div>
          ))
        ) : (
          <div style={{ color: "white", paddingBottom: "15px" }}>
            no member yet
          </div>
        )}
        <AddMemberModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          addMember={addMemberHandler}
          addAnotherMember={true}
        />
      </Modal>
    </>
  );
}

export default Project;
