import React from "react";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import  userData  from "../data/UserData";

//Creates 

function SessionAttendance() {

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1, headerAlign: 'center' },
    { field: 'name', headerName: 'NAME', flex: 1, headerAlign: 'center' },
    { field: 'date', headerName: 'DATE', flex: 1, headerAlign: 'center' },
    { field: 'check-in', headerName: 'CHECK IN', flex: 1, headerAlign: 'center' },
    { field: 'check-out', headerName: 'CHECK OUT', flex: 1, headerAlign: 'center' },
    { field: 'status', headerName: 'STATUS', flex: 1, headerAlign: 'center', renderCell: (params) => (
      <div style={{
        backgroundColor: params.value === 'Present' ? '#BCEAB8' : params.value === 'Absent' ? '#F0C6C6' : 'inherit',
        borderRadius: '20px',
        padding: '16px',
        color:params.value === 'Present' ? '#2C5702' : params.value === 'Absent' ? 'BB0000' : 'inherit',
        textAlign: 'center'
      }}>{params.value}</div>
    )},
  ];

  const rows = userData;

  return (
    //<ThemeProvider theme={textFont}>
    <div>
      <div style={{ marginBottom: '10px'}}>
      <Typography variant="h4" color="#004AAD" fontWeight="bold" >Session Attendance</Typography>

      <Card variant="elevation" sx={{boxShadow: '40px 0px 20px 10px rgba(0, 0, 0, 0.035)', borderRadius: '14px', }}>
        <CardContent sx={{paddingBottom:'2px'}}>
          <Grid container spacing={2} alignItems="center" >
            <Grid item xs={5.6} >
              <FormControl>
                <TextField label="What are you looking for?"
                  variant="filled"
                  InputProps={{endAdornment: (<IconButton><SearchIcon /></IconButton>), disableUnderline: true,}}
                  fullWidth={true}
                  sx={{'& .MuiFilledInput-root': {
                    borderRadius: '6px',},
                      width:'400pt'}}></TextField>
              </FormControl>
            </Grid>
            <Grid item xs={2.2}>
              <FormControl fullWidth={true}>
              <TextField select label="Tutorial Group" fullWidth={true} variant="outlined">
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="group1">Group 1</MenuItem>
                  <MenuItem value="group2">Group 2</MenuItem> 
                  <MenuItem value="group3">Group 3</MenuItem>
              </TextField>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth={true}>
                <TextField select label="Status" fullWidth={true} variant="outlined">
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="present">Present</MenuItem>
                  <MenuItem value="absent">Absent</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={2} md={2}>
              <Button variant="contained" color="primary" fullWidth={true} sx={{height: '41pt'}}>
                Search
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      </div>

      <div>
        <Card variant="elevation" sx={{boxShadow: '0px 0px 20px 10px rgba(0, 0, 0, 0.305)', borderRadius: '14px', }}>
          <CardContent>
            <Typography variant="h6" color="#004AAD" fontWeight="bold">Attendance Overview</Typography>
            <hr style={{marginBottom: '20px', marginTop: '12px'}}></hr>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid 
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 20]}
                checkboxSelection={false}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


export default SessionAttendance;
