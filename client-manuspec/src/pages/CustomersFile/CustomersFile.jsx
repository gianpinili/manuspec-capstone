import React from "react";
import "./CustomersFile.scss";
import CustomerFiles from "../../components/CustomerFiles/CustomerFiles";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function CustomersFile() {
  const dataUrl = "http://localhost:8080/customers";

  const params = useParams();
  const id = params.id;

  const [singleCustomer, setSingleCustomer] = useState({});

  //get specific customer
  useEffect(() => {
    const getSingleCustomer = async (id) => {
      try {
        const response = await axios.get(`${dataUrl}/${id}`);
        setSingleCustomer(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      getSingleCustomer(id);
    }
  }, [id]);
  return (
    <>
      <div className="customer-info">
        <div className="customer-info__left">
          <div className="customer-info__image">
            <div className="customer-info__img"></div>
          </div>
          <p className="customer-info__name">{singleCustomer.name}</p>
        </div>
        <div className="customer-info__middle">
          <p className="customer-info__number">{singleCustomer.phone}</p>
          <p className="customer-info__email">{singleCustomer.email}</p>
        </div>
        <div className="customer-info__right">
          <p className="customer-info__vin">{singleCustomer.vin}</p>
          <p className="customer-info__vehicle">{singleCustomer.car}</p>
        </div>
      </div>
      <CustomerFiles />
    </>
  );
}

export default CustomersFile;
