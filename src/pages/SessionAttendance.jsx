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
import userData from "../data/UserData";
//import 'typeface-inter';

/* const textFont = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});
 */
function SessionAttendance() {

  return (
    //<ThemeProvider theme={textFont}>
    <div>
      <div style={{ marginBottom: '10px'}}>
      <Typography variant="h4" color="#004AAD" fontWeight="bold" >Session Attendance</Typography>
      <br></br>

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
        <Card variant="elevation" sx={{boxShadow: '0px 0px 20px 10px rgba(0, 0, 0, 0.035)', borderRadius: '14px', }}>
          <CardContent>
            <Typography variant="h6" color="#004AAD" fontWeight="bold" >Attendance Overview</Typography>
            <hr style={{marginBottom: '20px', marginTop: '12px'}}></hr>
            <TableContainer component={Paper} sx={{boxShadow: 'none'}}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="left" sx={{fontWeight: 'bold', fontSize: '14pt'}}>ID</TableCell>
                    <TableCell align="left" sx={{fontWeight: 'bold', fontSize: '14pt'}}>NAME</TableCell>
                    <TableCell align="left" sx={{fontWeight: 'bold', fontSize: '14pt'}}>DATE</TableCell>
                    <TableCell align="center" sx={{fontWeight: 'bold', fontSize: '14pt'}}>CHECK IN</TableCell>
                    <TableCell align="center" sx={{fontWeight: 'bold', fontSize: '14pt'}}>CHECK OUT</TableCell>
                    <TableCell align="center" sx={{fontWeight: 'bold', fontSize: '14pt'}}>STATUS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userData.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell align="left">{user.id}</TableCell>
                      <TableCell align="left">{user.name}</TableCell>
                      <TableCell align="left">{user.date}</TableCell>
                      <TableCell align="center">{user["check-in"]}</TableCell>
                      <TableCell align="center">{user["check-out"]}</TableCell>
                      <TableCell align="center" sx={{
                        backgroundColor: user.status === 'Present' ? '#BCEAB8' : user.status === 'Absent' ? '#F0C6C6' : 'inherit',
                        borderRadius: '20px',
                        padding: '16px',
                        color: user.status === 'Present' ? '#2C5702' : user.status === 'Absent' ? '#BB0000' : 'inherit', 
                      }}>{user.status}</TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </div>
    </div>

    

    //</ThemeProvider>
    
  )
}


export default SessionAttendance;
