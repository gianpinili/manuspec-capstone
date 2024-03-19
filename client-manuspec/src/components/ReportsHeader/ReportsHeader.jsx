import "./ReportsHeader.scss";

function ReportsHeader() {
  return (
    <div className="reports__header">
      <div className="reports__left">
        <div>
          <label htmlFor="">Name: </label>
          <input type="text" className="reports__input" />
        </div>
        <div>
          <label htmlFor="">RO #: </label>
          <input type="text" className="reports__input" />
        </div>
        <div>
          <label htmlFor="">Email: </label>
          <input type="text" className="reports__input" />
        </div>
      </div>
      <div className="reports__middle">
        <div>
          <label htmlFor="">Year/Model: </label>
          <input type="text" className="reports__input" />
        </div>
        <div>
          <label htmlFor="">Odometer: </label>
          <input type="text" className="reports__input" />
        </div>
        <div>
          <label htmlFor="">Phone: </label>
          <input type="text" className="reports__input" />
        </div>
      </div>
      <div className="reports__right">
        <div>
          <label htmlFor="">Date: </label>
          <input type="text" className="reports__input" />
        </div>
        <div>
          <label htmlFor="">VIN: </label>
          <input type="text" className="reports__input" />
        </div>
      </div>
    </div>
  );
}

export default ReportsHeader;
