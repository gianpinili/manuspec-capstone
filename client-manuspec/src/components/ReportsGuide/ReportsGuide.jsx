import React from "react";
import { Checkbox } from "@mui/material";

function ReportsGuide() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="reports__outline">
      <div className="reports__checkbox">
        <Checkbox {...label} defaultChecked color="success" />
        <span>Inspected & Okay</span>
      </div>

      <div className="reports__checkbox">
        <Checkbox
          {...label}
          defaultChecked
          sx={{ color: "yellow", "&.Mui-checked": { color: "yellow" } }}
        />
        <span>Requires Future Attention</span>
      </div>

      <div className="reports__checkbox">
        <Checkbox {...label} defaultChecked color="error" />
        <span>Requires Immediate Attention</span>
      </div>
    </div>
  );
}

export default ReportsGuide;
