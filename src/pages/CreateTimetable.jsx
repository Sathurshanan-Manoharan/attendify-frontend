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
  CardContent,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Chip,Box,
} from "@mui/material";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function CreateTimetable() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCourseType, setSelectedCourseType] = useState("");
  const [selectedTutorialGroups, setSelectedTutorialGroups] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTutorialGroupChange = (event) => {
    setSelectedTutorialGroups(event.target.value);
  };

  const handleCourseTypeChange = (event) => {
    setSelectedCourseType(event.target.value);
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const navigate = useNavigate(); 

 
  function fileChangeHandler(event) {
    setSelectedFile(event.target.files[0]); 
  }


  async function uploadHandler() {
    try {
      const csvForm = new FormData();
      csvForm.append('csvFile', selectedFile);
      csvForm.append('courseType', selectedCourseType);
      csvForm.append('selectedTutorialGroups', selectedTutorialGroups); 
      csvForm.append('level', selectedLevel);
  
      const response = await axios.post('http://127.0.0.1:3000/api/v1/timetable/uploadtimetable', csvForm, {
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
              sx={{ fontWeight: "bold", color: "#black", marginBottom: "10px" }}
            >
              Course Name
            </Typography>
            <FormControl fullWidth variant="outlined" required sx={{ marginBottom: '10px' }}>
              <InputLabel id="CourseType">Select an option</InputLabel>
              <Select
                labelId="CourseType"
                id="CourseType"
                label="Course Type"
                value={selectedCourseType}
                onChange={handleCourseTypeChange}
              >
                <MenuItem value="SE">
                  SE
                </MenuItem>
                <MenuItem value="CS">
              CS
            </MenuItem>
            <MenuItem value="BIS">
              BIS
            </MenuItem>
            
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h7"
              sx={{ fontWeight: "bold", color: "#black", marginBottom: "10px" }}
            >
              Tutorial Group
            </Typography>
            <FormControl fullWidth variant="outlined" required sx={{ marginBottom: '10px' }}>
            <InputLabel id="TutorialGroup">Select tutorial groups</InputLabel>
            <Select
              labelId="TutorialGroup"
              id="TutorialGroup"
              label="Tutorial Group"
              value={selectedTutorialGroups}  
              onChange={handleTutorialGroupChange}  
              //commit
            >
              {['A', 'B', 'C', 'D'].map((letter) => (
              <MenuItem key={letter} value={letter}>
                <Typography>{letter}</Typography>
              </MenuItem>
            ))}

            </Select>
          </FormControl>

          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h7"
              sx={{ fontWeight: "bold", color: "#black", marginBottom: "10px" }}
            >
              Level
            </Typography>
            <FormControl fullWidth variant="outlined" required sx={{ marginBottom: '10px' }}>
              <InputLabel id="Level">Select an option</InputLabel>
              <Select
                labelId="Level"
                id="Level"
                label="Level"
                value={selectedLevel} 
                onChange={handleLevelChange} 
              >
                <MenuItem value="L4">L4</MenuItem>
                <MenuItem value="L5">
              L5
            </MenuItem>
            <MenuItem value="L6">
              L6
            </MenuItem>
              </Select>
            </FormControl>
          </Grid>
         

          
         
        </Grid>
        <Grid item xs={12}>
        <Box sx={{marginBottom: "30px"}}>
        <Typography variant="h7" color="black" fontWeight="bold">Upload CSV File</Typography>
       
      {selectedFile && (
        <Typography variant="body1" color="textSecondary">
          {selectedFile.name}
        </Typography>
      )}

        <Box>
        <Button
        component="label"
        variant="contained"
        sx={{marginRight: "10px" }}
        
      >
        Select File
        <input type="file" accept=".csv" onChange={fileChangeHandler} style={{ display: 'none'}} />
      </Button>
        
        </Box>
      </Box>
      </Grid>
      <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={uploadHandler}
              disabled={!selectedFile}
              sx={{ width: "auto", backgroundColor: "#004AAD", color: "white" }}
              fullWidth
            >
              Create Timetable
            </Button>
          </Grid>
      </CardContent>
    </Card>
  );}


export default CreateTimetable;
