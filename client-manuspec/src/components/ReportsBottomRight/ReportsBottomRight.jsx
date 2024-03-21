import "./ReportsBottomRight.scss";
import { Checkbox } from "@mui/material";
import Brakes from "../../assets/images/brakes.jpg";

function ReportsBottomRight() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <div className="reports__bottom-right">
        <div className="reports__bot-right">
          <p className="reports__subtitle">Brake System</p>
          <div className="reports__front-brakes">
            <div className="reports__frontleft">
              <p className="reports__subtext">Left Front</p>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
                />
                <span className="reports__subtext">50% or more</span>
              </div>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
                />
                <span className="reports__subtext">20%-50%</span>
              </div>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
                />
                <span className="reports__subtext">20% or less</span>
              </div>
            </div>
            <div className="reports__frontright">
              <p className="reports__subtext">Right Front</p>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
                />
                <span className="reports__subtext">50% or more</span>
              </div>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
                />
                <span className="reports__subtext">20%-50%</span>
              </div>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
                />
                <span className="reports__subtext">20% or less</span>
              </div>
            </div>
          </div>
          <div className="reports__image">
            <img src={Brakes} className="reports__brakes" alt="" />
          </div>
          <div className="reports__rear-brakes">
            <div className="reports__rear-left">
              <p className="reports__subtext">Left Rear</p>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
                />
                <span className="reports__subtext">50% or more</span>
              </div>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
                />
                <span className="reports__subtext">20%-50%</span>
              </div>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
                />
                <span className="reports__subtext">20% or less</span>
              </div>
            </div>
            <div className="reports__rear-left">
              <p className="reports__subtext">Right Rear</p>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
                />
                <span className="reports__subtext">50% or more</span>
              </div>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
                />
                <span className="reports__subtext">20%-50%</span>
              </div>
              <div>
                <Checkbox
                  {...label}
                  sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
                />
                <span className="reports__subtext">20% or less</span>
              </div>
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
      </div>
    </>
  );
}

export default ReportsBottomRight;
