import { Box, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect, useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { useClerk } from "@clerk/clerk-react";
import LandingBanner from "./LandingBanner.jsx";
// import SlidingImages from "../components/SlidingImages.jsx";

function Dashboard() {
  const { user } = useClerk();

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

  const formattedDate = (
    <span>
      {day}
      {suffix} {date.toLocaleDateString("en-US", options)},{" "}
      <span style={{ color: "#004AAD" }}>
        {date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </span>
    </span>
  );

  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: "12px" }}
        >
          Good Morning,
          <span style={{ color: "#004AAD" }}> {user.firstName}!</span>
        </Typography>
        <Box display={"flex"}>
          <Typography variant="h5">{formattedDate}</Typography>
        </Box>
      </Box>
      <LandingBanner />
      {/* <SlidingImages /> */}

      <Grid container spacing={2}>
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
                <strong>442</strong>
              </Typography>
              <Typography variant="h5" style={{ color: "#004AAD" }}>
                <strong>Expected Students</strong>
              </Typography>
              <Typography variant="h5"></Typography>
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
                <strong>401</strong>
              </Typography>
              <Typography variant="h5" style={{ color: "#004AAD" }}>
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
              <Typography variant="h5" style={{ color: "#004AAD" }}>
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
              <Typography variant="h5" style={{ color: "#004AAD" }}>
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
              <Typography
                variant="h4"
                color="#004AAD"
                marginLeft={1}
                padding={1}
              >
                <strong>Your lecture schedule</strong>
              </Typography>
              <Typography variant="h6" color="#64748B" marginLeft={4}>
                Today
              </Typography>
              <Timeline
                sx={{
                  [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                  },
                }}
              >
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                    08:30 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="p">
                      Server-Side Web Development
                    </Typography>
                    <Typography variant="p"> SP-7LA</Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                    10:30 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="p">
                      Server-Side Web Development
                    </Typography>
                    <Typography variant="p"> SP-7LA</Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                    01:30 pm
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="p">
                      Server-Side Web Development
                    </Typography>
                    <Typography variant="p"> SP-7LA</Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                    03:30 pm
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="p">Algorithms</Typography>
                    <Typography variant="p"> SP-5LA</Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
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
                    tickRotation: -90,
                  },
                ]}
                series={[{ data: [85, 90, 92, 88, 95] }]}
                width={500}
                height={300}
                yAxis={[{ scaleType: "linear", domain: [0, 100] }]}
                colors={["#64748B"]}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
