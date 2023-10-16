import React from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/DashboardOutlined";
import ProductIcon from '@mui/icons-material/Inventory2Outlined';
import HelpIcon from "@mui/icons-material/QuizOutlined";
import { Avatar, Toolbar, Typography } from '@mui/material';
import Rimg from "../images/img.jpeg"

import MainIcon from "@mui/icons-material/ScatterPlotOutlined";
import KeyDownIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import IncomeIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CustomerIcon from '@mui/icons-material/Person4Outlined';

function DrawerComponent(props) {
  const { activeItem, handleItemClick } = props;
  

  return (
    <div style={{ backgroundColor: "#040440", color: "white", height: "100%" }}>
       <Toolbar variant="persistent" style={{ marginTop: "18px" }} />
        <Typography
          variant="h5"
          component="div"
          style={{ margin: "0 0 0 10%" }}
        >
          <MainIcon style={{ marginRight: "10px" }} />
          Dashboard
        </Typography>
      <List>
        {[
          "Dashboard",
          "Product",
          "Customers",
          "Income",
          "Promote",
          "Help",
        ].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            selected={activeItem === text}
            onClick={() => handleItemClick(text)}
            style={{
              display: "flex",
              padding: "0.05em",
              border: "2px solid #040440",
              borderRadius: "8px",
            }}
          >
            <ListItemButton>
              <ListItemIcon style={{ color: "whitesmoke" }}>
                {index === 0 ? (
                  <DashboardIcon />
                ) : index === 1 ? (
                  <ProductIcon />
                ) : index === 2 ? (
                  <CustomerIcon/>
                ) : index === 3 ? (
                  <IncomeIcon/>
                ) : (
                  <HelpIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div
          style={{
            background: "rgba(128, 128, 128, 0.5)",
            margin: "100% 10% 10% 10%",
            padding: "3%",
            border: "2px solid #040440",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Manager Name"
            src={Rimg}
            style={{ marginRight: "0.3em" }}
          />
          <div>
            <div style={{ fontSize: "0.8em", fontWeight: "bold" }}>Harsh</div>
            <div style={{ fontSize: "0.4em" }}>Web Developer</div>
          </div>
          <div style={{ marginLeft: "2.5em" }}>
            <KeyDownIcon />
          </div>
        </div>
    </div>
  );
}

export default DrawerComponent;