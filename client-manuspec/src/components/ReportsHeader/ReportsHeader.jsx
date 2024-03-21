import "./ReportsHeader.scss";

function ReportsHeader() {
  return (
    <div className="reports__header">
      <div className="reports__left">
        <div className="reports__fill">
          <label className="reports__header-label" htmlFor="">
            Name:{" "}
          </label>
          <input type="text" className="reports__input" />
        </div>
        <div className="reports__fill">
          <label className="reports__header-label" htmlFor="">
            RO #:{" "}
          </label>
          <input type="text" className="reports__input" />
        </div>
        <div className="reports__fill">
          <label className="reports__header-label" htmlFor="">
            Email:{" "}
          </label>
          <input type="text" className="reports__input" />
        </div>
      </div>
      <div className="reports__middle">
        <div className="reports__fill">
          <label className="reports__header-label" htmlFor="">
            Year/Model:{" "}
          </label>
          <input type="text" className="reports__input" />
        </div>
        <div className="reports__fill">
          <label className="reports__header-label" htmlFor="">
            Odometer:{" "}
          </label>
          <input type="text" className="reports__input" />
        </div>
        <div className="reports__fill">
          <label className="reports__header-label" htmlFor="">
            Phone:{" "}
          </label>
          <input type="text" className="reports__input" />
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
          <label className="reports__header-label" htmlFor="">
            VIN:{" "}
          </label>
          <input type="text" className="reports__input" />
        </div>
      </div>
    </div>
  );
}

export default ReportsHeader;
