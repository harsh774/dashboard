import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ProductImg from "../images/Product.png";
import {
    Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function ProductSellComponent() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12}>
        <Paper style={{ height: "300px", padding: "16px" }}>
          <Grid container justifyContent="space-between" alignItems="center" >
            <Grid item xs={12} sm={4}>
              <Typography variant="h5" style={{ fontWeight: 'bolder'}}>Product Sell</Typography>
            </Grid>
            <Grid item xs={12} sm={4} style={{textAlign: 'right'}}>
              <TextField
                label="Last"
                variant="standard"
                select
                defaultValue={30} // Default value for the dropdown
                style={{ marginRight: "7em" }}
              >
                <MenuItem value={7}>7 Days</MenuItem>
                <MenuItem value={30}>30 Days</MenuItem>
                <MenuItem value={90}>90 Days</MenuItem>
              </TextField>
              <TextField label="Search" variant="outlined" style={{width: '10em'}} />
            </Grid>
          </Grid>

          <Grid container spacing={30}>
            <Grid item sm={6} xs={12} md={7} style={{marginTop: '0.8em'}}>
              {/* Product Details */}
              <Typography variant="h9">Product Name</Typography>
              {products.map((product) => (
                <div key={product.id}>
                  <div style={{display: 'flex', marginTop:'1%'}}>
                    <Avatar variant="square"
                      src={ProductImg}
                      sx={{ width: 100, height: 50 }}>
                    </Avatar>
                    <div style={{marginLeft: '3%'}}>
                  <Typography style={{fontWeight: 'bold'}} variant="h7">{product.name}</Typography>
                  <Typography component='div' style={{fontSize: '0.9em'}}>{product.description}</Typography>
                </div>
                  </div>
                  
                </div>
              ))}
            </Grid>
            <Grid item xs={5}>
              {/* Small Table */}
              <TableContainer component='div'>
                <Table >
                  <TableHead >
                    <TableRow >
                      <TableCell style={{textAlign: 'center'}}>Stock</TableCell>
                      <TableCell style={{textAlign: 'center'}}>Price</TableCell>
                      <TableCell style={{textAlign: 'center' }}>Total Sales</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell style={{textAlign: 'center', border: 'none'}}>{`${product.stock} in stock`}</TableCell>
                        <TableCell style={{textAlign: 'center', border: 'none', fontWeight: 'bold'}}>{`${product.price}`}</TableCell>
                        <TableCell style={{textAlign: 'center', border: 'none'}}>
                          {product.totalSales}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
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

export default ProductSellComponent;
