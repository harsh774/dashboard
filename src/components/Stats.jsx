import React from "react";
import { Avatar, Paper } from "@mui/material";

function StatCard({ title, value, change, icon, propcolor }) {
  return (
    <Paper style={{ height: "130px" }}>
      <div
        style={{
          padding: "3%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          alt={title}
          src={icon}
          style={{
            marginLeft: "0.5em",
            marginTop: "0.3em",
            marginRight: "0.8em",
          }}
          sx={{ width: 100, height: 100 }}
        />
        <div>
          <div style={{ fontSize: "0.8em", fontWeight: "lighter" }}>
            {title}
          </div>
          <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>{value}</div>
          <div style={{ fontSize: "0.8em" }}>
            <span style={{ color: propcolor, fontWeight: "bold" }}>
              {change}
            </span>{" "}
            this month
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default StatCard;
