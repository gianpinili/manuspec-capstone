import React from "react";
import "./Reports.scss";
import ReportsHeader from "../../components/ReportsHeader/ReportsHeader.jsx";
import ReportsGuide from "../../components/ReportsGuide/ReportsGuide.jsx";
import ReportsTopLeft from "../../components/ReportsTopLeft/ReportsTopLeft.jsx";
import ReportsBottomLeft from "../../components/ReportsBottomLeft/ReportsBottomLeft.jsx";

function Reports() {
  return (
    <>
      <form className="reports">
        <h2 className="reports__title">Service Inspection Sheet</h2>
        <ReportsHeader />

        <ReportsGuide />

        <ReportsTopLeft />

        <ReportsBottomLeft />

        <div className="reports__technician">
          <p className="reports__text">Technician: </p>
          <input type="text" className="reports__tech-input" />
        </div>

        <button className="reports__finish">Finish</button>
      </form>
    </>
  );
}

export default Reports;
