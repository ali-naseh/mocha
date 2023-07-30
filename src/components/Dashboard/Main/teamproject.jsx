import React, { useState } from "react";
import { Modal, Row, Col } from "antd";

function Teamproject(props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="teamproject-wrap" onClick={() => setModalOpen(true)}>
        <div className="teamproject-title">{props.title}</div>
        <div className="teamproject-img">
          <img src={props.img} alt="" style={{ maxWidth: "100%" }} />
        </div>
        <div className="teamproject-members">
          <svg
            width="18"
            height="13"
            viewBox="0 0 18 13"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 0.959229C8.48074 0.959346 7.97317 1.12201 7.5415 1.42664C7.10983 1.73128 6.77344 2.1642 6.57488 2.67066C6.37632 3.17711 6.32452 3.73434 6.42601 4.27188C6.5275 4.80942 6.77774 5.30311 7.14507 5.69051C7.5124 6.07792 7.98032 6.34164 8.48966 6.44831C8.99899 6.55498 9.52685 6.49981 10.0065 6.28979C10.4861 6.07977 10.896 5.72432 11.1842 5.2684C11.4724 4.81249 11.6261 4.27659 11.6257 3.72848C11.6253 2.99376 11.3484 2.28931 10.8561 1.77001C10.3637 1.2507 9.69605 0.959071 9 0.959229ZM9 2.54098C9.29837 2.54098 9.58452 2.66609 9.7955 2.88879C10.0065 3.11149 10.125 3.41353 10.125 3.72848C10.125 4.04342 10.0065 4.34547 9.7955 4.56817C9.58452 4.79087 9.29837 4.91598 9 4.91598C8.70163 4.91598 8.41548 4.79087 8.2045 4.56817C7.99353 4.34547 7.875 4.04342 7.875 3.72848C7.875 3.41353 7.99353 3.11149 8.2045 2.88879C8.41548 2.66609 8.70163 2.54098 9 2.54098ZM4.12425 3.33423C3.62721 3.33439 3.15058 3.54287 2.79912 3.91385C2.44766 4.28484 2.25015 4.78795 2.25 5.3126C2.25 6.05717 2.64769 6.69723 3.21694 7.03804C3.48694 7.19598 3.79462 7.29098 4.12425 7.29098C4.45612 7.29098 4.76156 7.19598 5.03156 7.03804C5.3091 6.87062 5.54371 6.63419 5.715 6.34929C5.16878 5.59746 4.87368 4.67593 4.87575 3.72848V3.5082C4.64031 3.39292 4.38379 3.33354 4.12425 3.33423ZM13.8757 3.33423C13.6057 3.33423 13.3504 3.39657 13.1243 3.5082V3.72848C13.1243 4.67967 12.8317 5.5976 12.285 6.34929C12.375 6.5001 12.4718 6.61826 12.5859 6.73642C12.7041 6.85754 12.8256 6.95907 12.9684 7.03804C13.2384 7.19598 13.5439 7.29098 13.8757 7.29098C14.2054 7.29098 14.5131 7.19598 14.7831 7.03804C15.3523 6.69723 15.75 6.05717 15.75 5.3126C15.7499 4.78795 15.5523 4.28484 15.2009 3.91385C14.8494 3.54287 14.3728 3.33439 13.8757 3.33423ZM9 8.08423C7.24444 8.08423 3.75075 9.00989 3.75075 10.8535V12.041H14.2493V10.8535C14.2493 9.00989 10.7561 8.08423 9 8.08423ZM3.53306 8.51767C2.08519 8.70114 0 9.47598 0 10.8535V12.041H2.25V10.515C2.25 9.71467 2.76863 9.04907 3.53306 8.51767ZM14.4669 8.51767C15.2319 9.04907 15.75 9.71467 15.75 10.515V12.041H18V10.8535C18 9.47598 15.9148 8.70114 14.4669 8.51767ZM9 9.66598C10.1475 9.66598 11.43 10.0626 12.1725 10.4592H5.8275C6.57 10.0626 7.8525 9.66598 9 9.66598Z"
              fill="white"
              fill-opacity="0.6"
            />
          </svg>
          <strong> {props.member} members</strong>
        </div>
        <div className="teamproject-role"> {props.role}</div>
      </div>
      <Modal
        title={props.title}
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        className="teamproject-modal"
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        width={900}
      >
        <Row>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
            <div className="teamproject-modal-img">
              <img src={props.img} alt="" />
            </div>
            <div>
              <h5 className="teamproject-modal-title">Project Name</h5>
              <p className="teamproject-modal-text">{props.title}</p>
            </div>
            <div>
              <h5 className="teamproject-modal-title">Programming Languages</h5>
              <p className="teamproject-modal-text">{props.program}</p>
            </div>
            <div>
              <h5 className="teamproject-modal-title">Your Role</h5>
              <p className="teamproject-modal-text">{props.role}</p>
            </div>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
            <div className="proj-members">
              <div className="members">
                {props.members.map((member, index) => (
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
          </Col>
        </Row>
      </Modal>
    </>
  );
}

export default Teamproject;
