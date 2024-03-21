import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import axios from "../axiosConfiguration/axiosconfig";
import { Card, CardContent, Typography } from "@mui/material";
import {  useUser } from "@clerk/clerk-react";

export default function TimetableLecturer() {
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
  const userEmailAddress = user.emailAddresses[0].emailAddress

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/v1/timetablelecturer/timetablelecturer/${userEmailAddress}`
        );
        //console.log(response.data.data);
        console.log(mondaySessions);
        const { days } = response.data.data.timetable;
        console.log(days)
  
        if (days) {
          days.forEach(day => {
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
            
          ;
        }
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
              boxShadow: 3,
              marginBottom: "15px",
            }}
          >
            <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="body" sx={{ marginRight: 2 }}>
                {session.start_time + "-" + session.end_time}
              </Typography>
              <Typography variant="h5" sx={{ marginRight: 2 }}>
                {session.lecture_title}
              </Typography>
              <Typography variant="h8" sx={{ marginRight: 2 }}>
                {session.course_type+ " "+ session.level_name+ " - "+ session.group_name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography variant="body" sx={{ fontWeight: "bold" }}>{session.venue}</Typography>
            </Box>
          </Box>
            </CardContent>
          </Card>
          ))}
        </TabPanel>
        <TabPanel value="2">
        {tuesdaySessions.map((session, index) => (
            <Card
            key={index}
            sx={{
              boxShadow: 3,
              marginBottom: "15px",
            }}
          >
             <CardContent>
             <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="body" sx={{ marginRight: 2 }}>
                {session.start_time + "-" + session.end_time}
              </Typography>
              <Typography variant="h5" sx={{ marginRight: 2 }}>
                {session.lecture_title}
              </Typography>
              <Typography variant="h8" sx={{ marginRight: 2 }}>
                {session.course_type+ " "+ session.level_name+ " - "+ session.group_name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography variant="body" sx={{ fontWeight: "bold" }}>{session.venue}</Typography>
            </Box>
          </Box>
            </CardContent>
          </Card>
          ))}
        </TabPanel>
        <TabPanel value="3">
        {wednesdaySessions.map((session, index) => (
            <Card
            key={index}
            sx={{
              boxShadow: 3,
              marginBottom: "15px",
            }}
          >
             <CardContent>
             <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="body" sx={{ marginRight: 2 }}>
                {session.start_time + "-" + session.end_time}
              </Typography>
              <Typography variant="h5" sx={{ marginRight: 2 }}>
                {session.lecture_title}
              </Typography>
              <Typography variant="h8" sx={{ marginRight: 2 }}>
                {session.course_type+ " "+ session.level_name+ " - "+ session.group_name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography variant="body" sx={{ fontWeight: "bold" }}>{session.venue}</Typography>
            </Box>
          </Box>
            </CardContent>
          </Card>
          ))}
        </TabPanel>
        <TabPanel value="4">
        {thursdaySessions.map((session, index) => (
            <Card
            key={index}
            sx={{
              boxShadow: 3,
              marginBottom: "15px",
            }}
          >
            <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="body" sx={{ marginRight: 2 }}>
                {session.start_time + "-" + session.end_time}
              </Typography>
              <Typography variant="h5" sx={{ marginRight: 2 }}>
                {session.lecture_title}
              </Typography>
              <Typography variant="h8" sx={{ marginRight: 2 }}>
                {session.course_type+ " "+ session.level_name+ " - "+ session.group_name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography variant="body" sx={{ fontWeight: "bold" }}>{session.venue}</Typography>
            </Box>
          </Box>
            </CardContent>
          </Card>
          ))}
        </TabPanel>
        <TabPanel value="5">
        {fridaySessions.map((session, index) => (
            <Card
            key={index}
            sx={{
              boxShadow: 3,
              marginBottom: "15px",
            }}
          >
            <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="body" sx={{ marginRight: 2 }}>
                {session.start_time + "-" + session.end_time}
              </Typography>
              <Typography variant="h5" sx={{ marginRight: 2 }}>
                {session.lecture_title}
              </Typography>
              <Typography variant="h8" sx={{ marginRight: 2 }}>
                {session.course_type+ " "+ session.level_name+ " - "+ session.group_name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography variant="body" sx={{ fontWeight: "bold" }}>{session.venue}</Typography>
            </Box>
          </Box>
            </CardContent>
          </Card>
          ))}
        </TabPanel>
        <TabPanel value="6">
        {saturdaySessions.map((session, index) => (
            <Card
            key={index}
            sx={{
              boxShadow: 3,
              marginBottom: "15px",
            }}
          >
           <CardContent>
           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="body" sx={{ marginRight: 2 }}>
                {session.start_time + "-" + session.end_time}
              </Typography>
              <Typography variant="h5" sx={{ marginRight: 2 }}>
                {session.lecture_title}
              </Typography>
              <Typography variant="h8" sx={{ marginRight: 2 }}>
                {session.course_type+ " "+ session.level_name+ " - "+ session.group_name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography variant="body" sx={{ fontWeight: "bold" }}>{session.venue}</Typography>
            </Box>
          </Box>
            </CardContent>
          </Card>
          ))}
        </TabPanel>
        <TabPanel value="7">
        {sundaySessions.map((session, index) => (
            <Card
            key={index}
            sx={{
              boxShadow: 3,
              marginBottom: "15px",
            }}
          >
            <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="body" sx={{ marginRight: 2 }}>
                {session.start_time + "-" + session.end_time}
              </Typography>
              <Typography variant="h5" sx={{ marginRight: 2 }}>
                {session.lecture_title}
              </Typography>
              <Typography variant="h8" sx={{ marginRight: 2 }}>
                {session.course_type+ " "+ session.level_name+ " - "+ session.group_name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography variant="body" sx={{ fontWeight: "bold" }}>{session.venue}</Typography>
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
