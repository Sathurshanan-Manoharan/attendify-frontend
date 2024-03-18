import { useState } from "react";
import {
  CardHeader,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Button,
  Snackbar,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import MuiAlert from "@mui/material/Alert";

function AddLecturer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    uid: "",
    LecturerID: "",
    email: "",
    contractType: "",
    specialRole: "",
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
        "https://attendify-backend-i3rpgzeqlq-uc.a.run.app/api/v1/lecturer",
        formData
      );
      console.log(response); 
      setFormData({
        firstName: "",
        lastName: "",
        uid: "",
        LecturerID: "",
        email: "",
        contractType: "",
        specialRole: "",
      });

      setSnackbarMessage("Lecturer created successfully");
      setOpenSnackbar(true);
      // Show success Snackbar
    } catch (error) {
      // console.error(error);
        console.log("Failed");
        console.log(formData);
        setSnackbarMessage("Failed to create lecturer");
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
        sx={{ fontWeight: "bold", color: "#004AAD", marginBottom: "10px" }}
      >
        Add Lecturer
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
                id="lecturerID"
                label="Lecturer ID"
                name="LecturerID"
                autoComplete="off"
                value={formData.LecturerID}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Email"
                label="Email"
                name="email"
                autoComplete="off"
                value={formData.email}
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
                <InputLabel id="ContractTypeLabel">Contract Type</InputLabel>
                <Select
                  labelId="ContractTypeLabel"
                  id="ContractType"
                  label="Contract Type"
                  name="contractType"
                  value={formData.contractType}
                  onChange={handleChange}
                >
                  <MenuItem value="Full-time Lecturer">
                    <Typography fontWeight="bold">
                      Full-time Lecturer
                    </Typography>
                  </MenuItem>
                  <MenuItem value="Part-time Lecturer">
                    <Typography fontWeight="bold">Part-time Lecturer</Typography>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* Adding another form control element */}
            <Grid item xs={6}>
              <FormControl
                fullWidth
                variant="outlined"
                margin="normal"
                required
              >
                <InputLabel id="SpecialRoleLabel">Special Role</InputLabel>
                <Select
                  labelId="SpecialRoleLabel"
                  id="SpecialRole"
                  label="Special Role"
                  name="specialRole"
                  value={formData.specialRole}
                  onChange={handleChange}
                >
                  <MenuItem value="None">
                    <Typography fontWeight="bold">None</Typography>
                  </MenuItem>
                  <MenuItem value="Level Coordinator">
                    <Typography fontWeight="bold">Level Coordinator</Typography>
                  </MenuItem>
                  <MenuItem value="Course Leader">
                    <Typography fontWeight="bold">Course Leader</Typography>
                  </MenuItem>
                  <MenuItem value="Head of Department">
                    <Typography fontWeight="bold">
                      Head of Department
                    </Typography>
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
              }} 
            >
              Create Lecturer
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
    </>
  );
}

export default AddLecturer;
