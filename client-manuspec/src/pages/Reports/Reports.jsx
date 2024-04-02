import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./Reports.scss";
import ReportsHeader from "../../components/ReportsHeader/ReportsHeader.jsx";
import ReportsGuide from "../../components/ReportsGuide/ReportsGuide.jsx";
import ReportsTopLeft from "../../components/ReportsTopLeft/ReportsTopLeft.jsx";
import ReportsBottomLeft from "../../components/ReportsBottomLeft/ReportsBottomLeft.jsx";
import axios from "axios";
import { Snackbar } from "@mui/material";

function Reports() {
  const formRef = useRef(null);

  const [showSaveSnackbar, setShowSaveSnackbar] = useState(false);
  const [showSaveFailedSnackbar, setShowSaveFailedSnackbar] = useState(false);

  const baseUrl = "http://localhost:8080/customers";

  // Generate PDF
  function generatePDF(event) {
    event.preventDefault();

    const form = formRef.current;
    const formRect = form.getBoundingClientRect();

    //Generates PDF proper size
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

  const [data, setData] = useState({
    name: "",
    vin: "",
    phone: "",
    email: "",
    car: "",
  });

  //post data to database
  async function saveData(event) {
    event.preventDefault();

    const formData = {
      name: data.name,
      vin: data.vin,
      phone: data.phone,
      email: data.email,
      car: data.car,
    };

    try {
      await axios.post(baseUrl, formData);
      setShowSaveSnackbar(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Error saving data:", error);
      setShowSaveFailedSnackbar(true);
    }
  }

  const handleSave = (event) => {
    const { name, value } = event.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <>
      <form ref={formRef} className="reports">
        <h2 className="reports__title">Service Inspection Sheet</h2>
        <ReportsHeader handleSave={handleSave} />
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
          <button className="reports__save" onClick={saveData}>
            Save
          </button>
          <button onClick={printPage} className="reports__print">
            Print
          </button>
        </div>
      </form>
      {/* Snackbar for save/not saved */}
      <Snackbar
        open={showSaveSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSaveSnackbar(false)}
        message="Data saved successfully!"
        anchorOrigin={{ vertical: "top", horizontal: "middle" }}
      />
      <Snackbar
        open={showSaveFailedSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSaveFailedSnackbar(false)}
        message="Please make sure all fields are filed out"
        anchorOrigin={{ vertical: "top", horizontal: "middle" }}
      />
    </>
  );
}

export default Reports;
