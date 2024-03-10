import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./pages/Login/Login.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Reports from "./pages/Reports/Reports.jsx";
import Customers from "./pages/Customers/Customers.jsx";
// import { useState } from "react";

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  return (
    <>
      <BrowserRouter>
        {/* <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> */}
        {/* <div className="app__container"> */}
        <Nav />
        <Routes>
          {/* Login Route (Landing Page) */}
          <Route path="/" element={<Login />} />
          {/* Dashboard Route (When user logs in) */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Reports Route (When a link is clicked to create reports) */}
          <Route path="/reports" element={<Reports />} />
          {/* Reports/Comeplete Route (when complete button is clicked) */}
          {/* Customers Route (when customers link is clicked)  */}
          <Route path="/customers" element={<Customers />} />
          {/* Customer/:customerID Route (check customer profile) */}
          {/* Profile Route (check user profile - previous reports) */}
        </Routes>
        <Footer />
        {/* </div> */}
      </BrowserRouter>
    </>
  );
}

export default App;
