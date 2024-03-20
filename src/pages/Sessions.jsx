import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axiosConfiguration/axiosconfig";

function Sessions() {
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/sessions/attendance/${id}`);
  };

  const [searchQuery, setSearchQuery] = useState("");

  //use effect for data fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/attendance/");
        setSessions(response.data.data.attendance);
      } catch (error) {
        console.error(error); // Handle errors appropriately
      }
    };

    fetchData();
  }, []);

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate.replace(
      /(\d+)(?:st|nd|rd|th)/,
      (all, number) => number + (["st", "nd", "rd"][(number % 10) - 1] || "th")
    );
  };

  useEffect(() => {
    fetchSessions();
  }, []); 

  const fetchSessions = async () => {
    // Add formData as a parameter
    try {
      const response = await axios.get(
        "https://attendify-backend-i3rpgzeqlq-uc.a.run.app/api/v1/attendance"
      );
      // console.log(response.data);   // Log the response data
      const { data } = response.data; // Extracting the 'data' object from the response
      if (data && data.attendance && Array.isArray(data.attendance)) {
        console.log(data.attendance);
        setSessions(data.attendance);
      } else {
        console.error("Response data is not an array:", response.data);
      }
    } catch (error) {
      console.error("Failed to fetch students:", error);
    }
  };

  const filteredAttendanceCards = sessions.filter(
    (attendance) =>
      attendance.lecture_title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      attendance.tutorial_group
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  console.log("Filtered Attendance Cards:", filteredAttendanceCards);

  const handleSearch = (e) => {
    console.log("Search query:", e.target.value);
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Box sx={{ marginBottom: "20px", marginTop: "0px" }}>
        <Box sx={{ marginBottom: "12px", marginTop: "0px" }}>
          <Typography variant="h4" color="#004AAD" fontWeight="bold">
            Session Attendance
          </Typography>
        </Box>

        <Card
          variant="elevation"
          sx={{
            boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.035)",
            borderRadius: "12px",
            border: "none",
          }}
        >
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={10} fullWidth={true}>
                <FormControl xs={5.6} fullWidth={true}>
                  <TextField
                    label="What are you looking for?"
                    variant="filled"
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      ),
                      disableUnderline: true,
                    }}
                    fullWidth={true}
                    sx={{
                      "& .MuiFilledInput-root": {
                        borderRadius: 12,
                      },
                    }}
                    value={searchQuery}
                    onChange={handleSearch}
                  ></TextField>
                </FormControl>
              </Grid>

              <Grid item xs={2} sm={2} md={2}>
                <Button
                  variant="contained"
                  onClick={"#"}
                  fullWidth={true}
                  sx={{
                    borderRadius: 12,
                    padding: "0.7rem",
                    backgroundColor: "#0a4a99", // Custom color for the button
                    color: "white", // Text color for the button
                    "&:hover": {
                      backgroundColor: "#0a3c7f", // Custom hover color
                    },
                  }}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <Grid container spacing={2}>
        {searchQuery
          ? filteredAttendanceCards.map((session) => (
              <Grid item xs={6} key={session._id}>
                <Card
                  onClick={() => handleClick(session._id)}
                  sx={{
                    marginBottom: "2px",
                    cursor: "pointer",
                    borderRadius: 6,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                      transform: "translateY(-3px)",
                    },
                    padding: "16px",
                    backgroundColor: "white",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    <div>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#004AAD",
                          fontWeight: "bold",
                          marginBottom: "8px",
                        }}
                      >
                        {session.lecture_title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ color: "black", marginBottom: "4px" }}
                        >
                          <strong> Tutorial Group: </strong>{" "}
                          {session.tutorial_group}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "black", marginBottom: "4px" }}
                        >
                          <strong> Venue:</strong> {session.venue}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ color: "black", marginBottom: "4px" }}
                        >
                          <strong> Start Time: </strong>{" "}
                          {formatTime(session.start_time)}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "black", marginBottom: "4px" }}
                        >
                          <strong> Date: </strong>{" "}
                          {formatDate(session.start_time)}
                        </Typography>
                      </Box>
                    </div>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "black",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        textAlign: "center",
                        padding: "4px 8px",
                        borderRadius: "12px",
                        backgroundColor:
                          session.status === "held"
                            ? "#9ced7b" // Light blue for held
                            : session.status === "canceled"
                            ? "#f7b5b8" // Red for canceled
                            : session.status === "pending"
                            ? "#ffcc80" // Updated style for pending
                            : "",
                        display: "inline-block",
                        marginTop: "8px",
                      }}
                    >
                      {session.status}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          : sessions.map((session) => (
              <Grid item xs={6} key={session._id}>
                <Card
                  onClick={() => handleClick(session._id)}
                  sx={{
                    marginBottom: "2px",
                    cursor: "pointer",
                    borderRadius: 6,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                      transform: "translateY(-3px)",
                    },
                    padding: "16px",
                    backgroundColor: "white",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    <div>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#004AAD",
                          fontWeight: "bold",
                          marginBottom: "8px",
                        }}
                      >
                        {session.lecture_title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ color: "black", marginBottom: "4px" }}
                        >
                          <strong> Tutorial Group: </strong>{" "}
                          {session.tutorial_group}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "black", marginBottom: "4px" }}
                        >
                          <strong> Venue:</strong> {session.venue}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ color: "black", marginBottom: "4px" }}
                        >
                          <strong> Start Time: </strong>{" "}
                          {formatTime(session.start_time)}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "black", marginBottom: "4px" }}
                        >
                          <strong> Date: </strong>{" "}
                          {formatDate(session.start_time)}
                        </Typography>
                      </Box>
                    </div>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "black",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        textAlign: "center",
                        padding: "4px 8px",
                        borderRadius: "12px",
                        backgroundColor:
                          session.status === "held"
                            ? "#9ced7b" // Light blue for held
                            : session.status === "canceled"
                            ? "#f7b5b8" // Red for canceled
                            : session.status === "pending"
                            ? "#ffcc80" // Updated style for pending
                            : "",
                        display: "inline-block",
                        marginTop: "8px",
                      }}
                    >
                      {session.status}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
      </Grid>
    </>
  );
}

export default Sessions;
