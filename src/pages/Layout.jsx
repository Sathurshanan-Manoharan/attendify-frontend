import { Box } from "@mui/material";
import MenuAppBar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";


function Layout() {
  return (
    <Box sx={{ display: "flex" }}>
      <MenuAppBar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          height: "1000px",
          marginTop: "64px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
