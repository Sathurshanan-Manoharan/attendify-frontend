import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect, useState } from "react";

function Dashboard() {
  // get the current day of the week
  const [date, setDate] = useState(new Date(Date.now()));

  useEffect(() => {
    const clock = setInterval(() => {
      const now = new Date(Date.now());
      setDate(now);
    }, 1000 * 60);
  }, []);

  const options = {
    weekday: "long",
  };
  const day = date.getDate();
  const suffix = getDaySuffix(day);

  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    const lastDigit = day % 10;
    switch (lastDigit) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  const formattedDate = `${day}${suffix},${date.toLocaleDateString(
    "en-US",
    options
  )}`;

  return (
    <>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "12px" }}
      >
        Good Morning, <span style={{ color: "#004AAD" }}>Adib!</span>
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card
            variant="outlined"
            sx={{ boxShadow: 2, borderRadius: "12px", border: "none" }}
          >
            <CardContent>
              <Typography variant="h3" padding="10px">
                <strong> {formattedDate}</strong>
              </Typography>
              <Typography variant="h3" color="#004AAD" padding="10px">
                <strong>
                  {date.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </strong>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={8}>
          <Card
            variant="outlined"
            sx={{ boxShadow: 2, borderRadius: "12px", border: "none" }}
          >
            <CardContent>
              <Typography variant="h3" padding="10px">
                <strong> Ongoing Session 10:30 - 12:30</strong>
              </Typography>
              <Typography variant="h3" color="#004AAD" padding="10px">
                SDGP Session (5LA)
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card
            variant="outlined"
            sx={{
              boxShadow: 2,
              borderRadius: "12px",
              border: "none",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h3" padding="10px">
                <strong>442</strong>
              </Typography>
              <Typography variant="h5">
                <strong>Expected Students</strong>
              </Typography>
              <Typography variant="h5" padding="10px"></Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            variant="outlined"
            sx={{
              boxShadow: 2,
              borderRadius: "12px",
              border: "none",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h3">
                <strong>401</strong>
              </Typography>
              <Typography variant="h5">
                <strong>On Time</strong>
              </Typography>
              <Typography variant="h6">+4% Increase</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card
            variant="outlined"
            sx={{
              boxShadow: 2,
              borderRadius: "12px",
              border: "none",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h3">
                <strong>18</strong>
              </Typography>
              <Typography variant="h5">
                <strong>Late Arrivals</strong>
              </Typography>
              <Typography variant="h6">+2% Decrease</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card
            variant="outlined"
            sx={{
              boxShadow: 2,
              borderRadius: "12px",
              border: "none",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h3">
                <strong>23</strong>
              </Typography>
              <Typography variant="h5">
                <strong>Absent</strong>
              </Typography>
              <Typography variant="h6">+6% Increase </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            variant="outlined"
            sx={{
              boxShadow: 2,
              borderRadius: "12px",
              border: "none",
            }}
          >
            <CardContent>
              <Typography variant="h4" color="#004AAD" padding="10px">
                <strong>Your lecture schedule</strong>
              </Typography>
              <Typography variant="h6" color="#64748B" padding="0 10px">
                Today
              </Typography>
              <Typography variant="h5" padding="10px">
                <strong>Database Systems 8:30AM @ 3LA - GP Square</strong>
                <br />
                <strong>SDGP 10:30AM @ 5LA - GP Square</strong>
                <br />
                <strong>Database Systems 1:30PM @ 3LA - GP Square</strong>
                <br />
              </Typography>
              <Typography variant="h6" color="#64748B" padding="0 10px">
                Tomorrow, Thursday 20th
              </Typography>
              <Typography variant="h5" padding="10px">
                <strong>OOP 10:30AM @ Auditorium - GP Square</strong>
                <br />
                <strong>SEPP 1:30PM @ 1LA - Java Building</strong>
                <br />
                <strong>Algo 3:30PM @ 3LA - Java Building</strong>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card
            variant="outlined"
            sx={{
              boxShadow: 2,
              borderRadius: "12px",
              border: "none",
            }}
          >
            <CardContent>
              <Typography variant="h4" color="#004AAD" padding="10px">
                <strong>Attendance Overview</strong>
              </Typography>
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    tickRotation: -90, // Rotate the x-axis labels by -90 degrees
                  },
                ]}
                series={[
                  { data: [85, 90, 92, 88, 95] }, // Example attendance percentages for each day
                ]}
                width={500}
                height={300}
                yAxis={[{ scaleType: "linear", domain: [0, 100] }]}
                colors={["#64748B"]} // Set the bar color to #64748
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
