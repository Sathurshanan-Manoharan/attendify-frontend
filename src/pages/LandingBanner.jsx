import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import attendanceImage from "../assets/AttendifyLogo.png"; // Replace this with a suitable attendance management-related image

const LandingBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
        background: "linear-gradient(to bottom, #004AAD, #0a3c7f)", // Updated gradient for a premium look
        color: "white",
        padding: 4,
        borderRadius: 12,
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
        marginBottom: 3,
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        style={{
          fontWeight: "bold",
          marginBottom: "1rem",
          fontStyle: "italic",
        }}
      >
        Welcome to
      </Typography>
      <Paper
        sx={{
          width: 600, // Adjusted width for better fitting
          height: 600, // Height set to auto to maintain aspect ratio
          background: `url(${attendanceImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "1",
        }}
      ></Paper>
      <Typography
        variant="h5"
        gutterBottom
        style={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        Track attendance data efficiently with{" "}
        <span style={{ color: "#64b5f6" }}>Attendify</span>. Easily manage
        attendance records, analyze attendance trends, and streamline your
        attendance management process.
      </Typography>
      <Button
        variant="contained"
        onClick={"#"}
        sx={{
          borderRadius: 12,
          padding: "1rem 2rem",
          backgroundColor: "#0a4a99", // Custom color for the button
          color: "white", // Text color for the button
          "&:hover": {
            backgroundColor: "#0a3c7f", // Custom hover color
          },
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default LandingBanner;
