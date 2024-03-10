import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* NAV COMPONENT */}
        <Routes>
          <Route>
            {/* Login Route (Landing Page) */}
            {/* Dashboard Route (When user logs in) */}
            {/* Reports Route (When a link is clicked to create reports) */}
            {/* Reports/Comeplete Route (when complete button is clicked) */}
            {/* Customers Route (when customers link is clicked)  */}
            {/* Customer/:customerID Route (check customer profile) */}
            {/* Profile Route (check user profile - previous reports) */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
