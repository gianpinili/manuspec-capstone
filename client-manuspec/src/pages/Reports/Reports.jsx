import React, { useState } from "react";
import "./Reports.scss";
import ReportsHeader from "../../components/ReportsHeader/ReportsHeader.jsx";
import ReportsGuide from "../../components/ReportsGuide/ReportsGuide.jsx";
import ReportsTopLeft from "../../components/ReportsTopLeft/ReportsTopLeft.jsx";
import { FaCheck } from "react-icons/fa";

function Reports() {
  // State variables to track click status
  const [greenClicked, setGreenClicked] = useState(false);
  const [yellowClicked, setYellowClicked] = useState(false);
  const [redClicked, setRedClicked] = useState(false);

  return (
    <>
      <form className="reports">
        <h2 className="reports__title">Service Inspection Sheet</h2>
        <ReportsHeader />

        <ReportsGuide
          greenClicked={greenClicked}
          yellowClicked={yellowClicked}
          redClicked={redClicked}
          setGreenClicked={setGreenClicked}
          setYellowClicked={setYellowClicked}
          setRedClicked={setRedClicked}
          FaCheck={FaCheck}
        />

        <ReportsTopLeft FaCheck={FaCheck} />
      </form>
    </>
  );
}

export default Reports;
