import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Dashboard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        
      <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          Dashboard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Time:</strong> 11.40 AM
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Day:</strong> Monday
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Date:</strong> 12th October 2021
        </Typography>
      </CardContent>
    </Card>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4">Dashboard</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h4">Dashboard</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h4">Dashboard</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h4">Dashboard</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h4">Dashboard</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4">Dashboard</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4">Dashboard</Typography>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
