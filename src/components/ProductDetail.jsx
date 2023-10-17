import React from "react";
import {
  Paper,
  Typography,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  MenuItem,
  Avatar,
  alpha,
  InputBase,
} from "@mui/material";
import "../components/style.css";
import ProductImg from "../images/Product.png";
import SearchIcon from "@mui/icons-material/SearchOutlined";


function ProductSell({ open, setOpen, options, loading, salesData }) {
  return (
    <Paper style={{ height: "300px", padding: "20px", overflow: 'hidden' }}>
        
      <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
          <Typography
            component="div"
            variant="h5"
            style={{ fontWeight: "bold" }}
          >
            Product Sell
          </Typography>
        </div>
        {/* <div style={{width: '30%', display: 'flex'}}> */}
        <div
              style={{
                display: 'flex',
                position: "relative",
                marginLeft: '45em',
                borderRadius: "50px",
                backgroundColor: "rgba(220, 220, 220, 0.6)",
                width: "18%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  
                  alignItems: "center",
                  paddingLeft: "8px",
                  pointerEvents: "none",
                  zIndex: "1",
                  height: "100%",
                  color: alpha("#808080", 1),
                }}
              >
                <SearchIcon />
             
              <InputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
                style={{
                  paddingLeft: "2.5em",
                  paddingTop: '0.8em',
            
                  color: "gray",
                  fontSize: "small",
                  
                }}
                
              />
              </div>
            </div>
            <div>
            <TextField
            label="Last"
            variant="standard"
            select
            defaultValue={30} // Default value for the dropdown
            style={{ marginLeft: "1em", width: '6em' }}
            
          >
            <MenuItem value={7}>7 Days</MenuItem>
            <MenuItem value={30}>30 Days</MenuItem>
            <MenuItem value={90}>90 Days</MenuItem>
          </TextField>
            </div>     
        {/* </div> */}
      </div>

      <TableContainer style={{ maxHeight: 250 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  textAlign: "left",
                  width: "70%",
                }}
              >
                Product
              </TableCell>
              <TableCell
                style={{
                  textAlign: "center",
                }}
              >
                Stock
              </TableCell>
              <TableCell
                style={{
                  textAlign: "center",
                }}
              >
                Price
              </TableCell>
              <TableCell
                style={{
                  textAlign: "center",
                }}
              >
                Total Sales
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell style={{ textAlign: "left", border: "none" }}>
                  <div style={{ display: "flex", marginTop: "1%" }}>
                    <Avatar
                      variant="square"
                      src={ProductImg}
                      sx={{ width: 100, height: 50 }}
                    ></Avatar>
                    <div style={{ marginLeft: "3%" }}>
                      <Typography style={{ fontWeight: "bold" }} variant="h7">
                        {row.name}
                      </Typography>
                      <Typography component="div" style={{ fontSize: "0.9em" }}>
                        {row.description}
                      </Typography>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ textAlign: "center", border: "none" }}>
                  {row.stock}
                </TableCell>
                <TableCell style={{ textAlign: "center", border: "none" }}>
                  {row.price}
                </TableCell>
                <TableCell style={{ textAlign: "center", border: "none" }}>
                  {row.totalSales}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

const products = [
  {
    id: 1,
    name: "Abstract 3D",
    description: "Lorem ipsum dobr seit overut gannorctuct otyspacing alet.",
    stock: 52,
    price: "$45.99",
    totalSales: 20,
    image: { ProductImg },
  },
  {
    id: 2,
    name: "Sarphens Illustration",
    description: "Lorem ipsum dobr seit overut gannorctuct otyspacing alet.",

    stock: 32,
    price: "$45.99",
    totalSales: 20,
    image: { ProductImg },
  },
  {
    id: 3,
    name: "Skin Product",
    description: "Lorem ipsum dobr seit overut gannorctuct otyspacing alet.",

    stock: 23,
    price: "$25.99",
    totalSales: 40,
    image: { ProductImg },
  },
];

export default ProductSell;
