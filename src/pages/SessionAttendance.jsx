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

function SessionAttendance() {

  return (
    <div>
      <Typography variant="h4" color="#004AAD" fontWeight="bold">Session Attendance</Typography>
      <br></br>

      <Card variant="elevation" sx={{boxShadow: '0px 0px 20px 10px rgba(0, 0, 0, 0.035)', }}>
        <CardContent sx={{paddingBottom:'2px'}}>
          <Grid container spacing={2} alignItems="center" >
            <Grid item xs={4.2} >
              <FormControl>
                <TextField label="What are you looking for?"
                  variant="filled"
                  InputProps={{endAdornment: (<IconButton><SearchIcon /></IconButton>), disableUnderline: true,}}
                  fullWidth
                  sx={{'& .MuiFilledInput-root': {
                    borderRadius: '20px',},
                      width:'400px'}}></TextField>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
              <TextField select label="Tutorial Group" fullwidth variant="outlined">
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="group1">Group 1</MenuItem>
                  <MenuItem value="group2">Group 2</MenuItem>
                  <MenuItem value="group3">Group 3</MenuItem>
              </TextField>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

    </div>
    
    
  )
}


export default SessionAttendance;
