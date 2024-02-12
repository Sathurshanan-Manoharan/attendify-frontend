import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
import Logo from "../assets/Sathu-Image.jpg";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

export default function MenuAppBar() {
  const drawerWidth = 240;
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
            justifyContent: "right",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={2} alignItems={"center"}>
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
            <Avatar alt="Remy Sharp" src={Logo} />
          </Stack>
        </Toolbar>
        <Divider />
      </Box>
    </>
  );
}
