import { useState } from "react";
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Snackbar,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import MuiAlert from "@mui/material/Alert";
import { data } from "autoprefixer";

// Dummy data for demonstration
const students = [
  {
    id: 1,
    name: "John Doe",
    studentID: "12345",
    iitEmail: "john@example.com",
    course: "Computer Science",
    level: "5",
    tutorialGroup: "O",
  },
  {
    id: 2,
    name: "Jane Doe",
    studentID: "67890",
    iitEmail: "jane@example.com",
    course: "Engineering",
    level: "5",
    tutorialGroup: "O",
  },
  {
    id: 3,
    name: "Mark Doe",
    studentID: "34523",
    iitEmail: "Mark@example.com",
    course: "Computer Science",
    level: "5",
    tutorialGroup: "O",
  },
  {
    id: 4,
    name: "Smith Doe",
    studentID: "45323",
    iitEmail: "Smith@example.com",
    course: "Engineering",
    level: "5",
    tutorialGroup: "O",
  },
  {
    id: 5,
    name: "Andrew Doe",
    studentID: "63452",
    iitEmail: "Andrew@example.com",
    course: "Engineering",
    level: "5",
    tutorialGroup: "O",
  },
];

function AddStudent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    uid: "",
    studentID: "",
    iitEmail: "",
    course: "",
    level: "",
    tutorialGroup: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://attendify-backend-i3rpgzeqlq-uc.a.run.app/api/v1/student",
        formData
      );
      console.log(response); 
      setFormData({
        firstName: "",
        lastName: "",
        uid: "",
        studentID: "",
        iitEmail: "",
        course: "",
        level: "",
        tutorialGroup: "",
      });

      setSnackbarMessage("Student created successfully");
      setOpenSnackbar(true);
      // Show success Snackbar
    } catch (error) {
      // console.error(error);
      console.log("Failed");
      console.log(formData);
      setSnackbarMessage("Failed to create student");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "#004AAD", marginBottom: "10px " }}
      >
        Add Student
      </Typography>
      <Card
        sx={{ boxShadow: 2, borderRadius: "12px", border: "none" }}
        component="form"
        onSubmit={handleSubmit}
      >
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
                value={formData.firstName}
                onChange={handleChange}
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
                value={formData.lastName}
                onChange={handleChange}
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
                value={formData.studentID}
                onChange={handleChange}
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
                value={formData.iitEmail}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={6}>
              <FormControl
                fullWidth
                variant="outlined"
                margin="normal"
                required
              >
                <InputLabel id="courseLabel">Course</InputLabel>
                <Select
                  labelId="courseLabel"
                  id="course"
                  label="Course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                >
                  <MenuItem value="SE">
                    <Typography fontWeight="bold">SE</Typography>
                  </MenuItem>
                  <MenuItem value="CS">
                    <Typography fontWeight="bold">CS</Typography>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                fullWidth
                variant="outlined"
                margin="normal"
                required
              >
                <InputLabel id="levelLabel">Level</InputLabel>
                <Select
                  labelId="levelLabel"
                  id="level"
                  label="level"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                >
                  <MenuItem value="L4">
                    <Typography fontWeight="bold">L4</Typography>
                  </MenuItem>
                  <MenuItem value="L5">
                    <Typography fontWeight="bold">L5</Typography>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                fullWidth
                variant="outlined"
                margin="normal"
                required
              >
                <InputLabel id="tutorialGroupLabel">Tutorial Group</InputLabel>
                <Select
                  labelId="tutorialGroupLabel"
                  id="tutorialGroup"
                  label="Tutorial Group"
                  name="tutorialGroup"
                  value={formData.tutorialGroup}
                  onChange={handleChange}
                >
                  {/* {[...Array(2)].map((_, index) => (
                    <MenuItem
                      key={index}
                      value={String.fromCharCode(65 + index)}
                    >
                      <Typography fontWeight="bold">
                        {String.fromCharCode(65 + index)}
                      </Typography>
                    </MenuItem>
                  ))} */}
                  <MenuItem value="A">
                    <Typography fontWeight="bold">A</Typography>
                  </MenuItem>
                  <MenuItem value="B">
                    <Typography fontWeight="bold">B</Typography>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="uid"
                label="uid"
                name="uid"
                autoComplete="off"
                value={formData.uid}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" marginTop={2}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#004AAD",
                color: "white",
                fontSize: "1rem",
                width: "800px",
                boxShadow: 2,
                borderRadius: "12px",
                border: "none",
                marginTop: "20px",
              }} // Apply borderRadius to the Button
            >
              Create Student
            </Button>
          </Grid>
        </CardContent>
      </Card>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="success"
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>

      {/* Adding another card below */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#004AAD", marginTop: "24px" }}
      >
        Existing Students
      </Typography>

      <Card
      //style={{ ...RectangularCardStyle }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  fontSize: "2.5rem",
                  color: "#004AAD",
                }}
              >
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
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    ID
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    NAME
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    LEVEL
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    COURSE
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    IIT EMAIL
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    TUTORIAL GROUP
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    UID
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Check */}
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell style={{ textAlign: "center" }}>
                      {student.studentID}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {student.name}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {student.level}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {student.course}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {student.iitEmail}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {student.tutorialGroup}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {student.uID}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  );
}

export default AddStudent;
