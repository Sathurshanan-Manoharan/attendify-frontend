import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { UserButton } from "@clerk/clerk-react";
import RouterBreadcrumbs from "./RouterBreadcrumbs";
import Notifications from "./Notifications";

export default function MenuAppBar() {
  const drawerWidth = 240;

  //Dummy data for notifications
  const notifications = [
    {
      id: 1,
      title: "Notification 1",
      message:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      id: 2,
      title: "Notification 2",
      message: "Notification 2",
    },
    {
      id: 3,
      title: "Notification 3",
      message:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      id: 4,
      title: "Notification 4",
      message: "Notification 4",
    },
    {
      id: 5,
      title: "Notification 5",
      message:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
  ];
  const notificationCount = notifications.length;
  const newNotification = `You have ${notificationCount} new notifications`;
  const noNewNotification = "You have no new notifications";
  const notificationText =
    notificationCount > 0 ? newNotification : noNewNotification;

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null); // corrected typo here
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          height: `68px`,
          ml: `${drawerWidth}px`,
          color: "#004AAD",
          background: "white",
          zIndex: "9999",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <RouterBreadcrumbs />

          <Stack direction="row" spacing={2} alignItems={"center"}>
            <Tooltip title={notificationText}>
              <IconButton
                onClick={notificationCount ? handleClick : null}
                anchorEl={anchorEl}
              >
                <Badge
                  badgeContent={notificationCount}
                  color="secondary"
                  max={99}
                >
                  <NotificationsIcon sx={{ color: "#64748B" }} />
                </Badge>
              </IconButton>
            </Tooltip>
            <Notifications
              anchorEl={anchorEl}
              open={open}
              handleClose={handleClose}
              notifications={notifications}
            />
            <UserButton afterSignOutUrl="/login" />
          </Stack>
        </Toolbar>
        <Divider />
      </Box>
    </>
  );
}
