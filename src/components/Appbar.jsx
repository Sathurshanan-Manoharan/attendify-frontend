import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
import Logo from "../assets/Sathu-Image.jpg";

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
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "right" }}>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src={Logo} />
          </Stack>
        </Toolbar>
        <Divider />
      </Box>
    </>
  );
}
