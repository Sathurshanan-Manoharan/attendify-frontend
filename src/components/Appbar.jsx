import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
// import Logo from "../assets/Sathu-Image.jpg";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Profile from "./Profile";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import RouterBreadcrumbs from "./RouterBreadcrumbs";


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
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >

        <RouterBreadcrumbs />

          <Stack direction="row" spacing={2} alignItems={"center"}>
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
            <Profile />
          </Stack>
        </Toolbar>
        <Divider />
      </Box>
    </>
  );
}
