import "./CustomerList.scss";
import { Link } from "react-router-dom";

function CustomerList() {
  return (
    <>
      <div className="customers__info">
        <Link className="customers__link" to="/customers/:id">
          {" "}
          <p className="customers__name">Quinn Hughes</p>
        </Link>
        <p className="customers__vin">1FAHP3F20CL266328</p>
        <p className="customers__vehicle">2018 Subaru Impreza</p>
        <p className="customers__number">123-456-7890</p>
        <p className="customers__email">customer@email.com</p>
      </div>
    </>
  );
}

export default CustomerList;
