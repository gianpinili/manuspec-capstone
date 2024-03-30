import "./Nav.scss";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="nav">
        <Link to="/dashboard">
          <img className="nav__logo" src={Logo} alt="" />
        </Link>
        <div className="nav__links">
          <ul className="nav__list">
            <NavLink className="nav__link" to="/dashboard">
              <li className="nav__item">Dashboard</li>
            </NavLink>
            <NavLink className="nav__link" to="/reports">
              <li className="nav__item">Report</li>
            </NavLink>
            <NavLink className="nav__link" to="/customers">
              <li className="nav__item">Customer</li>
            </NavLink>
            <NavLink className="nav__link" to="/profile">
              <li className="nav__item">Profile</li>
            </NavLink>
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
