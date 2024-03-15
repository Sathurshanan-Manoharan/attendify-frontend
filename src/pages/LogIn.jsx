import { Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { SignIn } from "@clerk/clerk-react";

const LeftColumnPaper = styled(Paper)(() => ({
  backgroundColor: "#004AAD",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
}));

const RightColumnPaper = styled(Paper)(() => ({
  backgroundImage: `url('../../public/assets/Group 17.jpg')`, // url(../../assets/login-background.jpg
  backgroundSize: "cover",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const Login = () => {
  return (
    <div>
      <Grid container>
        <Grid
          item
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "50%",
            bottom: 0,
            width: "40%",
          }}
        >
          <LeftColumnPaper>
            <img
              src="../../public/assets//logo.png"
              alt="Left Column Image"
              style={{ maxWidth: "70%", maxHeight: "70%", marginTop: "-70px" }}
            />
            <img
              src="../../public/assets//picture.png"
              alt="Left Column Image"
              style={{ maxWidth: "60%", maxHeight: "60%", marginTop: "-15%" }}
            />
            <Typography
              style={{ fontSize: 20, color: "white", marginTop: "5%" }}
            >
              {" "}
              Streamlining Attendance, Empowering Efficiency!
            </Typography>
          </LeftColumnPaper>
        </Grid>

        {/* Right Column */}
        <Grid
          item
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
            width: "60%",
            bottom: 0,
          }}
        >
          <RightColumnPaper>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "#004AAD", paddingTop: "30px" }}
            >
              Welcome Back!
            </Typography>
            <Typography>
              Unlock Learning with Ease! Your passport to{" "}
            </Typography>
            <Typography>
              hassle-free attendance management. Let&rsquo;s make{" "}
            </Typography>
            <Typography>every moment count!</Typography>

            <SignIn />
          </RightColumnPaper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
