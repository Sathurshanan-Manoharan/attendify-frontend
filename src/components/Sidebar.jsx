// import Box from '@mui/material/Box';
import Drawer from "@mui/material/Drawer";
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
import List from "@mui/material/List";
// import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../assets/AttendifyLogo.png";
import sidebarItems from "../data/SidebarItems";
import { Link } from "react-router-dom";

function Sidebar() {
  const drawerWidth = 240;
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "#004AAD",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <img src={Logo} alt="logo" style={{ marginTop: "10px", height: "60px" }} />

      <List
        sx={{
          //white
          color: "white",
        }}
      >
        {sidebarItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton to={item.path} component={Link} >
              <ListItemIcon sx={{ color: "white" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}

export default Sidebar;
