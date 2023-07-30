import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Teamproject from "./teamproject";
import { Row, Col } from "antd";
import UserContext from "../../../Store/user-context";
import ProjectContext from "../../../Store/project-context";
import axios from "axios";
import petshop from "../../../Assets/images/petshop.png";
import adrite from "../../../Assets/images/athlete.png";
import health from "../../../Assets/images/health.png";

const teamprojects = [
  {
    title: "python",
    img: petshop,
    member: "10",
    role: "front-end",
    program: "python",
    members: [
      { name: "Kaveh", role: "Project Mangager" },
      { name: "Ali", role: "Front-end Developer" },
      { name: "Amir", role: "Front-end Developer" },
      { name: "Mahdi", role: "Back-end Developer" },
      { name: "Zeinab", role: "Back-end Developer" },
      { name: "Aida", role: "Designer" },
      { name: "Shadi", role: "Designer" },
      { name: "MohammadAmin", role: "DevOps" },
    ],
  },
  {
    title: "Adrite",
    img: petshop,
    member: "10",
    role: "front-end",
    program: "Js",
    members: [
      { name: "Kaveh", role: "Project Mangager" },
      { name: "Ali", role: "Front-end Developer" },
      { name: "Amir", role: "Front-end Developer" },
      { name: "Mahdi", role: "Back-end Developer" },
      { name: "Zeinab", role: "Back-end Developer" },
      { name: "Aida", role: "Designer" },
      { name: "Shadi", role: "Designer" },
      { name: "MohammadAmin", role: "DevOps" },
    ],
  },
  {
    title: "Health care center",
    img: health,
    member: "10",
    role: "Project-manager",
    program: "C++",
    members: [
      { name: "Kaveh", role: "Project Mangager" },
      { name: "Ali", role: "Front-end Developer" },
      { name: "Amir", role: "Front-end Developer" },
      { name: "Mahdi", role: "Back-end Developer" },
      { name: "Zeinab", role: "Back-end Developer" },
      { name: "Aida", role: "Designer" },
      { name: "Shadi", role: "Designer" },
      { name: "MohammadAmin", role: "DevOps" },
    ],
  },
];
const Account = (props) => {
  const { projects, setProjs } = useContext(ProjectContext);
  const [allProjects, setAllProjects] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // api call to get all projects of user
  useEffect(() => {
    const token = localStorage.getItem("token");
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

    console.log(projects);
    const allProjs = projects.map((p) => {
      return {
        title: p.name,
        img: adrite,
        member: `${p.member.length}`,
        role: "Project-manager",
        program: "C#",
        members: p.member.map((m) => {
          return { name: m.username, role: "Front-End" };
        }),
      };
    });
    setAllProjects(allProjs.concat(teamprojects));
  }, []);

  return (
    <>
      <div className="account-profile">
        <div className="account-prof-photo">
          <img src={user.Img} alt="" />
        </div>
        <div className="account-prof-name">
          <h2>{user.name}</h2>
          <p>Web Developer</p>
        </div>
        <div className="account-prof-edit">
          <button onClick={() => props.onEditClick(1)}>
            <p> Edit Profile</p>{" "}
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="pencil 1">
                <path
                  id="Vector"
                  d="M18.9839 6.45355C19.3414 6.09605 19.3414 5.49999 18.9839 5.16105L16.8389 3.01605C16.5 2.65855 15.9039 2.65855 15.5464 3.01605L13.86 4.69424L17.2975 8.13174M2.75 15.8125V19.25H6.1875L16.3254 9.10111L12.8879 5.66361L2.75 15.8125Z"
                  fill="white"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className="Progressandteamproject-wrap">
        <Row>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>
            <div className="Account-projects-wrap">
              <strong>Team Projects</strong>
              <hr />
              <Row style={{ width: "100%" }}>
                {allProjects.map((teamproject, index) => (
                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 8 }}
                    key={index}
                  >
                    <Teamproject
                      title={teamproject.title}
                      img={teamproject.img}
                      member={teamproject.member}
                      role={teamproject.role}
                      program={teamproject.program}
                      members={teamproject.members}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Account;
