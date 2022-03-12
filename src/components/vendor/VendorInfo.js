import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function BasicList({ vendorData }) {
  const {
    amount,
    name,
    pincode,
    registrationNo,
    status,
    vendorAddress,
    vendorWalletAddress,
  } = vendorData;
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>Name: </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>Address: </ListItemIcon>
              <ListItemText primary={vendorAddress} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>Pin: </ListItemIcon>
              <ListItemText primary={pincode} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>Staus: </ListItemIcon>
              <ListItemText primary={status ? "Active" : "Inactive"} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
