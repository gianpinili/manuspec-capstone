import "./ReportsTopLeft.scss";
import Car from "../../assets/images/overhead-inspect.jpg";
import ReportsTopRight from "../ReportsTopRight/ReportsTopRight";
import { Checkbox } from "@mui/material";

function ReportsTopLeft() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <div className="reports__top">
        <div className="reports__top-left">
          <p className="reports__subtitle">Body Condition | Lights | Tires</p>
          <div className="reports__front-tires">
            <div className="reports__front-left">
              <p className="reports__left-text">Left Front</p>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
                />
                <input type="text" className="reports__input-tire" />
              </div>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
                />
                <input type="text" className="reports__input-tire" />
              </div>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
                />
                <input type="text" className="reports__input-tire" />
              </div>
            </div>
            <div className="reports__headlights">
              <Checkbox
                {...label}
                sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
              />
              <Checkbox
                {...label}
                sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
              />
              <Checkbox
                {...label}
                sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
              />
              <span>Headlights</span>
            </div>
            <div className="reports__front-right">
              <p className="reports__left-text">Right Front</p>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
                />
                <input type="text" className="reports__input-tire" />
              </div>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
                />
                <input type="text" className="reports__input-tire" />
              </div>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
                />
                <input type="text" className="reports__input-tire" />
              </div>
            </div>
          </div>
          <img src={Car} className="reports__car" alt="" />
          <div className="reports__rear-tires">
            <div className="reports__rear-left">
              <p className="reports__left-text">Left Rear</p>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
                />
                <input type="text" className="reports__input-tire" />
              </div>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
                />
                <input type="text" className="reports__input-tire" />
              </div>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
                />
                <input type="text" className="reports__input-tire" />
              </div>
            </div>
            <div className="reports__rear-left">
              <p className="reports__left-text">Right Rear</p>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
                />
                <input type="text" className="reports__input-tire" />
              </div>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
                />
                <input type="text" className="reports__input-tire" />
              </div>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
                />
                <input type="text" className="reports__input-tire" />
              </div>
            </div>
          </div>
          <div className="reports__rearlights">
            <div className="reports__signals">
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
              <span className="reports__lights-text">Turn Signals</span>
            </div>
            <div className="reports__taillights">
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
              <span className="reports__lights-text">Tail Lights </span>
            </div>
          </div>
          <div className="reports__needed">
            <div className="reports__rotation">
              <Checkbox className="reports__check" />
              <p className="reports__text-needed">Tire Rotation Needed</p>
            </div>
            <div className="reports__rotation">
              <Checkbox className="reports__check" />
              <p className="reports__text-needed">Alignment Needed</p>
            </div>
            <div className="reports__rotation">
              <Checkbox className="reports__check" />
              <p className="reports__text-needed">Wheel Balance Needed</p>
            </div>
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
        <ReportsTopRight />
      </div>
    </>
  );
}

export default ReportsTopLeft;
