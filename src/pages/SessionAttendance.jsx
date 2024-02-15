import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import userData from "../data/UserData";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

function SessionAttendance() {
  //List of all the columns stored as objects
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "date",
      headerName: "DATE",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "check-in",
      headerName: "CHECK IN",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "check-out",
      headerName: "CHECK OUT",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "STATUS",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Box
          sx={{
            backgroundColor:
              params.value === "Present"
                ? "#BCEAB8"
                : params.value === "Absent"
                ? "#F0C6C6"
                : "inherit",
            borderRadius: "100px",
            paddingTop: "7px",
            paddingBottom: "7px",
            paddingRight: "40px",
            paddingLeft: "40px",
            color:
              params.value === "Present"
                ? "#2C5702"
                : params.value === "Absent"
                ? "BB0000"
                : "inherit",
            textAlign: "center",
          }}
        >
          {params.value}
        </Box>
      ),
    },
  ];

  //List of all the data entries stored as objects
  const rows = userData;

  return (
    //<ThemeProvider theme={textFont}>
    <Box>
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
            // boxShadow: ,
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

      <Box>
        <Card
          variant="elevation"
          sx={{
            // boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.035)",
            boxShadow: 2,
            borderRadius: "12px",
            border: "none",
          }}
        >
          <CardContent>
            <Typography variant="h6" color="#004AAD" fontWeight="bold">
              Attendance Overview
            </Typography>
            <Divider sx={{ marginBottom: "20px", marginTop: "12px" }}></Divider>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 20]}
              sx={{ textAlign: "center" }}
            />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default SessionAttendance;
