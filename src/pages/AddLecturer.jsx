import React from "react";
import { CardHeader, Typography, TextField, Select, MenuItem, FormControl, InputLabel, Grid, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

/*
const squareCardStyle = {
  height: "700px", // Set a fixed height to create a square card
  width: "1000px", // Allow the width to adjust based on content or container
  overflow: "hidden", // Hide overflow content if any
  borderRadius: "10px", // Rounded corners
};*/

function AddLecturer() {
  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "12px" }}>
        Home/Update User/<span style={{ color: "#004AAD" }}>Add Lecturer</span>
      </Typography>

      <Card 
      // style={{ ...squareCardStyle }}
      >
        <CardHeader
          title={
            <Typography variant="h3" sx={{ fontWeight: "bold", fontSize: "2.5rem", color: "#004AAD" }}>
              Add Lecturer
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
                name="lecturerID"
                autoComplete="off"
                
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
                name="Email"
                autoComplete="off"
                
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" margin="normal" required>
                <InputLabel id="ContractTypeLabel">Contract Type</InputLabel>
                <Select
                  labelId="ContractTypeLabel"
                  id="ContractType"
                  label="Contract Type"
                   
                >
                  <MenuItem value="Full-time Lecturer"><Typography fontWeight="bold">Full-time Lecturer</Typography></MenuItem>
                  <MenuItem value="Visiting Lecturer"><Typography fontWeight="bold">Visiting Lecturer</Typography></MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* Adding another form control element */}
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" margin="normal" required>
                <InputLabel id="SpecialRoleLabel">Special Role</InputLabel>
                <Select
                  labelId="SpecialRoleLabel"
                  id="SpecialRole"
                  label="Special Role"
                  
                >
                  <MenuItem value="Option 1"><Typography fontWeight="bold">None</Typography></MenuItem>
                  <MenuItem value="Option 2"><Typography fontWeight="bold">Level Coordinator</Typography></MenuItem>
                  <MenuItem value="Option 3"><Typography fontWeight="bold">Course Leader</Typography></MenuItem>
                   <MenuItem value="Option 4"><Typography fontWeight="bold">Head of Department</Typography></MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" marginTop={2}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#004AAD", color: "white",fontSize: "1rem" ,width: "800px", borderRadius: "10px", marginTop: "20px" }} // Apply borderRadius to the Button
            >
              Create Lecturer
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default AddLecturer;
