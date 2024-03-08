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

  const navigate = useNavigate(); // Moved useNavigate inside the component body

  //Handles adding of the file
  function fileChangeHandler(event) {
    setSelectedFile(event.target.files[0]); 
  }

  //Handles upload of the file to the backend
  async function uploadHandler() {
    try {
      const csvForm = new FormData();
      csvForm.append('courseType', selectedCourseType);
      csvForm.append('tutorialGroups', selectedTutorialGroups);
      csvForm.append('level', selectedLevel);
      csvForm.append('csvFile', selectedFile);

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
                <MenuItem value="Foundation Certificate in Higher Education – Business">
                  Foundation Certificate in Higher Education – Business
                </MenuItem>
                <MenuItem value="Foundation Certificate in Higher Education – IT">
              Foundation Certificate in Higher Education – IT
            </MenuItem>
            <MenuItem value="BSc (Hons) Business Information Systems">
              BSc (Hons) Business Information Systems
            </MenuItem>
            <MenuItem value="BA (Hons) Business Management">
              BA (Hons) Business Management
            </MenuItem>
            <MenuItem value="BSc (Hons) Business Data Analytics">
              BSc (Hons) Business Data Analytics
            </MenuItem>
            <MenuItem value="Professional Certificate in Digital Graphic Designing">
              Professional Certificate in Digital Graphic Designing
            </MenuItem>
            <MenuItem value="Professional Certificate in Python Programming">
              Professional Certificate in Python Programming
            </MenuItem>
            <MenuItem value="BSc (Hons) Artificial Intelligence And Data Science">
              BSc (Hons) Artificial Intelligence And Data Science
            </MenuItem>
            <MenuItem value="BSc (Hons) Computer Science">
              BSc (Hons) Computer Science
            </MenuItem>
            <MenuItem value="BEng (Hons) Software Engineering">
              BEng (Hons) Software Engineering
            </MenuItem>
            <MenuItem value="MSc Advanced Software Engineering">
              MSc Advanced Software Engineering
            </MenuItem>
            <MenuItem value="MSc Cyber Security And Forensics">
              MSc Cyber Security And Forensics
            </MenuItem>
            <MenuItem value="Professional Certificate in 3D Animation">
              Professional Certificate in 3D Animation
            </MenuItem>
            <MenuItem value="Professional Certificate in Cyber Security & Networking">
              Professional Certificate in Cyber Security & Networking
            </MenuItem>
            <MenuItem value="Finance for Non-Finance Executives">
              Finance for Non-Finance Executives
            </MenuItem>
            <MenuItem value="MSc Big Data Analytics">
              MSc Big Data Analytics
            </MenuItem>
            <MenuItem value="MSc Information Technology">
              MSc Information Technology
            </MenuItem>
            <MenuItem value="MSc Business Analytics">
              MSc Business Analytics
            </MenuItem>
            <MenuItem value="MA Fashion Business Management">
              MA Fashion Business Management
            </MenuItem>
            <MenuItem value="Certified Ethical Hacker (C|EH) – Accredited by EC Council">
              Certified Ethical Hacker (C|EH) – Accredited by EC Council
            </MenuItem>
            <MenuItem value="Professional Certificate in Web Development">
              Professional Certificate in Web Development
            </MenuItem>
            <MenuItem value="Professional Certificate in Machine Learning">
              Professional Certificate in Machine Learning
            </MenuItem>
            <MenuItem value="Professional Certificate in Blockchain">
              Professional Certificate in Blockchain
            </MenuItem>
            <MenuItem value="Professional Certificate in Advanced Cyber Security">
              Professional Certificate in Advanced Cyber Security
            </MenuItem>
            <MenuItem value="Professional Certificate in Software Quality Assurance – Foundation Level">
              Professional Certificate in Software Quality Assurance – Foundation Level
            </MenuItem>
            <MenuItem value="Professional Certificate in Information Technology">
              Professional Certificate in Information Technology
            </MenuItem>
            <MenuItem value="Professional Certificate in Network & System Administration">
              Professional Certificate in Network & System Administration
            </MenuItem>
            <MenuItem value="Professional Certificate in Cyber Security">
              Professional Certificate in Cyber Security
            </MenuItem>
            <MenuItem value="Professional Certificate in Java Programming with Object Oriented">
              Professional Certificate in Java Programming with Object Oriented
            </MenuItem>
            <MenuItem value="Professional Certificate in Data Visualisation with Power BI">
              Professional Certificate in Data Visualisation with Power BI
            </MenuItem>
            <MenuItem value="Professional Certificate in Search Engine Optimization (SEO)">
              Professional Certificate in Search Engine Optimization (SEO)
            </MenuItem>
            <MenuItem value="Professional Certificate in Software Quality Assurance – Advanced Level">
              Professional Certificate in Software Quality Assurance – Advanced Level
            </MenuItem>
            <MenuItem value="Professional Certificate in Software Quality Assurance – Expert Level : Test Management">
              Professional Certificate in Software Quality Assurance – Expert Level : Test Management
            </MenuItem>
            <MenuItem value="Professional Certificate in Software Quality Assurance – Expert Level: Test Automation">
              Professional Certificate in Software Quality Assurance – Expert Level: Test Automation
            </MenuItem>
            <MenuItem value="Professional Certificate in Software Quality Assurance – Expert Level: Performance Testing">
              Professional Certificate in Software Quality Assurance – Expert Level: Performance Testing
            </MenuItem>
            <MenuItem value="Professional Certificate in Software Quality Assurance – Expert Level: Security Testing">
              Professional Certificate in Software Quality Assurance – Expert Level: Security Testing
            </MenuItem>
            <MenuItem value="Professional Certificate in 3D Character Animation with Maya">
              Professional Certificate in 3D Character Animation with Maya
            </MenuItem>
            <MenuItem value="Professional Certificate in Python for Application Development – Level 2">
              Professional Certificate in Python for Application Development – Level 2
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
              multiple  // Enable multiple selection
              value={selectedTutorialGroups}  // State to hold selected tutorial groups
              onChange={handleTutorialGroupChange}  // Handler for when selection changes
              renderValue={(selected) => (
                <div>
                  {selected.map((value) => (
                    <Chip key={value} label={value} /> // Display selected tutorial groups as chips
                  ))}
                </div>
              )}
            >
              {[...Array(26)].map((_, index) => (
                <MenuItem
                  key={index}
                  value={String.fromCharCode(65 + index)}
                >
                  <Typography>
                    {String.fromCharCode(65 + index)}
                  </Typography>
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
                <MenuItem value="Level 1">Level 1</MenuItem>
                <MenuItem value="Level 2">
              Level 2
            </MenuItem>
            <MenuItem value="Level 3">
              Level 3
            </MenuItem>
            <MenuItem value="Level 4">
              Level 4
            </MenuItem>
            <MenuItem value="Level 5">
              Level 5
            </MenuItem>
            <MenuItem value="Level 6">
              Level 6
            </MenuItem>
            <MenuItem value="Level 7">
              Level 7
            </MenuItem>
            <MenuItem value="Level 8">
              Level 8
            </MenuItem>
            <MenuItem value="Foundation Level">
              Foundation Level
            </MenuItem>
            <MenuItem value="Advance Level">
              Advance Level
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
