import React from 'react';
import {
  Paper,
  Typography,
  Autocomplete,
  TextField,
} from '@mui/material';
import { Bar, BarChart, Tooltip, XAxis } from 'recharts';

function SalesOverviewChart({ open, setOpen, options, loading, salesData }) {
  return (
    
      <Paper style={{ height: "300px", padding: "20px", overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography component="div" variant="h5" style={{fontWeight:"bold"}}>
              Overview
            </Typography>
            <Typography fontSize={15} color={"gray"}>
              Monthly Earning
            </Typography>
          </div>
          <div>
            <Autocomplete
              id="asynchronous-demo"
              sx={{ width: 150 }}
              open={open}
              onOpen={() => {
                setOpen(true);
              }}
              onClose={() => {
                setOpen(false);
              }}
              isOptionEqualToValue={(option, value) =>
                option.title === value.title
              }
              getOptionLabel={(option) => option.title}
              options={options}
              loading={loading}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Time"
                  InputProps={{
                    ...params.InputProps,
                  }}
                />
              )}
            />
          </div>
        </div>

        <BarChart
          style={{ overflow: "auto", width: "110%" }}
          maxBarSize={40}
          width={850}
          height={220}
          className="barchart"
          data={salesData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }} 
        >
          <XAxis dataKey="month" axisLine={false}/>
          <Tooltip />
          <Bar dataKey="sales" fill="#5A32EA" radius={[10, 10, 10, 10]} />
        </BarChart>
      </Paper>
  );
}

export default SalesOverviewChart;
