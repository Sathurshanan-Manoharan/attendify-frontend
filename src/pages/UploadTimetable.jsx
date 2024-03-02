import React from "react";
import {
  Card,
  CardHeader,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Button,
  CardContent
} from "@mui/material";

function UploadTimetable() {
  return (
    <Card sx={{ maxWidth: 600, marginTop: 0 }}> {/* Adjusted marginTop value */}
      <CardHeader
        title="Upload Timetable"
        sx={{ backgroundColor: "#004AAD", color: "white" }}
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
              ><MenuItem value="Foundation Certificate in Higher Education – Business">
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
              <InputLabel id="SpecialRoleLabel">Select an option</InputLabel>
              <Select
                labelId="SpecialRoleLabel"
                id="SpecialRole"
                label="Special Role"
              >
                 {[...Array(26)].map((_, index) => (
                    <MenuItem
                      key={index}
                      value={String.fromCharCode(65 + index)}
                    >
                      <Typography >
                        {String.fromCharCode(65 + index)}
                      </Typography>
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{marginLeft: "150px", marginBottom: "10px",
              marginRight: "10px", padding : "20px", width: "0.5em",height:"auto",backgroundColor: "white", color: "black", borderRadius: "50%"  }}
              fullWidth
              
            >
              + 
            </Button>
            <Typography
              variant="h7"
              sx={{ margingLeft: "50px", color: "#black", marginBottom: "10px" }}
            >
             Add CSV
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ width: "auto", backgroundColor: "#004AAD", color: "white" }}
              fullWidth
            >
              Upload Timetable
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default UploadTimetable;
