import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import axios from "../axiosConfiguration/axiosconfig";
import { Card, CardContent, Typography } from "@mui/material";
import { useUser } from "@clerk/clerk-react";

export default function Timetable() {
  const [value, setValue] = useState("1");
  const [mondaySessions, setMondaySessions] = useState([]);
  const [tuesdaySessions, setTuesdaySessions] = useState([]);
  const [wednesdaySessions, setWednesdaySessions] = useState([]);
  const [thursdaySessions, setThursdaySessions] = useState([]);
  const [fridaySessions, setFridaySessions] = useState([]);
  const [saturdaySessions, setSaturdaySessions] = useState([]);
  const [sundaySessions, setSundaySessions] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { user } = useUser();
  const userEmailAddress = user.emailAddresses[0].emailAddress;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const isAdmin = user.publicMetadata?.role === "admin";

        if (isAdmin) {
          window.location.href = "/timetablelecturer";
        }

        const userResponse = await axios.get(
          `/api/v1/student/student/${userEmailAddress}`
        );
        const tutorialid =
          userResponse.data.data.student.level +
          userResponse.data.data.student.tutorial_group +
          userResponse.data.data.student.course;

        console.log(userResponse.data.data.student);
        const response = await axios.get(
          `/api/v1/timetable/tutorialgroup/${tutorialid}`
        );
        const { tutorial_groups } = response.data.data.timetable;

        tutorial_groups.forEach((group) => {
          // Iterate over each day's sessions and set state accordingly
          group.days.forEach((day) => {
            switch (day.day) {
              case "Monday":
                setMondaySessions(day.sessions);
                break;
              case "Tuesday":
                setTuesdaySessions(day.sessions);
                break;
              case "Wednesday":
                setWednesdaySessions(day.sessions);
                break;
              case "Thursday":
                setThursdaySessions(day.sessions);
                break;
              case "Friday":
                setFridaySessions(day.sessions);
                break;
              case "Saturday":
                setSaturdaySessions(day.sessions);
                break;
              case "Sunday":
                setSundaySessions(day.sessions);
                break;
              default:
                break;
            }
          });
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="Monday" value="1" />
            <Tab label="Tuesday" value="2" />
            <Tab label="Wednesday" value="3" />
            <Tab label="Thursday" value="4" />
            <Tab label="Friday" value="5" />
            <Tab label="Saturday" value="6" />
            <Tab label="Sunday" value="7" />
          </TabList>
        </Box>

        <TabPanel value="1">
          {mondaySessions.map((session, index) => (
            <Card
              key={index}
              sx={{
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ marginBottom: "8px" }}>
                      {`${session.start_time} - ${session.end_time}`}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        marginBottom: "8px",
                        fontWeight: "bold",
                        color: "#333",
                      }}
                    >
                      {session.lecture_title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#666", marginBottom: "8px" }}
                    >
                      {session.instructor}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#F4F6F8",
                      borderRadius: "4px",
                      padding: "8px",
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {session.venue}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </TabPanel>
        {/* TabPanel for Tuesday */}
        <TabPanel value="2">
          {tuesdaySessions.map((session, index) => (
            <Card
              key={index}
              sx={{
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ marginBottom: "8px" }}>
                      {`${session.start_time} - ${session.end_time}`}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        marginBottom: "8px",
                        fontWeight: "bold",
                        color: "#333",
                      }}
                    >
                      {session.lecture_title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#666", marginBottom: "8px" }}
                    >
                      {session.instructor}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#F4F6F8",
                      borderRadius: "4px",
                      padding: "8px",
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {session.venue}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </TabPanel>
        {/* TabPanel for Wednesday */}
        <TabPanel value="3">
          {wednesdaySessions.map((session, index) => (
            <Card
              key={index}
              sx={{
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ marginBottom: "8px" }}>
                      {`${session.start_time} - ${session.end_time}`}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        marginBottom: "8px",
                        fontWeight: "bold",
                        color: "#333",
                      }}
                    >
                      {session.lecture_title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#666", marginBottom: "8px" }}
                    >
                      {session.instructor}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#F4F6F8",
                      borderRadius: "4px",
                      padding: "8px",
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {session.venue}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </TabPanel>
        {/* TabPanel for Thursday */}
        <TabPanel value="4">
          {thursdaySessions.map((session, index) => (
            <Card
              key={index}
              sx={{
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ marginBottom: "8px" }}>
                      {`${session.start_time} - ${session.end_time}`}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        marginBottom: "8px",
                        fontWeight: "bold",
                        color: "#333",
                      }}
                    >
                      {session.lecture_title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#666", marginBottom: "8px" }}
                    >
                      {session.instructor}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#F4F6F8",
                      borderRadius: "4px",
                      padding: "8px",
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {session.venue}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </TabPanel>
        {/* TabPanel for Friday */}
        <TabPanel value="5">
          {fridaySessions.map((session, index) => (
            <Card
              key={index}
              sx={{
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ marginBottom: "8px" }}>
                      {`${session.start_time} - ${session.end_time}`}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        marginBottom: "8px",
                        fontWeight: "bold",
                        color: "#333",
                      }}
                    >
                      {session.lecture_title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#666", marginBottom: "8px" }}
                    >
                      {session.instructor}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#F4F6F8",
                      borderRadius: "4px",
                      padding: "8px",
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {session.venue}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </TabPanel>
        {/* TabPanel for Saturday */}
        <TabPanel value="6">
          {saturdaySessions.map((session, index) => (
            <Card
              key={index}
              sx={{
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ marginBottom: "8px" }}>
                      {`${session.start_time} - ${session.end_time}`}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        marginBottom: "8px",
                        fontWeight: "bold",
                        color: "#333",
                      }}
                    >
                      {session.lecture_title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#666", marginBottom: "8px" }}
                    >
                      {session.instructor}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#F4F6F8",
                      borderRadius: "4px",
                      padding: "8px",
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {session.venue}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </TabPanel>
        {/* TabPanel for Sunday */}
        <TabPanel value="7">
          {sundaySessions.map((session, index) => (
            <Card
              key={index}
              sx={{
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ marginBottom: "8px" }}>
                      {`${session.start_time} - ${session.end_time}`}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        marginBottom: "8px",
                        fontWeight: "bold",
                        color: "#333",
                      }}
                    >
                      {session.lecture_title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#666", marginBottom: "8px" }}
                    >
                      {session.instructor}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#F4F6F8",
                      borderRadius: "4px",
                      padding: "8px",
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {session.venue}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
