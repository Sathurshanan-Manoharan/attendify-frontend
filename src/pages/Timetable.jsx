<<<<<<< Updated upstream
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
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import InputLabel from '@mui/material/InputLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
function Timetable() {  
  //List of all the columns stored as arrays   
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const timeSlots = ['8.30', '9:00', '9.30', '10:00', '10:30', '11.30', '12.00', '12.30', '13:00', '13:30','14.00','14.30','15.00','15.30','16.00','16.30','17.00','17.30'];  
  return (    
    <Box>
      <Box sx={{ marginBottom: "20px", marginTop: "0px" }}>      
        <Card
          variant="elevation"
          sx={{
            boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.035)",            
            borderRadius: "12px",
            border: "none",
          }}
        >
          <CardContent>
            <Grid container spacing={2} > 
              {/* Schedule additional lecture part*/}
              <Grid item xs={3}>
              <h3 sx={{}}>Schedule additional lecture</h3><br></br>
                <FormControl fullWidth={true}>                  
                  <TextField 
                    fontWeight="bold"                   
                    select
                    label="Select Available Timeslot"                    
                    fullWidth={true}
                    variant="outlined"
                    size="small"
                  >
                    <MenuItem value="8.30">8.30</MenuItem>
                    <MenuItem value="10.30">10.30</MenuItem>
                    <MenuItem value="13.30">13.30</MenuItem>
                    <MenuItem value="15.30">15.30</MenuItem>
                  </TextField>
                </FormControl>
              </Grid>
              {/* Input Labels */}
              <Grid item xs={0.0}>
                <InputLabel sx={{fontWeight:"bold"}}>Course</InputLabel><br></br><br></br>
                <InputLabel sx={{fontWeight:"bold"}}>Title</InputLabel><br></br><br></br>
                <InputLabel sx={{fontWeight:"bold"}}>Module</InputLabel><br></br><br></br>
                <InputLabel sx={{fontWeight:"bold"}}>Tutorial Group</InputLabel>  
              </Grid>
              {/* TextFields*/}
              <Grid item xs={3}>
                <FormControl  >               
                  <TextField
                      id="course"
                      label="E.G.Software Engineering"                      
                      size ="small"                     
                      /><br></br>
                  <TextField
                      id="title"
                      label="E.G.Additional LEC 1"                      
                      size ="small"                      
                      /><br></br>
                  <TextField
                      id="module"
                      label="E.G.SEPP"                      
                      size ="small"                      
                      /><br></br>
                  <TextField
                      id="tutorial"
                      label="G1 G2"                      
                      size ="small"                      
                      /><br></br>       
              </FormControl>
              {/* Add lecture button */}
              <Button
                  variant="contained"
                  color="primary"                  
                  sx={{                    
                    boxShadow: 2,
                    borderRadius: "12px",
                    border: "none",
                    backgroundColor: "#004AAD",
                  }}
                  size="normal"
                >
                  Add Lecture
                </Button>            
              </Grid>
              <Grid item xs={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Divider orientation="vertical" style={{ height: '300px' }} />
              </Grid> 
              {/* Cancel lecture part             */}
              <Grid item xs={3}>
              <h3 sx={{}}>Cancel scheduled lecture</h3><br></br>
                <FormControl fullWidth={true}>                  
                  <TextField                    
                    InputProps={{                      
                      endAdornment: (
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      ),
                      disableUnderline: true,
                    }}
                    label="Search for a lecture by Course,..."                    
                    fullWidth={true}
                    variant="outlined"
                    size="small"                    
                  >                  
                    <MenuItem value="8.30">Suggestions</MenuItem>
                    <MenuItem value="10.30">10.30</MenuItem>
                    <MenuItem value="13.30">13.30</MenuItem>
                    <MenuItem value="15.30">15.30</MenuItem>
                  </TextField><br></br>
                </FormControl>
                {/* Cancel lecture Button */}
                <Button
                  variant="contained"                  
                  color="primary"                  
                  sx={{ 
                    textAlign:"right",                   
                    boxShadow: 2,
                    borderRadius: "12px",
                    border: "none",
                    backgroundColor: "#004AAD",
                  }}
                  size="normal"
                >
                  Cancel Lecture
                </Button>
              </Grid>             
            </Grid>           
          </CardContent>             
      </Card>
      </Box>
      <Box>
        {/* Timetable card       */}
        <Card
          variant="elevation"
          sx={{            
            boxShadow: 2,
            borderRadius: "12px",
            border: "none",
          }}
        >          
          <CardContent>
             <Typography variant="h4" color="#004AAD" fontWeight="bold">
              Schedule Viewport
            </Typography>
            <Divider sx={{ marginBottom: "20px", marginTop: "12px" }}></Divider>
            <TableContainer> 
            <Table sx={{width:'1100px'}}>
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      width:'157px',
                      backgroundColor:'#CEE3F8',
                    }}
                  >
                    Sunday
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      width:'157px',                     
                    }}
                  >
                    Monday
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      width:'157px',
                    }}
                  >
                    Tuesday
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      width:'157px',
                    }}
                  >
                    Wednesday
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      width:'157px',
                    }}
                  >
                    Thursday
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      width:'157px',
                    }}
                  >
                    Friday
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      width:'157px',
                      backgroundColor:'#CEE3F8',
                    }}
                  >
                    Saturday
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>              
            {timeSlots.map((time) => (
              <TableRow key={time} style={{ height: '50px'}}>
                {daysOfWeek.map((day, dayIndex) => (
                  <TableCell key={`${day}-${time}`} style={{ backgroundColor: day === 'Sunday' || day === 'Saturday' ? '#CEE3F8' : 'inherit', borderRight: dayIndex === daysOfWeek.length - 1 ? 'none' : '1px solid #ddd',position:"relative", height: '15px', padding: 0, left:0}}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                      {/* {dayIndex === 0 && <div style={{ backgroundColor: '#fff', marginLeft: '5px' }}>{day === 'Sunday' ? time : ''}</div>} */}
                      {dayIndex !== daysOfWeek.length && (
                        <React.Fragment>
                          <div style={{ marginLeft:'-110px' }}>{time}</div>
                          <div style={{ position: 'absolute', top: '0%', bottom: '0%', left: '25%', width: '1px', backgroundColor: '#ddd' , marginLeft:'10px' }}></div>                        
                        </React.Fragment>
                      )}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}                  
          </TableBody>              
          </Table>
          </TableContainer>           
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Timetable;
=======
import React, { useState } from 'react';
import { Grid, Divider, Typography, Button, MenuItem, TextField ,FormHelperText,FormControl,Select,InputLabel,Autocomplete} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Timetable() {
  const [time, setTime] = React.useState('');

  const handleChange = (event) => {
    setTime(event.target.value);
  };
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const timeSlots = ['8.30', '9:00', '9.30', '10:00', '10:30', '11.30', '12.00', '12.30', '13:00', '13:30','14.00','14.30','15.00','15.30','16.00','16.30','17.00','17.30'];  
  

  const lectures = [
    { label: '12/11/23 Tuesday SDGP Session 1 - 08:30', value: 1 },
    { label: '12/11/23 Tuesday SDGP Session 2 - 12:30', value: 2 },
    { label: '19/11/23 Tuesday SDGP Session 3 - 12:30', value: 3 }
  ];

  return (
    <Box>
      <Box sx={{ marginBottom: "20px", marginTop: "0px" }}>  
    <Card
    variant="elevation"
    sx={{
      boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.035)",            
      borderRadius: "12px",
      border: "none",
    }}>
      <CardContent>
    <Grid container>
      {/* left column */}
      <Grid item xs={6}>
        <Typography  style={{ fontSize: 18, marginLeft: '10px', marginTop: '5px',color:'gray' }}>Schedule additional lecture</Typography>
        <div>
            <FormControl sx={{ m: 1, minWidth: 230,marginTop:'30px'}}>
            <InputLabel id="demo-simple-select-helper-label">Select Available Timeslot</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={time}
              label="Select Available Timeslot"
              onChange={handleChange}
            >
              <MenuItem value={1}>8:30</MenuItem>
              <MenuItem value={2}>10:30</MenuItem>
              <MenuItem value={3}>13:30</MenuItem>
              <MenuItem value={4}>15:30</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Typography style={{ fontSize: 15, marginLeft: '280px', marginTop: '-50px', fontWeight:550 }}>Course</Typography>
        <TextField
          variant="outlined"
          label="E.G. Software Engineering"
          // InputLabelProps={{ shrink: inputValue.length > 0 ? true : false }}
          // onChange={handleInputChange}
          size="small"
          sx={{ backgroundColor: 'white', marginTop:'-35px', marginLeft: '60%',width:'45%' }}
        />

        <Typography style={{ fontSize: 15, marginLeft: '280px', marginTop: '15px',fontWeight:550 }}>Title</Typography>
        <TextField
          variant="outlined"
          label="E.G. Additional LEC 1"
          size="small"
          // InputLabelProps={{ shrink: inputValue.length > 0 ? true : false }}
          // onChange={handleInputChange}
          sx={{ height: '0.1px', backgroundColor: 'white', marginTop: '-30px', marginLeft: '60%',width:'45%' }}
        />

        <Typography style={{ fontSize: 15, marginLeft: '280px', marginTop: '12px' ,fontWeight:550}}>Module</Typography>
        <TextField
          variant="outlined"
          label="E.G. SEPP"
          size="small"
          // InputLabelProps={{ shrink: inputValue.length > 0 ? true : false }}
          // onChange={handleInputChange}
          sx={{ height: '0.1px', backgroundColor: 'white', marginTop: '-25px', marginLeft: '60%',width:'45%' }}
        />

        <Typography style={{ fontSize: 15, marginLeft: '280px', marginTop: '10px' ,fontWeight:550}}>Tutorial<br />group</Typography>
        <TextField
          variant="outlined"
          label="G1. G2"
          size="small"
          // InputLabelProps={{ shrink: inputValue.length > 0 ? true : false }}
          // onChange={handleInputChange}
          sx={{ height: '0.1px', backgroundColor: 'white',  marginTop: '-40px',marginLeft: '60%',width:'45%' }}
        />

        <button 
        style={{ width: '25%',height:'40px',marginTop: '10px',marginLeft: '80%', backgroundColor:'#004AAD',borderRadius:'15px',color:'white'}}>
          Add Lecture
        </button>

      </Grid>

      {/* Vertical Divider */}
      <Grid item xs={1}>
        <Divider orientation="vertical" sx={{ height: '410px', marginRight: '50px' }} />
      </Grid>

      {/* right column */}
      <Grid item xs={5}>
        <Typography style={{ marginRight: '250px',fontSize: 18, marginTop: '5px',color:'gray' }} >Cancel scheduled lecture</Typography>

      <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={lectures}
          getOptionLabel={(option) => option.label}
          renderInput={(params) =>(
          <TextField 
          label="Search for a lecture by Course, Title..."
          variant="outlined"
          sx={{backgroundColor: 'white', marginTop: '30px', marginRight: '5%',width:'90%' }}
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
            disableUnderline: true,
            }}
            {...params}
            />
            )}
        />
      
        <button
        style={{ width: '25%',height:'40px',marginTop: '215px',marginLeft: '62%', backgroundColor:'#004AAD',borderRadius:'15px',color:'white'}}>
          Cancel Lecture
        </button>
      </Grid>
    </Grid>
    </CardContent>
    </Card>
    </Box>
    {/* Timetable */}
    <Box>
    <Card
          variant="elevation"
          sx={{            
            boxShadow: 2,
            borderRadius: "12px",
            border: "none",
          }}
        >          
          <CardContent>
             <Typography variant="h4" color="#004AAD" fontWeight="bold">
              Schedule Viewport
            </Typography>
            <Divider sx={{ marginBottom: "20px", marginTop: "12px" }}></Divider>
            <TableContainer> 
            <Table sx={{width:'1100px'}}>
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      width:'157px',
                      backgroundColor:'#CEE3F8',
                    }}
                  >
                    Sunday
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      width:'157px',                     
                    }}
                  >
                    Monday
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      width:'157px',
                    }}
                  >
                    Tuesday
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      width:'157px',
                    }}
                  >
                    Wednesday
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      width:'157px',
                    }}
                  >
                    Thursday
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      width:'157px',
                    }}
                  >
                    Friday
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      width:'157px',
                      backgroundColor:'#CEE3F8',
                    }}
                  >
                    Saturday
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>              
            {timeSlots.map((time) => (
              <TableRow key={time} style={{ height: '50px'}}>
                {daysOfWeek.map((day, dayIndex) => (
                  <TableCell key={`${day}-${time}`} style={{ backgroundColor: day === 'Sunday' || day === 'Saturday' ? '#CEE3F8' : 'inherit', borderRight: dayIndex === daysOfWeek.length - 1 ? 'none' : '1px solid #ddd',position:"relative", height: '15px', padding: 0, left:0}}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                      {/* {dayIndex === 0 && <div style={{ backgroundColor: '#fff', marginLeft: '5px' }}>{day === 'Sunday' ? time : ''}</div>} */}
                      {dayIndex !== daysOfWeek.length && (
                        <React.Fragment>
                          <div style={{ marginLeft:'-110px' }}>{time}</div>
                          <div style={{ position: 'absolute', top: '0%', bottom: '0%', left: '25%', width: '1px', backgroundColor: '#ddd' , marginLeft:'10px' }}></div>                        
                        </React.Fragment>
                      )}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}                  
          </TableBody>              
          </Table>
          </TableContainer>           
          </CardContent>
        </Card>     
    </Box>
    </Box>      
  );
}

export default Timetable;
>>>>>>> Stashed changes
