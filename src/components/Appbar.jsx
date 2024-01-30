import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircle from '@mui/icons-material/AccountCircle'
import { Divider } from "@mui/material";

export default function MenuAppBar() {
  const drawerWidth = 240;
  return (
    <>
      <Box
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          color: "#004AAD",
          background: "white",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between"}}>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
          <AccountCircle />
        </Toolbar>
        <Divider />
      </Box>
    </>
  );
}
