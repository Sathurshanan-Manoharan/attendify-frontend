import { Grid, Typography, Paper, TextField, Button ,Divider,InputAdornment } from '@mui/material';
import { styled } from '@mui/system';

const LeftColumnPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#004AAD',
  // padding: '-250px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '950px'

}));

const RightColumnPaper = styled(Paper)(({ theme }) => ({
  backgroundImage: `url('../src/assets/Group 17.png')`, // Replace with your actual image path
  backgroundSize: 'cover',
  height: '950px'
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
      <img src="../src/assets/logo.png" alt="Left Column Image" style={{ maxWidth: '100%', maxHeight: '100%', marginTop: '2%' }} />
      <img src="../src/assets/picture.png" alt="Left Column Image" style={{ maxWidth: '80%', maxHeight: '80%', marginTop: '-10%' }} />
      <Typography sx={{ fontSize:20,color: 'white', marginTop: '15%' }}> Streamlining Attendance, Empowering Efficiency!</Typography>

        </LeftColumnPaper>
      </Grid>

        {/* Right Column */}
        <Grid item sx={{ position: 'absolute', top:0, right: 0, height:'100%' ,width:'60%',bottom:0}}>
          <RightColumnPaper>
            <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#004AAD',paddingTop:'150px' }}>Welcome Back!</Typography>
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
                  sx={{ width: '55%', backgroundColor: 'white',height:'2px',marginTop:'12%' }}

                  InputProps={{
                    endAdornment: (
                          <InputAdornment position='end'>
                            <img src="../src/assets/mail.png"  alt="Image" style={{ height: '15px', width: '18px'}} />
                          </InputAdornment>
                        ),
                      }}
                />


                <TextField
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  sx={{ width: '55%', backgroundColor: 'white',height:'1px' ,marginTop: '8%'}}


                  InputProps={{
                    endAdornment: (
                          <InputAdornment position="end">
                            <img src="../src/assets/password.png"  alt="Image" style={{ height: '15px', width: '18px'}} />
                          </InputAdornment>
                        ),
                      }}
                />

                 <Button type="submit" variant="contained" color="primary"  sx={{ width: '50%',height:'50px',marginTop: '120px' }} >
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
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ backgroundColor: 'white', color: 'black', width: '50%', height: '50px' }}>
                <img src="../src/assets/google.png" style={{ maxWidth: '100%', maxHeight: '80%' }} /> 
                <Typography sx={{ color: 'black' }}>Continue with Google</Typography>
              </Button> 


              </form>
          </RightColumnPaper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
