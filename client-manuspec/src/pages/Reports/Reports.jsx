import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./Reports.scss";
import ReportsHeader from "../../components/ReportsHeader/ReportsHeader.jsx";
import ReportsGuide from "../../components/ReportsGuide/ReportsGuide.jsx";
import ReportsTopLeft from "../../components/ReportsTopLeft/ReportsTopLeft.jsx";
import ReportsBottomLeft from "../../components/ReportsBottomLeft/ReportsBottomLeft.jsx";

function Reports() {
  const formRef = useRef(null);

  // Generate PDF
  function generatePDF(event) {
    event.preventDefault();

    const form = formRef.current;
    const formRect = form.getBoundingClientRect();

    html2canvas(form, {
      scrollY: -window.scrollY,
      width: formRect.width,
      height: formRect.height,
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait", // Set to landscape if needed
        unit: "mm",
        format: [formRect.width, formRect.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, formRect.width, formRect.height);
      pdf.save("service-inspection-sheet.pdf");
    });
  }

  //Print page
  const printPage = (event) => {
    event.preventDefault();
    window.print();
  };

  return (
    <>
      <form ref={formRef} className="reports">
        <h2 className="reports__title">Service Inspection Sheet</h2>
        <ReportsHeader />
        <ReportsGuide />
        <ReportsTopLeft />
        <ReportsBottomLeft />
        <div className="reports__technician">
          <p className="reports__text">Technician: </p>
          <input type="text" className="reports__tech-input" />
        </div>
        <div className="reports__buttons">
          <button className="reports__finish" onClick={generatePDF}>
            Finish
          </button>
          <button className="reports__save">Save</button>
          <button onClick={printPage} className="reports__print">
            Print
          </button>
        </div>
      </form>
    </>
  );
}

export default Reports;
