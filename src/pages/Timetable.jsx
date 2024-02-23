import React, { useState } from 'react';
import { Grid, Divider, Typography, Button, MenuItem, TextField ,FormHelperText,FormControl,Select,InputLabel,Autocomplete} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

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

  return (
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
  );
}

export default Timetable;