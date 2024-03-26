import React from "react";
import "./CustomersFile.scss";
import CustomerFiles from "../../components/CustomerFiles/CustomerFiles";

function CustomersFile() {
  return (
    <>
      <div className="customer-info">
        <div className="customer-info__left">
          <div className="customer-info__image">
            <div className="customer-info__img"></div>
          </div>
          <p className="customer-info__name">Christi Suwoo</p>
        </div>
        <div className="customer-info__middle">
          <p className="customer-info__number">604-456-7890</p>
          <p className="customer-info__email">customer@email.com</p>
        </div>
        <div className="customer-info__right">
          <p className="customer-info__vin">1FAHP3F20CL266328</p>
          <p className="customer-info__vehicle">2018 Ferrari F1</p>
        </div>
      </div>
      <CustomerFiles />
    </>
  );
}

export default CustomersFile;
