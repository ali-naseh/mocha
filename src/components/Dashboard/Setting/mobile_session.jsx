import React from "react";

function MobileSession(props) {
  return (
    <>
      <div className="session-wrap">
        <div className="session-info-wrap">
          <svg
            width="103"
            height="103"
            viewBox="0 0 103 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M72.9561 81.544H30.0437V21.4564H72.9561M72.9561 4.29401H30.0437C28.9153 4.28955 27.7971 4.50841 26.7536 4.938C25.7101 5.36758 24.7619 5.99939 23.9637 6.79704C23.1654 7.59468 22.5329 8.54238 22.1026 9.58556C21.6722 10.6287 21.4525 11.7467 21.4561 12.8752V90.1252C21.4574 92.4018 22.3628 94.5847 23.9732 96.1939C25.5836 97.8031 27.7671 98.7068 30.0437 98.7064H72.9561C75.2327 98.7068 77.4163 97.8031 79.0267 96.1939C80.6371 94.5847 81.5424 92.4018 81.5437 90.1252V12.8752C81.5437 11.7478 81.3215 10.6314 80.8899 9.58983C80.4583 8.5483 79.8256 7.60203 79.0281 6.80511C78.2306 6.00819 77.2838 5.37623 76.242 4.94537C75.2001 4.5145 74.0835 4.29317 72.9561 4.29401Z"
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

export default MobileSession;
