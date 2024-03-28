import "./Customers.scss";
import CustomerList from "../../components/CustomerList/CustomerList.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

function Customers() {
  const dataUrl = "http://localhost:8080/customers";

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      const response = await axios.get(dataUrl);
      setCustomers(response.data);
    };
    getCustomers();
  }, []);

  return (
    <>
      <div className="customers">
        <div className="customers__header">
          <h2 className="customers__title">Customer History</h2>
          <input
            type="text"
            className="customers__search"
            placeholder="Search for a customer"
          />
        </div>
        <CustomerList customers={customers} />
      </div>
    </>
  );
}

export default Customers;
