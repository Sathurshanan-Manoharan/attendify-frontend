import React from 'react';
import { Grid,Box,Typography ,Card,CardContent} from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Search } from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {FormControl,Select,InputLabel} from '@mui/material';
import {Autocomplete,IconButton} from '@mui/material';




const options = [
  'Update Lecture',
  'Cancel Lecture', 
];

function Timetable() {
  const [time, setTime] = React.useState('');

  const handleChange = (event) => {
    setTime(event.target.value);
  };
  const lectures = [
    { label: '12/11/23 Tuesday SDGP Session 1 - 08:30', value: 1 },
    { label: '12/11/23 Tuesday SDGP Session 2 - 12:30', value: 2 },
    { label: '19/11/23 Tuesday SDGP Session 3 - 12:30', value: 3 }
  ];
   const [selectedOption, setSelectedOption] = React.useState(options[0]);
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
    const timeSlots = ['8.30', '10.30', '13.30', '15.30'];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const [open2, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setSelectedOption(event.target.innerText);
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen(false);
  };
    return (
        <Box>
            <Box sx={{ marginBottom: "20px", marginTop: "0px"}}>
              <Grid container>
                <Grid item xs={11}>
                <Typography variant="h4" color="#004AAD" fontWeight="bold">
                    Schedule Viewport
                </Typography>
                </Grid>
                <Grid item xs={1} > 
               <Button> 
                <Fab color="primary" aria-label="add" onClick={handleClick}>
                        <AddIcon />
                </Fab>
              </Button>
              </Grid>
              </Grid>                    
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        
                        width: '20ch',
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClickOpen} variant="outlined" >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu> 
                  <React.Fragment>                   
                  <Dialog                  
                    open={open2}
                    onClose={handleClose2}
                    fullWidth
                    maxWidth="sm"
                    PaperProps={{
                      component: 'form',
                      onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose2();
                      },
                      style: {
                        maxWidth: '800px', 
                        minWidth: '400px',
                        maxHeight: '600px',
                        minHeight:'400px',

                      },                      
                    }}                    
                  >
                  <DialogTitle>
                    {selectedOption === 'Update Lecture' && ( 
                        <Typography  style={{ fontSize: 18, marginLeft: '10px', marginTop: '5px',color:'gray' }}>Schedule additional lecture</Typography>)}
                    {selectedOption === 'Cancel Lecture' && ( 
                        <Typography  style={{ fontSize: 18, marginLeft: '10px', marginTop: '5px',color:'gray' }}>Cancel scheduled lecture</Typography>)}
                   </DialogTitle>                   
                  <DialogContent > 
                  {selectedOption === 'Update Lecture' && (
                  <DialogContentText width="600px">
                  <div> 
                  <div >
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
                  sx={{ height: '0.1px', backgroundColor: 'white', marginTop: '-30px', marginLeft: '60%',width:'45%' }}
                />
                <Typography style={{ fontSize: 15, marginLeft: '280px', marginTop: '12px' ,fontWeight:550}}>Module</Typography>
                <TextField
                  variant="outlined"
                  label="E.G. SEPP"
                  size="small"                   
                  sx={{ height: '0.1px', backgroundColor: 'white', marginTop: '-25px', marginLeft: '60%',width:'45%' }}
                />
                <Typography style={{ fontSize: 15, marginLeft: '280px', marginTop: '10px' ,fontWeight:550}}>Tutorial<br />group</Typography>
                <TextField
                  variant="outlined"
                  label="G1. G2"
                  size="small"                    
                  sx={{ height: '0.1px', backgroundColor: 'white',  marginTop: '-40px',marginLeft: '60%',width:'45%' }}
                /> 
                </div>
                </DialogContentText>
                )} 
               {selectedOption === 'Cancel Lecture' && ( 
                <DialogContentText width="600px"> 
                <div>               
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
                                      <Search />
                                    </IconButton>
                                  ),
                                  disableUnderline: true,
                                  }}
                                  {...params}
                                  />
                                  )}
                              /> 
                              </div> 
                      </DialogContentText>)} 
                    </DialogContent>                   
                  <DialogActions>
                    <Button onClick={handleClose2}>Cancel</Button>
                    <Button type="submit">Submit</Button>
                  </DialogActions>
                </Dialog></React.Fragment>                         
              </Box> 
              <Card
              variant="elevation"
              sx={{            
              boxShadow: 2,
              borderRadius: "12px",
              border: "none",
            }}
              >
                <CardContent sx={{display:'flex',
              flexDirection:'column',
              justifyContent: 'space-evenly'}}> 
              <Box sx={{display:'flex',
              justifyContent: 'space-evenly'}}>
              {daysOfWeek.map((day, index) => (
                <Button key={index} variant={day,"contained"}  sx={{display: 'flex',
                justifyContent: 'space-between',
                fontWeight:"bold",color:"white",
                fontSize:"15px",backgroundColor:"#004AAD"}} onClick={()=>{
                  
                }} >{day}</Button>
              ))}
              </Box>

              </CardContent>


              </Card>
               
                                         
               
        </Box>        
    );
}
export default Timetable;
