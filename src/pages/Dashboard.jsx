import { Box, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { BarChart } from "@mui/x-charts/BarChart";
import Paper from "@mui/material/Paper";
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
import axios from "axios";

function Dashboard() {
  const [sessionData, setSessionData] = useState(null);
  const [userTimetable, setUserTimetable] = useState(null);
  const [sessionDetails, setSessionDetails] = useState(null); //for student timetable

  const userEmail = useClerk().user.primaryEmailAddress.emailAddress;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make an API request to fetch session data for the lecturer
        const response = await axios.get(
          `https://attendify-backend-i3rpgzeqlq-uc.a.run.app/api/v1/dashboard/lecturer/sessions/${userEmail}`
        );
        setUserTimetable(response.data.data); // Update state with the fetched data
        // console.log(response.data.data.lecturerSessions.length);
      } catch (error) {
        console.error("Error fetching session data:", error);
      }
    };

    // Initial call to fetch data
    fetchData();

    // Set interval to fetch data every 30 seconds (30000 milliseconds)
    const interval = setInterval(() => {
      fetchData();
    }, 3000000);

    // Clean up function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, [userEmail]); // Run this effect every time 'email' changes

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make an API request to fetch session data for the student
        const response = await axios.get(
          `https://attendify-backend-i3rpgzeqlq-uc.a.run.app/api/v1/dashboard/student/${userEmail}/timetable`
        );
        setSessionDetails(response.data); // Update state with the fetched data
        console.log(response.data.sessionsForToday);
      } catch (error) {
        console.error("Error fetching session data:", error);
      }
    };

    // Initial call to fetch data
    fetchData();

    // Set interval to fetch data every 30 seconds (30000 milliseconds)
    const interval = setInterval(() => {
      fetchData();
    }, 3000000);

    // Clean up function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, [userEmail]); // Run this effect every time 'email' changes

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make an API request to fetch session data for the lecturer
        const response = await axios.get(
          `https://attendify-backend-i3rpgzeqlq-uc.a.run.app/api/v1/dashboard/lecturer/${userEmail}/sessionDetails`
        );
        setSessionData(response.data.data); // Update state with the fetched data
      } catch (error) {
        console.error("Error fetching session data:", error);
      }
    };

    //Initial call to fetch data
    fetchData();

    //Set interval to fetch data every 30 seconds (30000 milliseconds)
    const interval = setInterval(() => {
      fetchData();
    }, 30000);

    //Clean up function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, [userEmail]); //Run this effect every time 'email' changes

  const { user } = useClerk();
  const isAdmin = user.publicMetadata?.role === "admin";

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

  //Function to display a greeting based on the time of the day
  function getGreeting() {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      return "Good Morning, ";
    } else if (hour >= 12 && hour < 16) {
      return "Good Afternoon, ";
    } else {
      return "Good Evening, ";
    }
  }

  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: "12px" }}
        >
          {getGreeting()}
          <span style={{ color: "#004AAD" }}> {user.firstName}!</span>
        </Typography>
        <Box display={"flex"}>
          <Typography variant="h5">{formattedDate}</Typography>
        </Box>
      </Box>
      {!isAdmin && <LandingBanner />}
      {/* <SlidingImages /> */}

      <Grid container spacing={2}>
        {isAdmin && (
          <>
            <Grid item xs={2.7}>
              <Card
                variant="outlined"
                sx={{
                  boxShadow: 2,
                  borderRadius: "12px",
                  border: "none",
                  height: "100%",
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
                    <strong>
                      {sessionData ? sessionData.expectedStudents : 0}
                    </strong>
                  </Typography>
                  <Typography variant="h5" style={{ color: "#004AAD" }}>
                    <strong>Expected Students</strong>
                  </Typography>
                  <Typography variant="h5"></Typography>
                  {/* <Typography variant="h6">+4% Increase</Typography> */}
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={2}>
              <Card
                variant="outlined"
                sx={{
                  boxShadow: 2,
                  borderRadius: "12px",
                  border: "none",
                  height: "100%",
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
                    <strong>{sessionData ? sessionData.onTime : 0}</strong>
                  </Typography>
                  <Typography variant="h5" style={{ color: "#004AAD" }}>
                    <strong>On Time</strong>
                  </Typography>
                  {/* <Typography variant="h6">+4% Increase</Typography> */}
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={2}>
              <Card
                variant="outlined"
                sx={{
                  boxShadow: 2,
                  borderRadius: "12px",
                  border: "none",
                  height: "100%",
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
                    <strong>
                      {sessionData ? sessionData.lateArrivals : 0}
                    </strong>
                  </Typography>
                  <Typography variant="h5" style={{ color: "#004AAD" }}>
                    <strong>Late Arrivals</strong>
                  </Typography>
                  {/* <Typography variant="h6">+2% Decrease</Typography> */}
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={2}>
              <Card
                variant="outlined"
                sx={{
                  boxShadow: 2,
                  borderRadius: "12px",
                  border: "none",
                  height: "100%",
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
                    <strong>{sessionData ? sessionData.absent : 0}</strong>
                  </Typography>
                  <Typography variant="h5" style={{ color: "#004AAD" }}>
                    <strong>Absent</strong>
                  </Typography>
                  {/* <Typography variant="h6">+6% Increase </Typography> */}
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3.3}>
              <Card
                variant="outlined"
                sx={{
                  boxShadow: 2,
                  borderRadius: "12px",
                  border: "none",
                  height: "100%",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h5" style={{ color: "#004AAD" }}>
                    <strong>Current Session</strong>
                  </Typography>
                  <Typography variant="h6">
                    <strong>
                      {sessionData === null || sessionData.lecture_title === ""
                        ? "No Session, Have fun:)"
                        : sessionData.lecture_title}
                    </strong>
                  </Typography>

                  {/* <Typography variant="h6">+6% Increase </Typography> */}
                </CardContent>
              </Card>
            </Grid>
          </>
        )}

        {isAdmin ? (
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
                <Grid sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography
                    variant="h4"
                    color="#004AAD"
                    marginLeft={1}
                    padding={1}
                  >
                    <strong>Your lecture schedule</strong>
                  </Typography>
                  <Typography
                    variant="h5"
                    color="#64748B"
                    marginLeft={10}
                    padding={2}
                  >
                    Today
                  </Typography>
                </Grid>

                <Timeline
                  sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                      flex: 0.2,
                    },
                  }}
                >
                  <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                      {userTimetable &&
                      userTimetable.lecturerSessions.length > 0
                        ? userTimetable.lecturerSessions[0].start_time
                        : "8:30 AM"}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="p">
                        {userTimetable &&
                        userTimetable.lecturerSessions.length > 0
                          ? userTimetable.lecturerSessions[0].lecture_title
                          : "No Session"}
                      </Typography>
                      <Typography variant="p">
                        {" "}
                        {userTimetable &&
                        userTimetable.lecturerSessions.length > 0
                          ? userTimetable.lecturerSessions[0].venue
                          : ""}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                      {userTimetable &&
                      userTimetable.lecturerSessions.length > 1
                        ? userTimetable.lecturerSessions[1].start_time
                        : "10:30 AM"}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="p">
                        {userTimetable &&
                        userTimetable.lecturerSessions.length > 1
                          ? userTimetable.lecturerSessions[1].lecture_title
                          : "No Session"}
                      </Typography>
                      <Typography variant="p">
                        {userTimetable &&
                        userTimetable.lecturerSessions.length > 1
                          ? userTimetable.lecturerSessions[1].venue
                          : ""}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                      {userTimetable &&
                      userTimetable.lecturerSessions.length > 2
                        ? userTimetable.lecturerSessions[2].start_time
                        : "1:30 PM"}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="p">
                        {userTimetable &&
                        userTimetable.lecturerSessions.length > 2
                          ? userTimetable.lecturerSessions[2].lecture_title
                          : "No Session"}
                      </Typography>
                      <Typography variant="p">
                        {userTimetable &&
                        userTimetable.lecturerSessions.length > 2
                          ? userTimetable.lecturerSessions[2].venue
                          : ""}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                      {userTimetable &&
                      userTimetable.lecturerSessions.length > 3
                        ? userTimetable.lecturerSessions[3].start_time
                        : "3:30 PM"}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="p">
                        {userTimetable &&
                        userTimetable.lecturerSessions.length > 3
                          ? userTimetable.lecturerSessions[3].lecture_title
                          : "No Session"}
                      </Typography>
                      <Typography variant="p">
                        {userTimetable &&
                        userTimetable.lecturerSessions.length > 3
                          ? userTimetable.lecturerSessions[3].venue
                          : ""}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </CardContent>
            </Card>
          </Grid>
        ) : (
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
                <Grid sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography
                    variant="h4"
                    color="#004AAD"
                    marginLeft={1}
                    padding={1}
                  >
                    <strong>Your lecture schedule</strong>
                  </Typography>
                  <Typography
                    variant="h5"
                    color="#64748B"
                    marginLeft={10}
                    padding={2}
                  >
                    Today
                  </Typography>
                </Grid>

                <Timeline
                  sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                      flex: 0.2,
                    },
                  }}
                >
                  <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                      {sessionDetails &&
                      sessionDetails.sessionsForToday.length > 0
                        ? sessionDetails.sessionsForToday[0].start_time
                        : "8:30 AM"}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="p">
                        {sessionDetails &&
                        sessionDetails.sessionsForToday.length > 0
                          ? sessionDetails.sessionsForToday[0].lecture_title
                          : "No Session"}
                      </Typography>
                      <Typography variant="p">
                        {" "}
                        {sessionDetails &&
                        sessionDetails.sessionsForToday.length > 0
                          ? sessionDetails.sessionsForToday[0].venue
                          : ""}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                      {sessionDetails &&
                      sessionDetails.sessionsForToday.length > 1
                        ? sessionDetails.sessionsForToday[1].start_time
                        : "10:30 AM"}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="p">
                        {sessionDetails &&
                        sessionDetails.sessionsForToday.length > 1
                          ? sessionDetails.sessionsForToday[1].lecture_title
                          : "No Session"}
                      </Typography>
                      <Typography variant="p">
                        {sessionDetails &&
                        sessionDetails.sessionsForToday.length > 1
                          ? sessionDetails.sessionsForToday[1].venue
                          : ""}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                      {sessionDetails &&
                      sessionDetails.sessionsForToday.length > 2
                        ? sessionDetails.sessionsForToday[2].start_time
                        : "1:30 PM"}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="p">
                        {sessionDetails &&
                        sessionDetails.sessionsForToday.length > 2
                          ? sessionDetails.sessionsForToday[2].lecture_title
                          : "No Session"}
                      </Typography>
                      <Typography variant="p">
                        {sessionDetails &&
                        sessionDetails.sessionsForToday.length > 2
                          ? sessionDetails.sessionsForToday[2].venue
                          : ""}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                      {sessionDetails &&
                      sessionDetails.sessionsForToday.length > 3
                        ? sessionDetails.sessionsForToday[3].start_time
                        : "3:30 PM"}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="p">
                        {sessionDetails &&
                        sessionDetails.sessionsForToday.length > 3
                          ? sessionDetails.sessionsForToday[3].lecture_title
                          : "No Session"}
                      </Typography>
                      <Typography variant="p">
                        {sessionDetails &&
                        sessionDetails.sessionsForToday.length > 3
                          ? sessionDetails.sessionsForToday[3].venue
                          : ""}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </CardContent>
            </Card>
          </Grid>
        )}

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
                width={600}
                height={290}
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
