import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Button,
  CardContent,
  TextField,
  Box,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle } from "@mui/material";

function CreateTimetableLecturer() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [LecturerEmailEntered, setEmail] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
    if (!email || !email.includes("@iit.ac.lk")) {
      setErrorMessage("Please enter a valid IIT email address");
      setSuccessMessage(""); // Clear success message
    } else {
      setErrorMessage("");
    }
  };


  const navigate = useNavigate();

  function fileChangeHandler(event) {
    setSelectedFile(event.target.files[0]);
  }

  async function uploadHandler() {
    try {
      if (!selectedFile || !LecturerEmailEntered) {
        setErrorMessage("Please select a file and enter a valid email address");
        return;
      }
  
      const csvForm = new FormData();
      csvForm.append('csvFile', selectedFile);
      csvForm.append("lecturerEmail", LecturerEmailEntered);

      console.log(selectedFile);
      console.log(LecturerEmailEntered)
  
      const response = await axios.post(
        "https://attendify-backend-i3rpgzeqlq-uc.a.run.app/api/v1/uploadtimetablelecturer",
        csvForm,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      console.log(response.data);
      setSuccessMessage("Timetable uploaded and created successfully");
      setErrorMessage("");
       setTimeout(() => {
         navigate("/");
      }, 2000);
    } catch (error) {
     console.error("Error uploading file:", error);
     console.error(error.stack);
      setErrorMessage("Error uploading timetable");
      setSuccessMessage("");
    }
  }
  

  return (
    <Card sx={{ maxWidth: 1200, marginTop: 0 }}>
      <CardHeader
        title="Upload Timetable"
        sx={{ backgroundColor: "#white", color: "#004AAD" }}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h7"
              sx={{
                fontWeight: "bold",
                color: "black",
                marginBottom: "10px",
              }}
            >
              Lecturer IIT Email
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              required
              label="Enter Lecturer IIT Email"
              value={LecturerEmailEntered}
              onChange={handleEmailChange}
              sx={{ marginBottom: "10px" }}
            />
            {errorMessage && (
              <Alert severity="error" sx={{ marginBottom: "1rem" }}>
                <AlertTitle>Error</AlertTitle>
                {errorMessage}
              </Alert>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ marginBottom: "30px" }}>
            <Typography variant="h7" color="black" fontWeight="bold">
              Upload CSV File
            </Typography>

            {selectedFile && (
              <Typography variant="body1" color="textSecondary">
                {selectedFile.name}
              </Typography>
            )}

            <Box>
              <Button
                component="label"
                variant="contained"
                sx={{ marginRight: "10px" }}
              >
                Select File
                <input
                  type="file"
                  accept=".csv"
                  onChange={fileChangeHandler}
                  style={{ display: "none" }}
                />
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={11}>
          <Button
            variant="contained"
            onClick={uploadHandler}
            disabled={!selectedFile || !!errorMessage}
            sx={{
              width: "auto",
              backgroundColor: "#004AAD",
              color: "white",
            }}
            fullWidth
          >
            Create Timetable
          </Button>

          {successMessage && (
            <Alert severity="success" sx={{ marginBottom: "1rem" }}>
              <AlertTitle>Success</AlertTitle>
              {successMessage}
            </Alert>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CreateTimetableLecturer;
