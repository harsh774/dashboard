import React from 'react';
import { Paper, Typography } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';
import sampleData from '../utils/data';

const COLORS = ["#F23C9B", "#5832E9"];

const PieChartComponent = () => {
  const newCustomers = sampleData.pieData[0].value;
  const oldCustomers = sampleData.pieData[1].value;
  const percentageIncrease = ((newCustomers - oldCustomers) / oldCustomers * 100).toFixed(2);
  const percentage = Math.abs(percentageIncrease)

  return (
    <Paper style={{ height: "300px", padding: "20px" }}>
        <div style={{ display: "flex" }}>
          
        <div style={{display: 'block'}}>
          
            <Typography component="div" variant="h5" style={{fontWeight:"bold"}}>
              Customers
            </Typography>
            <Typography fontSize={13} color={"gray"}>
              Customers that buy products
            </Typography>
          </div>
          
      <PieChart width={200} height={350}>
   
        <Pie
        
          data={sampleData.pieData}
          cx="50%"
          cy="50%"
          startAngle={90}
          endAngle={-270}
          innerRadius={50}
          outerRadius={90}
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
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="25" fill="green">
                {`${percentage}%`}
          </text>
      <Legend verticalAlign="center" height={36} />
        
        
        <Tooltip />
      </PieChart>

      </div>
      
    </Paper>
  );
}

export default PieChartComponent;
