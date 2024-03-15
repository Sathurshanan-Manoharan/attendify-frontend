import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Sessions() {
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/attendance");
  };

  //use effect for data fetching
  useEffect(() => {
    axios.get("http://127.0.0.1:3000/api/v1/attendance/").then((res) => {
      setSessions(res.data.data.attendance);
    });
  }, []);

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
            // boxShadow: ,
            borderRadius: "12px",
            border: "none",
          }}
        >
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={5.6} fullWidth={true}>
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
                        borderRadius: "15px",
                      },
                    }}
                  ></TextField>
                </FormControl>
              </Grid>
              <Grid item xs={2.2}>
                <FormControl fullWidth={true}>
                  <TextField
                    select
                    label="Tutorial Group"
                    fullWidth={true}
                    variant="outlined"
                    size="small"
                  >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="group1">Group 1</MenuItem>
                    <MenuItem value="group2">Group 2</MenuItem>
                    <MenuItem value="group3">Group 3</MenuItem>
                  </TextField>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <FormControl fullWidth={true}>
                  <TextField
                    select
                    label="Status"
                    fullWidth={true}
                    variant="outlined"
                    size="small"
                  >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="present">Present</MenuItem>
                    <MenuItem value="absent">Absent</MenuItem>
                  </TextField>
                </FormControl>
              </Grid>
              <Grid item xs={2} sm={2} md={2}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth={true}
                  sx={{
                    // height: "31pt",
                    boxShadow: 2,
                    borderRadius: "12px",
                    border: "none",
                    backgroundColor: "#004AAD",
                  }}
                  size="normal"
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      {sessions.map((session) => (
        <Card
          key={session.id} // Don't forget to add a unique key for each mapped element
          onClick={handleClick}
          sx={{
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#f0f0f0", // Change to the desired hover background color
            },
          }}
        >
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body" sx={{ marginRight: 2 }}>
                  {session.start_time}
                </Typography>
                <Typography variant="h5" sx={{ marginRight: 2 }}>
                  {session.lecture_title}
                </Typography>
                <Typography variant="h6">SE-O</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="body">March 1st, 2023</Typography>
                <Typography variant="body">{session.venue}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default Sessions;
