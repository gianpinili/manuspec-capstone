import "./Dashboard.scss";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/dashboard-card.jpg";
import image2 from "../../assets/images/dashboard-card2.jpg";
import image3 from "../../assets/images/dashboard-card3.jpg";

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard__links">
          <Link to="/reports" className="dashboard__link">
            Create Report
          </Link>
          <Link to="/customers" className="dashboard__link">
            Customers
          </Link>
          <Link to="/profile" className="dashboard__link">
            Profile
          </Link>
        </div>
        <div className="dashboard__cards">
          <Link to={"/reports"}>
            <img className="dashboard__image" src={image1} alt="" />
          </Link>
          <Link to={"/reports"}>
            <img className="dashboard__image" src={image2} alt="" />
          </Link>
          <Link to={"/reports"}>
            <img className="dashboard__image" src={image3} alt="" />
          </Link>
        </div>
      </div>
      {/* <div className="dashboard__reports">
        <p className="dashboard__text">Service Report</p>
        <p className="dashboard__text">Service Report</p>
        <p className="dashboard__text">Service Report</p>
      </div> */}
    </>
  );
}

export default Dashboard;
