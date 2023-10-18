import React from "react";
import { Paper, Typography } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import sampleData from "../utils/data";

const COLORS = sampleData.COLORS;

const PieChartComponent = () => {
  const newCustomers = sampleData.pieData[0].value;
  const oldCustomers = sampleData.pieData[1].value;
  const percentageIncrease = (
    ((newCustomers - oldCustomers) / oldCustomers) *
    100
  ).toFixed(2);
  const percentage = Math.abs(percentageIncrease);

  return (
    <Paper style={{ height: "300px" }}>
      <div style={{}}>
        <div style={{ display: "block", height: "80px", padding: "20px" }}>
          <Typography
            component="div"
            variant="h5"
            style={{ fontWeight: "bold" }}
          >
            Customers
          </Typography>
          <Typography fontSize={13} color={"gray"}>
            Customers that buy products
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <PieChart width={290} height={200}>
            <Pie
              data={sampleData.pieData}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {sampleData.pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} />

            <text
              x="50%"
              y="45%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="25"
              fill="green"
            >
              {`${percentage}%`}
            </text>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </Paper>
  );
};

export default PieChartComponent;
