import "./Nav.scss";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
// import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

function Nav() {
  return (
    <>
      {/* <nav className={`nav ${isDarkMode ? "dark-mode" : ""}`}> */}
      <nav className="nav">
        <Link to="/dashboard">
          <img className="nav__logo" src={Logo} alt="" />
        </Link>
        <div className="nav__links">
          <ul className="nav__list">
            <Link className="nav__link" to="/dashboard">
              <li className="nav__item">Dashboard</li>
            </Link>
            <Link className="nav__link" to="/reports">
              <li className="nav__item">Report</li>
            </Link>
            <Link className="nav__link" to="/customers">
              <li className="nav__item">Customer</li>
            </Link>
            <Link className="nav__link" to="/profile">
              <li className="nav__item">Profile</li>
            </Link>
          </ul>
          <Link to="/">
            <button className="nav__button">gianpinili</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
