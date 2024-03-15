import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../../public/assets/AttendifyLogo.png";
// import sidebarItems from "../data/SidebarItems";
import { Link } from "react-router-dom";
import Collapse from "@mui/material/Collapse";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {  useUser } from "@clerk/clerk-react";

function Sidebar() {
  const { user } = useUser();
  const isAdmin = user.publicMetadata?.role === "admin";
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

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
      <img
        src={Logo}
        alt="logo"
        style={{ marginTop: "10px", height: "60px" }}
      />

      <List
        sx={{
          color: "white",
        }}
      >
        {/* {sidebarItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton to={item.path} component={Link}>
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))} */}

        <ListItemButton to={"/"} component={Link}>
          <ListItemIcon sx={{ color: "white" }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={"Dashboard"} />
        </ListItemButton>

        <ListItemButton to={"/sessions"} component={Link}>
          <ListItemIcon sx={{ color: "white" }}>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary={"Attendance"} />
        </ListItemButton>

        <ListItemButton to={"/timetable"} component={Link}>
          <ListItemIcon sx={{ color: "white" }}>
            <ViewTimelineIcon />
          </ListItemIcon>
          <ListItemText primary={"Timetable"} />
        </ListItemButton>

        <ListItemButton to={"/reports"} component={Link}>
          <ListItemIcon sx={{ color: "white" }}>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary={"Reports"} />
        </ListItemButton>

        {isAdmin && (
        <ListItemButton onClick={handleClick}>
          <ListItemIcon sx={{ color: "white" }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Settings"} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      )}

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding sx={{ color: "white" }}>
            <ListItemButton to={"/addstudent"} component={Link} sx={{ pl: 4 }}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Add Student" />
            </ListItemButton>
            <ListItemButton to={"/addlecturer"} component={Link} sx={{ pl: 4 }}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Add Lecturer" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Divider />
    </Drawer>
  );
}

export default Sidebar;
