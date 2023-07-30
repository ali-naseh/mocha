import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

const Error500 = () => {
  return (
    <>
      <div className="error-mainwrap">
        <Row>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
            <div className="error-wrap">
              <div className="error-title">500 Internal Server Error</div>
              <div className="error-info">
                The requested page or resource cannot be accessed at the moment
                due to a server-side issue or unexpected error. We apologize for
                the inconvenience.
              </div>
              <Link to={"/"} className="error-link">
                Go back to homepage
              </Link>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            <div>
              <svg
                width="300"
                height="506"
                viewBox="0 0 660 506"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="error-svg"
              >
                <path
                  d="M230.641 302.449C243.377 300.527 256.349 303.787 266.708 311.513C283.375 324.45 296.043 357.348 302.591 403.41C309.14 449.471 312.791 469.33 351.286 475.881C389.781 482.431 482.03 479.774 537.13 478.476C592.231 477.178 589.681 425.411 543.556 420.24C497.432 415.069 465.485 427.491 417.362 416.738C369.238 405.985 460.202 391.75 529.439 402.112C598.677 412.474 629.399 415.049 666.589 411.176"
                  stroke="#56707D"
                  stroke-width="2.51308"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M230.641 233.563C230.641 233.563 267.993 233.851 278.234 272.703C288.475 311.555 292.33 365.897 293.615 408.663C294.901 451.429 296.186 487.623 344.881 497.964C393.575 508.305 525.604 504.432 561.488 496.666C597.371 488.9 637.111 453.962 607.633 446.196C578.155 438.43 537.13 446.196 552.553 456.496C567.975 466.796 608.959 464.262 657.653 457.794"
                  stroke="#56707D"
                  stroke-width="2.51308"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M238.311 368.678C238.311 368.678 261.138 366.618 270.053 392.719C278.968 418.819 268.013 424.772 273.031 437.791C278.05 450.811 309.303 438.657 309.16 449.451C309.017 459.298 296.655 462.079 225.418 457.835C132.271 452.294 70.643 466.858 75.6002 475.881C80.5574 484.904 154.977 477.941 137.106 491.908C119.236 505.874 75.6002 489.848 41.8586 488.9C8.11695 487.952 2.16016 495.904 2.16016 495.904"
                  stroke="#56707D"
                  stroke-width="2.51308"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M241.064 0.679932H16.7868C12.7759 0.679932 9.52441 3.96329 9.52441 8.01353V437.07C9.52441 441.121 12.7759 444.404 16.7868 444.404H241.064C245.075 444.404 248.327 441.121 248.327 437.07V8.01353C248.327 3.96329 245.075 0.679932 241.064 0.679932Z"
                  fill="#263238"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M242.513 67.1355H15.2363V237.106H242.513V67.1355Z"
                  fill="#616161"
                />
                <path
                  d="M242.513 264.731H15.2363V434.701H242.513V264.731Z"
                  fill="#616161"
                />
                <path
                  d="M214.32 285.434H85.29V418.304H214.32V285.434Z"
                  fill="#2C92F8"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M214.32 86.1287H85.29V118.924H214.32V86.1287Z"
                  fill="#2C92F8"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M214.32 149.103H85.29V181.898H214.32V149.103Z"
                  fill="#2C92F8"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M209.996 70.9465L207.507 77.8475H93.2055L90.7168 70.9465H66.502V101.27H90.7168L93.2055 94.3687H207.507L209.996 101.27H237.413V70.9465H209.996Z"
                  fill="#263238"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M209.996 104.03L207.507 110.91H93.2055L90.7168 104.03H66.502V134.333H90.7168L93.2055 127.452H207.507L209.996 134.333H237.413V104.03H209.996Z"
                  fill="#263238"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M209.996 137.093L207.507 143.994H93.2055L90.7168 137.093H66.502V167.416H90.7168L93.2055 160.515H207.507L209.996 167.416H237.413V137.093H209.996Z"
                  fill="#263238"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M209.996 170.156L207.507 177.057H93.2055L90.7168 170.156H66.502V200.479H90.7168L93.2055 193.599H207.507L209.996 200.479H237.413V170.156H209.996Z"
                  fill="#263238"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M209.996 203.24L207.507 210.12H93.2055L90.7168 203.24H66.502V233.563H90.7168L93.2055 226.662H207.507L209.996 233.563H237.413V203.24H209.996Z"
                  fill="#263238"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M209.996 269.386L207.507 276.267H93.2055L90.7168 269.386H66.502V299.689H90.7168L93.2055 292.808H207.507L209.996 299.689H237.413V269.386H209.996Z"
                  fill="#263238"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M209.996 302.449L207.507 309.35H93.2055L90.7168 302.449H66.502V332.772H90.7168L93.2055 325.892H207.507L209.996 332.772H237.413V302.449H209.996Z"
                  fill="#263238"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M209.996 335.533L207.507 342.413H93.2055L90.7168 335.533H66.502V365.836H90.7168L93.2055 358.955H207.507L209.996 365.836H237.413V335.533H209.996Z"
                  fill="#263238"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M209.996 368.596L207.507 375.497H93.2055L90.7168 368.596H66.502V398.919H90.7168L93.2055 392.018H207.507L209.996 398.919H237.413V368.596H209.996Z"
                  fill="#263238"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M209.996 401.679L207.507 408.56H93.2055L90.7168 401.679H66.502V431.982H90.7168L93.2055 425.102H207.507L209.996 431.982H237.413V401.679H209.996Z"
                  fill="#263238"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M237.373 242.4H19.8066V263.103H237.373V242.4Z"
                  fill="white"
                />
                <path
                  d="M38.166 252.535C38.166 251.391 37.8298 250.271 37.1999 249.319C36.57 248.368 35.6747 247.626 34.6273 247.187C33.5798 246.749 32.4272 246.635 31.3152 246.858C30.2033 247.081 29.1818 247.633 28.3802 248.442C27.5785 249.252 27.0325 250.283 26.8113 251.406C26.5901 252.529 26.7037 253.693 27.1375 254.751C27.5714 255.808 28.3061 256.712 29.2488 257.348C30.1915 257.985 31.2998 258.324 32.4336 258.324C33.1864 258.324 33.9318 258.174 34.6273 257.883C35.3228 257.592 35.9547 257.166 36.487 256.629C37.0193 256.091 37.4415 255.453 37.7296 254.751C38.0177 254.048 38.166 253.296 38.166 252.535Z"
                  fill="#263238"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M51.5283 258.324C54.6942 258.324 57.2607 255.732 57.2607 252.535C57.2607 249.338 54.6942 246.747 51.5283 246.747C48.3624 246.747 45.7959 249.338 45.7959 252.535C45.7959 255.732 48.3624 258.324 51.5283 258.324Z"
                  fill="#2C92F8"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M76.3554 252.535C76.3554 251.391 76.0192 250.271 75.3893 249.319C74.7595 248.368 73.8642 247.626 72.8167 247.187C71.7693 246.749 70.6167 246.635 69.5047 246.858C68.3927 247.081 67.3713 247.633 66.5696 248.442C65.7679 249.252 65.222 250.283 65.0008 251.406C64.7796 252.529 64.8931 253.693 65.327 254.751C65.7609 255.808 66.4956 256.712 67.4383 257.348C68.381 257.985 69.4893 258.324 70.623 258.324C72.1433 258.324 73.6014 257.714 74.6764 256.629C75.7515 255.543 76.3554 254.071 76.3554 252.535Z"
                  fill="#263238"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M237.373 43.9604H19.8066V64.6635H237.373V43.9604Z"
                  fill="white"
                />
                <path
                  d="M38.166 54.137C38.166 52.9921 37.8298 51.8729 37.1999 50.921C36.57 49.9691 35.6747 49.2272 34.6273 48.789C33.5798 48.3509 32.4272 48.2363 31.3152 48.4596C30.2033 48.683 29.1818 49.2343 28.3802 50.0438C27.5785 50.8534 27.0325 51.8848 26.8113 53.0077C26.5901 54.1306 26.7037 55.2945 27.1375 56.3522C27.5714 57.4099 28.3061 58.314 29.2488 58.95C30.1915 59.5861 31.2998 59.9256 32.4336 59.9256C33.1864 59.9256 33.9318 59.7759 34.6273 59.485C35.3228 59.1941 35.9547 58.7677 36.487 58.2302C37.0193 57.6926 37.4415 57.0545 37.7296 56.3522C38.0177 55.6499 38.166 54.8972 38.166 54.137Z"
                  fill="white"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M57.2402 54.137C57.2402 52.9921 56.904 51.8729 56.2741 50.921C55.6442 49.9691 54.749 49.2272 53.7015 48.789C52.654 48.3509 51.5014 48.2363 50.3895 48.4596C49.2775 48.683 48.2561 49.2343 47.4544 50.0438C46.6527 50.8534 46.1067 51.8848 45.8855 53.0077C45.6644 54.1306 45.7779 55.2945 46.2117 56.3522C46.6456 57.4099 47.3804 58.314 48.323 58.95C49.2657 59.5861 50.374 59.9256 51.5078 59.9256C53.0281 59.9256 54.4862 59.3157 55.5612 58.2302C56.6362 57.1446 57.2402 55.6722 57.2402 54.137Z"
                  fill="#2C92F8"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M76.3554 54.137C76.3554 52.9921 76.0192 51.8729 75.3893 50.921C74.7595 49.9691 73.8642 49.2272 72.8167 48.789C71.7693 48.3509 70.6167 48.2363 69.5047 48.4596C68.3927 48.683 67.3713 49.2343 66.5696 50.0438C65.7679 50.8534 65.222 51.8848 65.0008 53.0077C64.7796 54.1306 64.8931 55.2945 65.327 56.3522C65.7609 57.4099 66.4956 58.314 67.4383 58.95C68.381 59.5861 69.4893 59.9256 70.623 59.9256C72.1433 59.9256 73.6014 59.3157 74.6764 58.2302C75.7515 57.1446 76.3554 55.6722 76.3554 54.137Z"
                  fill="white"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M237.373 17.3247H19.8066V38.0277H237.373V17.3247Z"
                  fill="white"
                />
                <path
                  d="M38.166 27.46C38.166 26.3151 37.8298 25.1959 37.1999 24.244C36.57 23.2921 35.6747 22.5502 34.6273 22.112C33.5798 21.6739 32.4272 21.5593 31.3152 21.7826C30.2033 22.006 29.1818 22.5573 28.3802 23.3668C27.5785 24.1764 27.0325 25.2078 26.8113 26.3307C26.5901 27.4536 26.7037 28.6175 27.1375 29.6752C27.5714 30.7329 28.3061 31.637 29.2488 32.273C30.1915 32.9091 31.2998 33.2486 32.4336 33.2486C33.1864 33.2486 33.9318 33.0989 34.6273 32.808C35.3228 32.5171 35.9547 32.0907 36.487 31.5532C37.0193 31.0156 37.4415 30.3775 37.7296 29.6752C38.0177 28.9729 38.166 28.2202 38.166 27.46Z"
                  fill="#2C92F8"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M57.2402 27.46C57.2402 26.3151 56.904 25.1959 56.2741 24.244C55.6442 23.2921 54.749 22.5502 53.7015 22.112C52.654 21.6739 51.5014 21.5593 50.3895 21.7826C49.2775 22.006 48.2561 22.5573 47.4544 23.3668C46.6527 24.1764 46.1067 25.2078 45.8855 26.3307C45.6644 27.4536 45.7779 28.6175 46.2117 29.6752C46.6456 30.7329 47.3804 31.637 48.323 32.273C49.2657 32.9091 50.374 33.2486 51.5078 33.2486C53.0281 33.2486 54.4862 32.6387 55.5612 31.5532C56.6362 30.4676 57.2402 28.9952 57.2402 27.46Z"
                  fill="#263238"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M76.3554 27.46C76.3554 26.3151 76.0192 25.1959 75.3893 24.244C74.7595 23.2921 73.8642 22.5502 72.8167 22.112C71.7693 21.6739 70.6167 21.5593 69.5047 21.7826C68.3927 22.006 67.3713 22.5573 66.5696 23.3668C65.7679 24.1764 65.222 25.2078 65.0008 26.3307C64.7796 27.4536 64.8931 28.6175 65.327 29.6752C65.7609 30.7329 66.4956 31.637 67.4383 32.273C68.381 32.9091 69.4893 33.2486 70.623 33.2486C72.1433 33.2486 73.6014 32.6387 74.6764 31.5532C75.7515 30.4676 76.3554 28.9952 76.3554 27.46Z"
                  fill="#263238"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M56.241 71.4614H20.3574V86.9938H56.241V71.4614Z"
                  fill="#263238"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M56.241 105.101H20.3574V120.634H56.241V105.101Z"
                  fill="#263238"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M56.241 138.762H20.3574V154.294H56.241V138.762Z"
                  fill="#2C92F8"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M56.241 172.402H20.3574V187.934H56.241V172.402Z"
                  fill="#2C92F8"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M56.241 206.062H20.3574V221.594H56.241V206.062Z"
                  fill="#2C92F8"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M56.241 269.036H20.3574V284.568H56.241V269.036Z"
                  fill="#2C92F8"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M56.241 302.697H20.3574V318.229H56.241V302.697Z"
                  fill="#263238"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M56.241 336.336H20.3574V351.869H56.241V336.336Z"
                  fill="#2C92F8"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M56.241 369.997H20.3574V385.529H56.241V369.997Z"
                  fill="#263238"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M56.241 403.636H20.3574V419.169H56.241V403.636Z"
                  fill="#2C92F8"
                  stroke="#263238"
                  stroke-width="1.25654"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Error500;
