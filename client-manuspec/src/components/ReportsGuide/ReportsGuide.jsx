import React from "react";

function ReportsGuide(props) {
  return (
    <div className="reports__outline">
      {/* Green Report */}
      <div
        className="reports__green"
        onClick={() => props.setGreenClicked(!props.greenClicked)}
      >
        {props.greenClicked && <props.FaCheck />}
      </div>
      <span>Inspected & Okay</span>

      {/* Yellow Report */}
      <div
        className="reports__yellow"
        onClick={() => props.setYellowClicked(!props.yellowClicked)}
      >
        {props.yellowClicked && <props.FaCheck />}
      </div>
      <span>Requires Future Attention</span>

      {/* Red Report */}
      <div
        className="reports__red"
        onClick={() => props.setRedClicked(!props.redClicked)}
      >
        {props.redClicked && <props.FaCheck />}
      </div>
      <span>Requires Immediate Attention</span>
    </div>
  );
}

export default ReportsGuide;
