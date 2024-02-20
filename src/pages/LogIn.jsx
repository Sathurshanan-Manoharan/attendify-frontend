import React from 'react';
import { Grid, Typography, Paper, TextField, Button,SvgIcon ,Divider,InputAdornment } from '@mui/material';
import { styled } from '@mui/system';





const LeftColumnPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#004AAD',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh'

}));

const RightColumnPaper = styled(Paper)(({ theme }) => ({
  backgroundImage: `url('../src/assets/Group 17.png')`, // Replace with your actual image path
  backgroundSize: 'cover',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}));

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Grid container>
      <Grid item sx={{ position: 'absolute', top: 0, left: 0, height: '50%' , bottom:0,width:'40%'}}>
      <LeftColumnPaper>
      <img src="../src/assets/logo.png" alt="Left Column Image" style={{ maxWidth: '70%', maxHeight: '70%', marginTop: '-70px' }} />
      <img src="../src/assets/picture.png" alt="Left Column Image" style={{ maxWidth: '60%', maxHeight: '60%', marginTop: '-15%' }} />
      <Typography style={{ fontSize:20,color: 'white', marginTop: '5%' }}> Streamlining Attendance, Empowering Efficiency!</Typography>

        </LeftColumnPaper>
      </Grid>

        {/* Right Column */}
        <Grid item sx={{ position: 'absolute', top:0, right: 0, height:'100%' ,width:'60%',bottom:0}}>
          <RightColumnPaper>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#004AAD',paddingTop:'30px' }}>Welcome Back!</Typography>
            <Typography >Unlock Learning with Ease! Your passport to </Typography>
            <Typography>hassle-free attendance management.Let's make </Typography>
            <Typography>every moment count!</Typography>
            {/* Form */}
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  sx={{ width: '60%', backgroundColor: 'white',height:'0.1px',marginTop:'12%',marginLeft: '20%' }}
                  InputProps={{
                    endAdornment: (
                          <InputAdornment position='end'>
                            <img src="../src/assets/mail.png"  alt="Image" style={{ height: '12px', width: '15px'}} />
                          </InputAdornment>
                        ),
                      }}
                />


                <TextField
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  sx={{ width: '60%', backgroundColor: 'white',height:'0.1px' ,marginTop: '12%',marginLeft: '20%' }}

                  InputProps={{
                    endAdornment: (
                          <InputAdornment position="end">
                            <img src="../src/assets/password.png"  alt="Image" style={{ height: '12px', width: '15px'}} />
                          </InputAdornment>
                        ),
                      }}
                />

                <Button type="submit" variant="contained"  
                  sx={{ width: '50%',height:'40px',marginTop: '100px',marginLeft: '25%', backgroundColor: '#004AAD',borderRadius:'15px'}} >
                  Login
                </Button> 


                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px',marginBottom: '30px' }}>
                  <div style={{ margin: '10px 0', width: '30%' }}>
                    <Divider variant="middle" />
                  </div>

                  <Typography style={{ margin: '0 15px', color: 'black' }}>OR</Typography>

                  <div style={{ margin: '10px 0', width: '30%' }}>
                    <Divider variant="middle" />
                  </div>
                </div> 


                


                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ backgroundColor: 'white', color: 'black', width: '50%', height: '40px',marginLeft: '25%',borderRadius:'15px',marginBottom:'20px' }}>
                <img src="../src/assets/google.png" style={{ maxWidth: '100%', maxHeight: '80%' }} /> 
                <Typography sx={{ color: 'black',fontSize:15 }}>Continue with Google</Typography>
              </Button> 


              </form>
          </RightColumnPaper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;

