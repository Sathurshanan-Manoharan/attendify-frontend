import React from 'react';
import { Grid, Typography, Paper, TextField, Button,SvgIcon ,Divider,InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
//import firebase from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { authentication } from '../../firebase.config';



const LeftColumnPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#004AAD',
  // padding: '-250px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  
}));

const RightColumnPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundImage: `url('../src/assets/Group 17.png')`, // Replace with your actual image path
  backgroundSize: 'cover',
  // backgroundPosition: 'center',
}));



const Login = () => {

  //Sign in with Google button (Seperated for ease)
  const signIn = () => {
    const authProvider = new GoogleAuthProvider();
    signInWithPopup(authentication, authProvider);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
  };
  

  return (
    <div>
      <Grid container>
        {/* Left Column */}
        <Grid item xs={0}>
          <LeftColumnPaper elevation={2} style={{ width: '100%', height: '100%' }}>
            <img src="../src/assets/logo.png"alt="Left Column Image" style={{ maxWidth: '80%', maxHeight: '80%',marginTop: '-150px'} } />
            <img src="../src/assets/picture.png"alt="Left Column Image" style={{ maxWidth: '70%', maxHeight: '70%',marginTop: '-100px' }} />
            <Typography variant="h6" style={{ color: 'white', position: 'absolute', top: '680px' }}> Streamlining Attendance, Empowering Efficiency!</Typography> 
          </LeftColumnPaper>
        </Grid>

        {/* Right Column */}
        <Grid item xs={0}>
          <RightColumnPaper elevation={3} style={{ width: '100%', height: '100%'}}>
            <Typography variant="h2" style={{ fontWeight: 'bold', color: '#004AAD',paddingTop:'60px' }}>Welcome Back!</Typography>
            <Typography >Unlock Learning with Ease! Your passport to </Typography>
            <Typography>hassle-free attendance management.Let's make </Typography>
            <Typography>every moment count!</Typography>
            <div style={{ marginTop: '55px' }}>
            {/* Form */}
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  sx={{ width: '60%', marginBottom: 1, backgroundColor: 'white' }}

                  InputProps={{
                    endAdornment: (
                          <InputAdornment position='end'>
                            <img src="../src/assets/mail.png"  alt="Image" style={{ height: '20px', width: '25px'}} />
                          </InputAdornment>
                        ),
                      }}
                />


                <TextField
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  sx={{ width: '60%', marginBottom: 2 , backgroundColor: 'white'}}


                  InputProps={{
                    endAdornment: (
                          <InputAdornment position="end">
                            <img src="../src/assets/password.png"  alt="Image" style={{ height: '20px', width: '25px'}} />
                          </InputAdornment>
                        ),
                      }}
                />

                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ width: '60%',height:'50px',marginTop: '60px' }} >
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
              
              </form>

              <Button onClick={signIn} type="submit" variant="contained" color="primary" fullWidth sx={{ backgroundColor: 'white',color: 'black',width: '60%' ,height:'50px'}}>
              {/* <SvgIcon component={FcGoogle} style={{ marginRight: '15px', fontSize: '5px' }} /> Continue with Google */}
              <img src="../src/assets/google.png" style={{ maxWidth: '100%', maxHeight: '80%'} } />
              <Typography style={{ color: 'black' }}>Continue with Google</Typography>
              </Button>

            </div>
          </RightColumnPaper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
