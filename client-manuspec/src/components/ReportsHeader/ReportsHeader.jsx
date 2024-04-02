import "./ReportsHeader.scss";

function ReportsHeader({ handleSave }) {
  return (
    <div className="reports__header">
      <div className="reports__left">
        <div className="reports__fill">
          <label className="reports__header-label" htmlFor="name">
            Name:{" "}
          </label>
          <input
            type="text"
            className="reports__input"
            id="name"
            name="name"
            onChange={handleSave}
          />
        </div>
        <div className="reports__fill">
          <label className="reports__header-label" htmlFor="">
            RO #:{" "}
          </label>
          <input type="text" className="reports__input" />
        </div>
        <div className="reports__fill">
          <label className="reports__header-label" htmlFor="email">
            Email:{" "}
          </label>
          <input
            type="text"
            className="reports__input"
            id="email"
            name="email"
            onChange={handleSave}
          />
        </div>
      </div>
      <div className="reports__middle">
        <div className="reports__fill">
          <label className="reports__header-label" htmlFor="car">
            Year/Model:{" "}
          </label>
          <input
            type="text"
            className="reports__input"
            id="car"
            name="car"
            onChange={handleSave}
          />
        </div>
        <div className="reports__fill">
          <label className="reports__header-label" htmlFor="">
            Odometer:{" "}
          </label>
          <input type="text" className="reports__input" />
        </div>
        <div className="reports__fill">
          <label className="reports__header-label" htmlFor="phone">
            Phone:{" "}
          </label>
          <input
            type="text"
            className="reports__input"
            id="phone"
            name="phone"
            onChange={handleSave}
          />
        </div>
      </div>
      <div className="reports__right">
        <div className="reports__fill">
          <label className="reports__header-label" htmlFor="">
            Date:{" "}
          </label>
          <input type="text" className="reports__input" />
        </div>
        <div className="reports__fill">
          <label className="reports__header-label" htmlFor="vin">
            VIN:{" "}
          </label>
          <input
            type="text"
            className="reports__input"
            id="vin"
            name="vin"
            onChange={handleSave}
          />
        </div>
      </div>
    </div>
  );
}

export default ReportsHeader;
