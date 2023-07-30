import React from "react";

function Progress(props) {
  {
    var class_per = `progress-temp-${props.complete}`;
  }
  return (
    <>
      <div className="progress-wrap">
        <div className="progress-info">
          <strong>{props.name}</strong>
          <strong>{props.complete}%</strong>
        </div>
        <div id="progress-complete" className="progress-percent">
          <div className={class_per}></div>
        </div>
      </div>
    </>
  );
}

export default Progress;
