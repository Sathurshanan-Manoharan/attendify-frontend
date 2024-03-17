import { useEffect } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function Notifications({
  anchorEl,
  open,
  handleClose,
  notifications,
}) {
  const lastNotificationIndex = notifications.length - 1;
  useEffect(() => {
    function handleClickOutside(event) {
      if (anchorEl && !anchorEl.contains(event.target)) {
        handleClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [anchorEl, handleClose]);

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right", // Adjust as needed
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right", // Adjust as needed
      }}
      getContentAnchorEl={null}
      MenuListProps={{
        "aria-labelledby": "basic-button",
        style: { overflowY: "hidden", alignContent: "center" },
      }}
    >
      {notifications.map((notification, index) => {
        const isLastNotification = index === lastNotificationIndex;
        return (
          <div key={notification.id}>
            <MenuItem
              sx={{
                width: 350,
                maxWidth: "100%",
                height: "auto",
                flexDirection: "row",
                // "&:hover": { backgroundColor: "transparent" },
              }}
              onClick={handleClose}
            >
              <div>
                <Typography variant="h6" sx={{ whiteSpace: "normal" }}>
                  {notification.title}
                </Typography>
                <Typography variant="body1" sx={{ whiteSpace: "normal" }}>
                  {notification.message}
                </Typography>
              </div>
            </MenuItem>
            {!isLastNotification && <Divider sx={{ width: "auto" }} />}
          </div>
        );
      })}
    </Menu>
  );
}
