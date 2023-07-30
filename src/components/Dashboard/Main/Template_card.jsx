import React from "react";

function TemplateCard(props) {
  // open new project modal with template on this card
  const tryHandler = () => {
    props.onTry(props.name);
  };

  return (
    <>
      <div className="template-card-wrap">
        <h5 className="template-card-view">
          <svg
            style={{ paddingRight: "2px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="10"
            fill="currentColor"
            class="bi bi-eye-fill"
            viewBox="0 0 16 16"
          >
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
          </svg>
          {props.view}
        </h5>
        <img src={props.img} alt="" />
        <h3 className="template-card-name">{props.name}</h3>
        <button className="template-card-btn" onClick={tryHandler}>
          Try Out
        </button>
      </div>
    </>
  );
}

export default TemplateCard;
