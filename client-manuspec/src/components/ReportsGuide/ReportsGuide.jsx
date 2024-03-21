import React from "react";
import "./ReportsGuide.scss";
import { Checkbox } from "@mui/material";

function ReportsGuide() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="reports__outline">
      <div className="reports__checkbox">
        <Checkbox {...label} defaultChecked color="success" />
        <span className="reports__guide-text">Inspected & Okay</span>
      </div>

      <div className="reports__checkbox">
        <Checkbox
          {...label}
          defaultChecked
          sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
        />
        <span className="reports__guide-text">Requires Future Attention</span>
      </div>

      <div className="reports__checkbox">
        <Checkbox {...label} defaultChecked color="error" />
        <span className="reports__guide-text">
          Requires Immediate Attention
        </span>
      </div>
    </div>
  );
}

export default ReportsGuide;
