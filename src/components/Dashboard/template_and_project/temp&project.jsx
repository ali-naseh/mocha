import React, { useState, useContext, useEffect } from "react";
import Template from "./template";
import Project from "./Project";
import { Modal, Row, Col } from "antd";
import TemplateCard from "../Main/Template_card";
import Loader from "../../loader/loader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ProjectContext from "../../../Store/project-context";
import NewProject from "../Project/NewProject";

import python from "../../../Assets/images/pythoncard.svg";
import java from "../../../Assets/images/javacard.svg";
import csharp from "../../../Assets/images/csharpcard.svg";
import js from "../../../Assets/images/js-card.svg";
import kotlin from "../../../Assets/images/kotlincard.svg";
import html from "../../../Assets/images/htmlcard.svg";
import cpp from "../../../Assets/images/cpp-card.svg";
import others from "../../../Assets/images/others.svg";
import reactcard from "../../../Assets/images/reactcard.svg";
import angular from "../../../Assets/images/angularcard.svg";
import django from "../../../Assets/images/djangocard.svg";
import laravel from "../../../Assets/images/laravelcard.svg";
import node from "../../../Assets/images/nodejscard.svg";
import vue from "../../../Assets/images/vuejscard.svg";
import c from "../../../Assets/images/ccard.svg";
import swift from "../../../Assets/images/swiftcard.svg";

const Languages = [
  {
    img: python,
    name: "python",
    view: "12.3k",
  },
  {
    img: java,
    name: "java",
    view: "3.4k",
  },
  {
    img: csharp,
    name: "c#",
    view: "2k",
  },
  {
    img: js,
    name: "java script",
    view: "30k",
  },
  {
    img: kotlin,
    name: "kotlin",
    view: "1.1k",
  },
  {
    img: html,
    name: "html",
    view: "10.3k",
  },
  {
    img: cpp,
    name: "c++",
    view: "9.3k",
  },
  {
    img: reactcard,
    name: "react",
    view: "99k",
  },
  {
    img: angular,
    name: "angular",
    view: "12.3k",
  },
  {
    img: django,
    name: "django",
    view: "3.4k",
  },
  {
    img: laravel,
    name: "laravel",
    view: "2k",
  },
  {
    img: node,
    name: "node js",
    view: "30k",
  },
  {
    img: vue,
    name: "vue js",
    view: "1.1k",
  },
  {
    img: c,
    name: "C",
    view: "1.1k",
  },
  {
    img: swift,
    name: "swift",
    view: "1.1k",
  },
  {
    img: others,
    name: "other",
    view: "99k",
  },
];

function Tempandproject() {
  const { setProjs, projects } = useContext(ProjectContext);
  const [loading_projects, setloading] = useState(true);
  const [selectedTemp, setSelectedTemp] = useState("");
  const [tempprojects, settempProjcets] = useState(projects);
  const [modalOpen, setModalOpen] = useState(false);
  const [show_state, setShow] = useState(true);
  const token = localStorage.getItem("token");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  setTimeout(() => setloading(false), 2000);

  // api call to get all projcts of user
  useEffect(() => {
    axios({
      method: "post",
      url: "https://api.mochacloud.ir/workspace/all/",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setProjs(res.data.workspaces);
      })
      .catch((err) => {
        if (err.code === "ERR_NETWORK") {
          navigate("/err-network");
        }
        console.log(err);
      });
  }, [show_state, navigate, setProjs, token]);

  useEffect(() => {
    settempProjcets(projects);
  }, [projects]);

  // template selector handler
  const selectTempHandler = (temp) => {
    setSelectedTemp(temp);
    setIsOpen(true);
    setModalOpen(false);
  };

  const addNewProjHandler = (newProj) => {
    settempProjcets([...tempprojects, newProj]);
  };

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const show = () => {
    setShow(!show_state);
  };

  return (
    <>
      <div className="Tempandproject-wrap">
        <div>
          {(projects.length === 0) & (loading_projects === false) ? (
            <div style={{ marginTop: "4%" }}>
              <strong className="fistproject-title">Get started</strong>
              <div className="firstproject-wrap">
                <p className="firstproject-text">
                  Create your first new{" "}
                  <strong className="firstproject-strong">Mocha</strong> project
                </p>
                <p className="firstproject-des">
                  Projects are a customizable, flexible tool for planning and
                  tracking your work.
                </p>
                <button
                  className="landing1-btn"
                  onClick={openModal}
                  style={{
                    fontFamily: "InterMedium",
                    zIndex: "unset ",
                  }}
                >
                  New Project
                </button>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="Tempandproject-header">
            <strong>checkout these templates</strong>
            <p
              className="Tempandproject-link"
              onClick={() => setModalOpen(true)}
            >
              See All
            </p>
            <Modal
              title="Choose a template"
              centered
              open={modalOpen}
              onOk={() => setModalOpen(false)}
              onCancel={() => setModalOpen(false)}
              className="modalStyle"
              width={1000}
              okButtonProps={{ style: { display: "none" } }}
              cancelButtonProps={{ style: { display: "none" } }}
            >
              <Row>
                {Languages.map((Language) => (
                  <Col
                    xs={{ span: 12 }}
                    sm={{ span: 12 }}
                    md={{ span: 6 }}
                    key={Language.name}
                  >
                    <TemplateCard
                      img={Language.img}
                      view={Language.view}
                      name={Language.name}
                      onTry={selectTempHandler}
                    />
                  </Col>
                ))}
              </Row>
            </Modal>
          </div>
          <div>
            <Template onClick={selectTempHandler} />
          </div>
        </div>

        {projects.length !== 0 && (
          <div className="Tempandproject-project-wrap">
            <div className="Tempandproject-project-header">
              <strong className="Tempandproject-project-strong">
                your projects
              </strong>
              <button
                className="Tempandproject-project-btn"
                onClick={openModal}
              >
                + New
              </button>
            </div>
            <div style={{ textAlign: "center" }}>
              {loading_projects === false ? (
                tempprojects.map((project) => (
                  <Project
                    key={project.id}
                    name={project.name}
                    id={project.id}
                    project={show_state}
                    project_state={setShow}
                    address={project.address}
                    members={project.member}
                    owner={project.owner}
                  />
                ))
              ) : (
                <Loader />
              )}
            </div>
          </div>
        )}
        <NewProject
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          template={selectedTemp}
          onAddProject={addNewProjHandler}
          langs={Languages}
          onOk={show}
        />
      </div>
    </>
  );
}

export default Tempandproject;
