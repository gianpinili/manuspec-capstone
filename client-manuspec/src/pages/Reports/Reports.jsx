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
      </form>
    </>
  );
}

export default Reports;
