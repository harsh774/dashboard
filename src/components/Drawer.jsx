import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/DashboardOutlined";
import ProductIcon from "@mui/icons-material/Inventory2Outlined";
import HelpIcon from "@mui/icons-material/QuizOutlined";
import { Avatar, Toolbar, Typography } from "@mui/material";
import Rimg from "../images/img.jpeg";
import MainIcon from "@mui/icons-material/ScatterPlotOutlined";
import KeyDownIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import IncomeIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CustomerIcon from "@mui/icons-material/Person4Outlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import PromoteIcon from "@mui/icons-material/RecommendOutlined";

function DrawerComponent(props) {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (text) => {
    setActiveItem(text === activeItem ? null : text);
  };
  const drawerData = [
    {
      text: "Dashboard  ",
      subItems: ["Subitem 1", "Subitem 2", "Subitem 3"],
    },
    {
      text: "Product",
      subItems: ["Subitem 4", "Subitem 5"],
    },
    {
      text: "Customers",
      subItems: ["Subitem 6", "Subitem 7"],
    },
    {
      text: "Income",
      subItems: ["Subitem 8", "Subitem 9"],
    },
    {
      text: "Promote",
      subItems: ["Subitem 10", "Subitem 11"],
    },
    {
      text: "Help",
      subItems: ["Subitem 12", "Subitem 13"],
    },
  ];

  return (
    <div style={{ backgroundColor: "#040440", color: "white", height: "100%" }}>
      <Toolbar variant="persistent" style={{ marginTop: "18px" }} />
      <Typography variant="h5" component="div" style={{ margin: "0 0 0 10%" }}>
        <MainIcon style={{ marginRight: "10px" }} />
        Dashboard
      </Typography>
      <List
        style={{ paddingLeft: "1em", paddingRight: "1em", paddingTop: "2em" }}
      >
        {drawerData.map((item, index) => (
          <div key={item.text}>
            <ListItem
              disablePadding
              selected={activeItem === item.text}
              onClick={() => handleItemClick(item.text)}
              style={{
                display: "flex",
                padding: "0.2em",
                paddingLeft: "0.09em",
                background: "rgba(128, 128, 128, 0.2)",
                border: "2px solid #040440",
                borderRadius: "20px",
              }}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "whitesmoke" }}>
                  {index === 0 ? (
                    <DashboardIcon />
                  ) : index === 1 ? (
                    <ProductIcon />
                  ) : index === 2 ? (
                    <CustomerIcon />
                  ) : index === 3 ? (
                    <IncomeIcon />
                  ) : index === 4 ? (
                    <PromoteIcon />
                  ) : (
                    <HelpIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={item.text} />
                <KeyboardArrowRightOutlinedIcon />
              </ListItemButton>
            </ListItem>
            {activeItem === item.text && item.subItems && (
              <List
                style={{
                  maxHeight: "250px",
                  overflowY: "auto",
                  overflowX: "hidden",
                }}
              >
                {item.subItems.map((subItem, subIndex) => (
                  <ListItem
                    key={subItem}
                    disablePadding
                    style={{
                      display: "flex",
                      padding: "0.05em",
                      border: "2px solid #040440",
                      borderRadius: "8px",
                      marginLeft: "2em",
                    }}
                  >
                    <ListItemButton>
                      <ListItemText primary={subItem} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            )}
          </div>
        ))}
      </List>

      <div
        style={{
          background: "rgba(128, 128, 128, 0.5)",
          position: "absolute",
          bottom: 10,
          left: 20,
          width: "80%",
          padding: "3%",
          border: "2px solid #040440",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
