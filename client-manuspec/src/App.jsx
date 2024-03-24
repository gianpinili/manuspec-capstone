import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./pages/Login/Login.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Reports from "./pages/Reports/Reports.jsx";
import Customers from "./pages/Customers/Customers.jsx";
import CustomersFile from "./pages/CustomersFile/CustomersFile.jsx";
import Profile from "./pages/Profile/Profile.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          {/* Reports/Comeplete Route (when complete button is clicked) */}
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:id" element={<CustomersFile />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
