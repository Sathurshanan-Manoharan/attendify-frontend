import React from "react";
import { CardHeader, Typography, TextField, Select, MenuItem, FormControl, InputLabel, Grid, Button, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const squareCardStyle = {
  height: "700px", // Set a fixed height to create a square card
  width: "1000px", // Allow the width to adjust based on content or container
  overflow: "hidden", // Hide overflow content if any
  borderRadius: "10px", // Rounded corners
};

const RectangularCardStyle = {
  height: "1000px", // Set a fixed height to create a square card
  width: "1600px", // Allow the width to adjust based on content or container
  overflow: "hidden", // Hide overflow content if any
  borderRadius: "10px", // Rounded corners
};

// Dummy data for demonstration
const students = [
  { id: 1, name: 'John Doe', studentID: '12345', iitEmail: 'john@example.com', course: 'Computer Science', level: '5', tutorialGroup: "O" },
  { id: 2, name: 'Jane Doe', studentID: '67890', iitEmail: 'jane@example.com', course: 'Engineering', level: '5', tutorialGroup: "O" }
];

function AddStudent() {
  return (
    <div>
      <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "2rem", marginBottom: "12px" }}>
        Home/<span style={{ color: "#004AAD" }}>attendance</span>
      </Typography>

      <Card style={{ ...squareCardStyle }}>
        <CardHeader
          title={
            <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "3rem", color: "#004AAD" }}>
              Add a student
            </Typography>
          }
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="off"
                sx={{ borderRadius: "10px" }} // Apply borderRadius to the entire TextField
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="off"
                sx={{ borderRadius: "10px" }} // Apply borderRadius to the entire TextField
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="studentID"
                label="Student ID"
                name="studentID"
                autoComplete="off"
                sx={{ borderRadius: "10px" }} // Apply borderRadius to the entire TextField
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="iitEmail"
                label="IIT Email"
                name="iitEmail"
                autoComplete="off"
                sx={{ borderRadius: "10px" }} // Apply borderRadius to the entire TextField
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="course"
                label="Course"
                name="course"
                autoComplete="off"
                sx={{ borderRadius: "10px" }} // Apply borderRadius to the entire TextField
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="level"
                label="Level"
                name="level"
                autoComplete="off"
                sx={{ borderRadius: "10px" }} // Apply borderRadius to the entire TextField
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" margin="normal" required>
                <InputLabel id="tutorialGroupLabel">Tutorial Group</InputLabel>
                <Select
                  labelId="tutorialGroupLabel"
                  id="tutorialGroup"
                  label="Tutorial Group"
                  sx={{ borderRadius: "10px" }} // Apply borderRadius to the Select component
                >
                  {[...Array(26)].map((_, index) => (
                    <MenuItem key={index} value={String.fromCharCode(65 + index)}>
                      <Typography fontWeight="bold">
                      {String.fromCharCode(65 + index)}
                      </Typography>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container justifyContent="center" marginTop={2}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#004AAD", color: "white", width: "800px", borderRadius: "10px" }} // Apply borderRadius to the Button
            >
              Create Student
            </Button>
          </Grid>
        </CardContent>
      </Card>
                    <br />

      {/* Adding another card below */}
      <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "3rem", color: "#004AAD", marginTop: "24px" }}>
        Existing Students
      </Typography>

      <Card style={{ ...RectangularCardStyle }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "2rem", color: "#004AAD" }}>
                Directory
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="search"
                label="Search Student"
                name="search"
                autoComplete="off"
              />
            </Grid>
          </Grid>

          {/* Table */}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontSize: "1.2rem", fontWeight: "bold" }}>ID</TableCell>
                  <TableCell style={{ fontSize: "1.2rem", fontWeight: "bold" }}>NAME</TableCell>
                  <TableCell style={{ fontSize: "1.2rem", fontWeight: "bold" }}>LEVEL</TableCell>
                  <TableCell style={{ fontSize: "1.2rem", fontWeight: "bold" }}>COURSE</TableCell>
                  <TableCell style={{ fontSize: "1.2rem", fontWeight: "bold" }}>IIT EMAIL</TableCell>
                  <TableCell style={{ fontSize: "1.2rem", fontWeight: "bold" }}>TUTORIAL GROUP</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* You can map through your data and create rows */}
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.studentID}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.level}</TableCell>
                    <TableCell>{student.course}</TableCell>
                    <TableCell>{student.iitEmail}</TableCell>
                    <TableCell>{student.tutorialGroup}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddStudent;
