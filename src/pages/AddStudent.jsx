import { useState, useEffect } from "react";
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

  const [students, setStudents] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isDuplicate = students.some(
      (student) =>
        student.uid === formData.uid ||
        student.studentID === formData.studentID ||
        student.iitEmail === formData.iitEmail
    );
  
    if (isDuplicate) {
      setSnackbarMessage({
        severity: "error",
        message: "Student already existed!"
      });
      setOpenSnackbar(true);
      return; // Prevent form submission
    }
    


    try {
      const response = await axios.post(
        "https://attendify-backend-i3rpgzeqlq-uc.a.run.app/api/v1/student",
        formData
      );
      console.log(response); 

      fetchStudents();

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

      setSnackbarMessage({
        severity: "success",
        message: "Student created successfully!"
      });
      setOpenSnackbar(true);
      // Show success Snackbar
    } catch (error) {
      // console.error(error);
      console.log("Failed");
      console.log(formData);
      setSnackbarMessage({
        severity: "error",
        message: "Failed to create student!"
      });
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  useEffect(() => {
    fetchStudents(); 
  }, []); // 
  
  const fetchStudents = async () => { // Add formData as a parameter
    try {
      const response = await axios.get(
        "https://attendify-backend-i3rpgzeqlq-uc.a.run.app/api/v1/student",
      );
      console.log(response.data); // Log the response data
      const { data } = response.data; // Extracting the 'data' object from the response
      if (data && data.students && Array.isArray(data.students)) {
      setStudents(data.students);
      } else {
        console.error("Response data is not an array:", response.data);
      }
    } catch (error) {
      console.error("Failed to fetch students:", error);
    }
  };

  const handleSearch = (e) => {
    console.log("Search query:", e.target.value);
    setSearchQuery(e.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.studentID.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // student.tutorialGroup.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.iitEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.uid.toLowerCase().includes(searchQuery.toLowerCase())
);

  console.log("Filtered students:", filteredStudents);

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
          severity={snackbarMessage.severity} >
          {snackbarMessage.message}
        </MuiAlert>
      </Snackbar>

     {/* Adding another card below */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#004AAD", marginTop: "24px" }}
      >
        Existing Students
      </Typography>

      <Card sx={{marginTop: "30px"}}>
        <CardContent>
          <Grid container spacing={2} >
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
                value={searchQuery}
                onChange={handleSearch}
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
              {searchQuery ? (
                filteredStudents.map((student) => (
                  <TableRow key={student._id}>
                    <TableCell align="center">{student.studentID}</TableCell>
                    <TableCell align="center">{`${student.firstName} ${student.lastName}`}</TableCell>
                    <TableCell align="center">{student.level}</TableCell>
                    <TableCell align="center">{student.course}</TableCell>
                    <TableCell align="center">{student.iitEmail}</TableCell>
                    <TableCell align="center">{student.tutorialGroup}</TableCell>
                    <TableCell align="center">{student.uid}</TableCell>
                  </TableRow>
                ))
              ) : (
                students.map((student) => (
                  <TableRow key={student._id}>
                    <TableCell align="center">{student.studentID}</TableCell>
                    <TableCell align="center">{`${student.firstName} ${student.lastName}`}</TableCell>
                    <TableCell align="center">{student.level}</TableCell>
                    <TableCell align="center">{student.course}</TableCell>
                    <TableCell align="center">{student.iitEmail}</TableCell>
                    <TableCell align="center">{student.tutorialGroup}</TableCell>
                    <TableCell align="center">{student.uid}</TableCell>
                  </TableRow>
    ))
  )}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  );
}

export default AddStudent;
