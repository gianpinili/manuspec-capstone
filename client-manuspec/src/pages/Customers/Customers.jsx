import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Customers.scss";
import CustomerList from "../../components/CustomerList/CustomerList.jsx";

function Customers() {
  const dataUrl = "http://localhost:8080/customers";

  const [customers, setCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch all customers
  useEffect(() => {
    const getCustomers = async () => {
      try {
        const response = await axios.get(dataUrl);
        const sortedCustomers = response.data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setCustomers(sortedCustomers);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };
    getCustomers();
  }, []);

  // Filter customers based on search query
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="customers">
      <div className="customers__header">
        <h2 className="customers__title">Customer History</h2>
        <input
          type="text"
          className="customers__search"
          placeholder="Search for a customer"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <CustomerList customers={filteredCustomers} />
    </div>
  );
}

export default Customers;
