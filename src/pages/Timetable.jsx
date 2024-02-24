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
