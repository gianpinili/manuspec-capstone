import "./CustomerList.scss";
import { Link } from "react-router-dom";

function CustomerList({ customers }) {
  return (
    <>
      {customers.map((customer) => (
        <div className="customers__info" key={customer.id}>
          <Link className="customers__link" to="/customers/:id">
            {" "}
            <p className="customers__name" key={customer.name}>
              {customer.name}
            </p>
          </Link>
          <p className="customers__vin" key={customer.vin}>
            {customer.vin}
          </p>
          <p className="customers__vehicle" key={customer.car}>
            {customer.car}
          </p>
          <p className="customers__number" key={customer.number}>
            {customer.number}
          </p>
          <p className="customers__email" key={customer.email}>
            {customer.email}
          </p>
        </div>
      ))}
    </>
  );
}

export default CustomerList;
