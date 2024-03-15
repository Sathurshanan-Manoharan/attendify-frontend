import { Box, CircularProgress } from "@mui/material";
import MenuAppBar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

function Layout() {
  const { userId, isLoaded } = useAuth();

  const navigate = useNavigate();
  if (!userId) {
    navigate("/login");
  }

  if (!isLoaded) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", 
          alignItems: "center", 
          height: "100vh", 
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex" }}>
      <MenuAppBar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#FAFBFF",
          p: 3,
          marginTop: "64px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
