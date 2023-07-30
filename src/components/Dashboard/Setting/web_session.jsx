import React from "react";

function WebSession(props) {
  return (
    <>
      <div className="session-wrap">
        <div className="session-info-wrap">
          <svg
            width="117"
            height="84"
            viewBox="0 0 117 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M112.123 73.75H107.252V10.3726C107.252 5.00884 102.861 0.625 97.4976 0.625H19.5024C14.1387 0.625 9.74756 5.00884 9.74756 10.3726V73.75H4.87744C3.58475 73.7529 2.34584 74.2677 1.43177 75.1818C0.517699 76.0958 0.00289733 77.3348 0 78.6274C0 81.3056 2.19375 83.4976 4.87744 83.4976H112.123C114.808 83.4976 117 81.3038 117 78.6274C117 75.9419 114.806 73.75 112.123 73.75ZM65.8125 73.75H51.1875C50.8668 73.7532 50.5488 73.6924 50.2519 73.5711C49.955 73.4499 49.6853 73.2706 49.4586 73.0439C49.2318 72.8171 49.0526 72.5474 48.9313 72.2505C48.8101 71.9537 48.7493 71.6356 48.7524 71.3149C48.7524 69.9512 49.8237 68.8726 51.1875 68.8726H65.8125C67.1763 68.8726 68.2476 69.9512 68.2476 71.3149C68.2476 72.6787 67.1763 73.75 65.8125 73.75ZM97.4976 59.125H19.5024V15.25C19.5024 12.5718 21.6962 10.3726 24.3726 10.3726H92.6274C93.9186 10.3783 95.155 10.8943 96.0673 11.808C96.9796 12.7216 97.4937 13.9589 97.4976 15.25V59.125Z"
              fill="#6A6F77"
            />
          </svg>
          <div>
            <p className="session-ip">{props.ip}</p>
            <h5 className="session-date">signed in: {props.date}</h5>
            <div style={{ display: "flex", alignItems: "center" }} id="current">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_857_1142)">
                  <circle cx="23" cy="23" r="7" fill="#46C73B" />
                </g>
                <defs>
                  <filter
                    id="filter0_d_857_1142"
                    x="0"
                    y="0"
                    width="46"
                    height="46"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.326492 0 0 0 0 0.883738 0 0 0 0 0.382217 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_857_1142"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_857_1142"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              your current session
            </div>
          </div>
        </div>
        <div>
          <button className="session-btn">Revoke</button>
        </div>
      </div>
    </>
  );
}

export default WebSession;
