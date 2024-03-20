import { Typography, Input } from "@mui/material";
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
import axios from '../axiosConfiguration/axiosconfig';
import { useState } from "react";
import axios from 'axios';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function Sessions() {
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/sessions/attendance/${id}`);
  };

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
      (all, number) => number + (["st", "nd", "rd"][number % 10 - 1] || "th")
    );
  };
    const [selectedFile, setSelectedFile] = useState(null);

    //Handles adding of the file
    function fileChangeHandler(event) {
      setSelectedFile(event.target.files[0]); 
    }

    //Handles upload of the file to the backend
    async function uploadHandler() {
      try {
        const csvForm = new FormData();
        csvForm.append('csvFile', selectedFile);

        
        const response = await axios.post('http://127.0.0.1:3000/api/v1/attendance/upload', csvForm, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
  
        console.log(response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }

  return (
    <>
      <Box sx={{marginBottom: "30px"}}>
        <Typography variant="h4" color="#004AAD" fontWeight="bold">Upload CSV File</Typography>
        <Button
        component="label"
        variant="contained"
        
      >
        Select File
        <input type="file" accept=".csv" onChange={fileChangeHandler} style={{ display: 'none' }} />
      </Button>
      {selectedFile && (
        <Typography variant="body1" color="textSecondary">
          {selectedFile.name}
        </Typography>
      )}

        <Box>
        <Button
          variant="contained"
          onClick={uploadHandler}
          disabled={!selectedFile}
          startIcon={<CloudUploadIcon />}
        >
          Upload
        </Button>
        </Box>
      </Box>
      

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
          key={session._id} 
          onClick={() => handleClick(session._id)}
          
          sx={{
            boxShadow: 3,
            marginBottom: "15px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body" sx={{ marginRight: 2 }}>
                {formatTime(session.start_time)}
                </Typography>
                <Typography variant="h5" sx={{ marginRight: 2 }}>
                  {session.lecture_title}
                </Typography>
                <Typography variant="h6">{`${session.tutorial_group}`}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="body">{formatDate(session.start_time)}</Typography>
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
