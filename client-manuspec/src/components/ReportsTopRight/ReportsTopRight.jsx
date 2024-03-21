import "./ReportsTopRight.scss";
import { Checkbox } from "@mui/material";

function ReportsTopRight() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <div className="reports__top-right">
        <p className="reports__right-text">Operating Systems</p>
        <div className="reports__group">
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
          />
          <span className="reports__text">Engine Air Filter</span>
        </div>
        <div className="reports__group">
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
          />
          <span className="reports__text">Engine Drive Belt(s)</span>
        </div>
        <div className="reports__group">
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
          />
          <span className="reports__text">Cooling system hoses and lines</span>
        </div>
        <div className="reports__group">
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
          />
          <span className="reports__text">Cabin air filter</span>
        </div>
        <div className="reports__group">
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
          />
          <span className="reports__text">A/C output </span>
        </div>
        <div className="reports__group">
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
          />
          <span className="reports__text">Spark Plugs</span>
        </div>
        <div className="reports__group">
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
          />
          <span className="reports__text">Fuel System/Throttle Body</span>
        </div>
        <div className="reports__group">
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
          />
          <span className="reports__text">Driveline Fluids</span>
        </div>
        <div className="reports__group">
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
          />
          <span className="reports__text">Suspension - Shocks and struts</span>
        </div>
        <div className="reports__group">
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
          />
          <span className="reports__text">Exhaust system </span>
        </div>
        <div className="reports__group">
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
          />
          <span className="reports__text">
            Engine or transmission oil leaks
          </span>
        </div>
        <div className="reports__group">
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
          />
          <span className="reports__text">other leaks</span>
        </div>
        <div className="reports__group">
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
          />
          <span className="reports__text">Drive axle/boots</span>
        </div>
        <div className="reports__group">
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
          />
          <Checkbox
            className="reports__check"
            {...label}
            sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
          />
          <span className="reports__text">Other (Please comment)</span>
        </div>
        <div className="reports__top-comments">
          <label htmlFor="comments" className="reports__label">
            Comments:
          </label>
          <textarea
            className="reports__textarea"
            name="comments"
            id=""
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default ReportsTopRight;
