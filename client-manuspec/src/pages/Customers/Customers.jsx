import "./Customers.scss";
import CustomerList from "../../components/CustomerList/CustomerList.jsx";

function Customers() {
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
        <CustomerList />
        <CustomerList />
        <CustomerList />
        <CustomerList />
        <CustomerList />
        <CustomerList />
        <CustomerList />
        <CustomerList />
      </div>
    </>
  );
}

export default Customers;
