import "./ReportsBottomLeft.scss";
import ReportsBottomRight from "../ReportsBottomRight/ReportsBottomRight";
import { Checkbox } from "@mui/material";

function ReportsBottomLeft() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <div className="reports__bottom">
        <div className="reports__bottom-left">
          <div className="reports__top-section">
            <div className="reports__topleft">
              <p className="reports__text">Wipers</p>
              <div className="reports__group">
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
                <span className="reports__text">Front Wipers</span>
              </div>
              <div className="reports__group">
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
                <span className="reports__text">Rear (If Applicable)</span>
              </div>
              <div className="reports__group">
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
                <span className="reports__text">Windshield Condition</span>
              </div>
            </div>
            <div className="reports__topright">
              <p className="reports__text">Battery</p>
              <div className="reports__group">
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
                <span className="reports__text">Battery Condition</span>
              </div>
              <div className="reports__group">
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
                <span className="reports__text">Cables & Connections</span>
              </div>
            </div>
          </div>
          <div className="reports__top-comments">
            <label htmlFor="comments" className="reports__label">
              Comments:
              <textarea name="comments" id=""></textarea>
            </label>
          </div>
          <div className="reports__bot-section">
            <p className="reports__text">Vital Fluids</p>
            <div className="reports__group">
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
              <span className="reports__text">Engine Oil</span>
            </div>
            <div className="reports__group">
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
              <span className="reports__text">Transmission Fluid</span>
            </div>
            <div className="reports__group">
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
              <span className="reports__text">Power Steering Fluid</span>
            </div>
            <div className="reports__group">
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
              <span className="reports__text">Coolant</span>
            </div>
            <div className="reports__group">
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
              <span className="reports__text">Brake Fluid</span>
            </div>
            <div className="reports__group">
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
              <span className="reports__text">Washer Fluid</span>
            </div>
            <div className="reports__group">
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
              <span className="reports__text">High Voltage Coolant</span>
            </div>
            <div className="reports__top-comments">
              <label htmlFor="comments" className="reports__label">
                Comments:
                <textarea name="comments" id=""></textarea>
              </label>
            </div>
          </div>
        </div>

        <ReportsBottomRight />
      </div>
    </>
  );
}

export default ReportsBottomLeft;
