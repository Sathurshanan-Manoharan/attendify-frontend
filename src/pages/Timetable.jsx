import * as React from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {
  AccessTime,
  CalendarToday,
  People,
  Place,
  Search,
} from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { TextField, Stack } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, Select, InputLabel } from "@mui/material";
import { Autocomplete, IconButton } from "@mui/material";
import Backend from "../axiosConfiguration/axiosconfig";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useEffect } from "react";

const options = ["Update Lecture", "Cancel Lecture"];

// defines the class structure to ease attributes suggestion
const tables = {
  data: [
    {
      level_name: "4",
      timetable_id: "123",
      tutorial_groups: [
        {
          group_name: "Group A",
          days: [
            {
              day: "Monday",
              sessions: [
                {
                  start_time: "08:30",
                  end_time: "10:30",
                  instructor: "Prof. Smith",
                  venue: "Lecture Hall 1",
                  lecture_title: "Introduction to Programming",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

function Timetable() {
  // current active tab index
  const [value, setValue] = React.useState("1");

  // selects the table that matches with the logged users group name and the level type
  const [currentlySelectedTable, setCurrentlySelectedTable] = React.useState(
    tables.data[0]
  );

  // to store the tables received tables from the backend
  const [recievedtables, setReceivedTables] = React.useState(tables.data);

  // holds the selected cancel item for cancelling the lecture
  const [selectedCancelItem, setSelectedCancelItem] = React.useState(null);

  // to track the status whether a time slot is found or not
  const [isTimeSlotAllocated, setIsTimeSlotAllocated] = React.useState(false);

  // tracks currently selected day
  const [currentDay, setCurrentDay] = React.useState("Monday");

  // selected item by matching the start and end time from the dialog box holds the time slot details
  const [currentlySelectedItem, setCurrentlySelectedItem] = React.useState({
    start_time: "",
    end_time: "",
    instructor: "",
    venue: "",
    lecture_title: "",
  });

  // holds the details about timeslots that are particular to a day
  const [activesessions, setActiveSessions] = React.useState(
    tables.data[0].tutorial_groups[0].days[0].sessions
  );
  const [activeUser, setActiveUser] = React.useState({
    name: "Adib Mubarak",
    email: "adib.20221609@iit.ac.lk",
    uowId: "W1956200",
    iitId: "20221609",
    tutorialGroup: "B",
    degreeType: "SE",
    year: "L3",
    uid: "043DEAA8672681",
  });

  const [selectedOption, setSelectedOption] = React.useState(options[0]);
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [lectures, setLectures] = React.useState([]);
  useEffect(() => {
    getTimeTablesFromBackend();
  }, [activeUser.iitId]);
  useEffect(() => {
    getActiveUsersTable();
  }, [recievedtables]);

  const getTimeTablesFromBackend = async () => {
    try {
      const response = await Backend.get("/timetable");
      setReceivedTables(response.data.data.timetable);
    } catch (err) {
      console.log(err.message);
    }
  };
  const setUser = (user) => {
    setActiveUser(user);
  };
  const getActiveUsersTable = () => {
    recievedtables.forEach((table) => {
      table.tutorial_groups.forEach((tutorialGroup) => {
        if (tutorialGroup.group_name === activeUser.tutorialGroup) {
          setCurrentlySelectedTable(table);
          console.log("changed", table);
        }
      });
    });
  };

 
  const changeSessionsOnDayChange = (dayIndex) => {
    let changedDay = daysOfWeek[dayIndex];
    setCurrentDay(changedDay);
    currentlySelectedTable.tutorial_groups.forEach((tutorialGroup) => {
      if (tutorialGroup.group_name === activeUser.tutorialGroup) {
        tutorialGroup.days.forEach((day) => {
          if (day.day === changedDay) {
            setActiveSessions(day.sessions);
            let temSessionArr = [];
            day.sessions.forEach((session, index) => {
              temSessionArr.push({
                label: ` ${changedDay} ${session.lecture_title} ${session.start_time}-${session.end_time}`,
                value: index,
              });
            });
            setLectures(temSessionArr);
          }
        });
      }
    });
  };

  // tracking the index of the changed value on the autocompletion text box
  const handleSelectionChange = (event, newValue) => {
    // Find the index of the selected option
    const selectedIndex = lectures.findIndex((lecture) => lecture === newValue);
    if (selectedIndex >= 0) {
      // gets and sets the selected cancel item as for the selected cancel item variable
      setSelectedCancelItem(activesessions[selectedIndex]);
    } else {
      setSelectedCancelItem(null);
    }
  };
  useEffect(() => {
    selectSession();
    console.log("invoked");
  }, [currentlySelectedItem.start_time, currentlySelectedItem.end_time]);

  // updates the timeslot with the provided data
  const updateTimeSlot = (timeslot) => {
    if (currentlySelectedItem.lecture_title !== "") {
      try {
        // updating the currently selected table data that match with active user
        currentlySelectedTable.tutorial_groups.forEach((tutorialGroup) => {
          tutorialGroup.days.forEach((day) => {
            if (day.day === currentDay) {
              day.sessions.forEach((session) => {
                if (
                  session.start_time == timeslot.start_time &&
                  session.end_time == timeslot.end_time
                ) {
                  session.start_time = timeslot.start_time;
                  session.end_time = timeslot.end_time;
                  session.lecture_title = timeslot.lecture_title;
                  session.instructor = timeslot.instructor;
                  session.venue = timeslot.venue;
                }
              });
            }
          });
        });

        //sending the updated table to the backend
        const response = Backend.put(
          `/timetable/${currentlySelectedTable._id}`,
          currentlySelectedTable
        );
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  //changes the timeslot when the start time and endtime are changed
  const selectSession = () => {
    for (let i = 0; i < activesessions.length; i++) {
      let session = activesessions[i];
      console.log(session);
      //set the current object if as the to be updated object if the searched time is found else
      if (
        session.start_time === currentlySelectedItem.start_time &&
        session.end_time === currentlySelectedItem.end_time
      ) {
        setCurrentlySelectedItem(session);
        break;
      } else {
        setCurrentlySelectedItem({
          start_time: currentlySelectedItem.start_time,
          end_time: currentlySelectedItem.end_time,
          instructor: "",
          venue: "",
          lecture_title: "",
        });
      }
    }
  };

  //cancel a lecture
  const cancelALecture = (timeslot) => {
    if (timeslot !== null) {
      try {
        // updating the currently selected table data
        currentlySelectedTable.tutorial_groups.forEach((tutorialGroup) => {
          tutorialGroup.days.forEach((day) => {
            if (day.day === currentDay) {
              day.sessions.forEach((session) => {
                if (
                  session.start_time == timeslot.start_time &&
                  session.end_time == timeslot.end_time
                ) {
                  session.start_time = timeslot.start_time;
                  session.end_time = timeslot.end_time;
                  session.lecture_title = timeslot.lecture_title;
                  session.instructor = null; // sets instructor to null to cancell the lecture
                  session.venue = timeslot.venue;
                }
              });
            }
          });
        });

        //sending the updated table to the backend
        const response = Backend.put(
          `/timetable/${currentlySelectedTable._id}`,
          currentlySelectedTable
        );
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  // this will update the currently selected timeslot details
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCurrentlySelectedItem({
      ...currentlySelectedItem,
      [name]: value,
    });
  };

  const tabIndexChangeHandle = (event, newValue) => {
    // sets the current index of the active tab
    setValue(newValue);

    // sets the currently selected item to empy when the tab indexes are changed
    setCurrentlySelectedItem({
      start_time: "",
      end_time: "",
      instructor: "",
      venue: "",
      lecture_title: "",
    });

    
    changeSessionsOnDayChange(newValue);
  };

  ////////////////////////////////////////////////////////////////

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open2, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setSelectedOption(event.target.innerText);
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box sx={{ marginBottom: "20px", marginTop: "0px" }}>
        <Grid container>
          <Grid item xs={11}>
            <Typography variant="h4" color="#004AAD" fontWeight="bold">
              Schedule Viewport
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Button>
              <Fab color="primary" aria-label="add" onClick={handleClick}>
                <AddIcon />
              </Fab>
            </Button>
          </Grid>
        </Grid>

        {/* popup for the cancel lecture and update lecture button */}
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: "20ch",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={handleClickOpen}
              variant="outlined"
            >
              {option}
            </MenuItem>
          ))}
        </Menu>

        {/* dialog boxes for the cancel and update form */}
        <React.Fragment>
          <Dialog
            open={open2}
            onClose={handleClose2}
            fullWidth
            maxWidth="sm"
            PaperProps={{
              component: "form",
              onSubmit: (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries(formData.entries());
                const email = formJson.email;
                console.log(email);
                handleClose2();
              },
              style: {
                maxWidth: "800px",
                minWidth: "400px",
                maxHeight: "600px",
                minHeight: "400px",
              },
            }}
          >
            <DialogTitle>
              {selectedOption === "Update Lecture" && (
                <Typography
                  style={{
                    fontSize: 18,
                    marginLeft: "10px",
                    marginTop: "5px",
                    color: "gray",
                  }}
                >
                  Schedule additional lecture
                </Typography>
              )}
              {selectedOption === "Cancel Lecture" && (
                <Typography
                  style={{
                    fontSize: 18,
                    marginLeft: "10px",
                    marginTop: "5px",
                    color: "gray",
                  }}
                >
                  Cancel scheduled lecture
                </Typography>
              )}
            </DialogTitle>

            <DialogContent>
              {selectedOption === "Update Lecture" && (
                <DialogContentText width="600px">
                  <div>
                    {/* select options for he start time and end time on the update dialog */}
                    <Stack sx={{ width: 230 }}>
                      <FormControl
                        sx={{ m: 1, minWidth: 230, marginTop: "30px" }}
                      >
                        <InputLabel id="demo-simple-select-helper-label">
                          Start Time
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={currentlySelectedItem.start_time}
                          name="start_time"
                          label="start time"
                          onChange={handleInputChange}
                        >
                          <MenuItem value={"8.30AM"}>8.30AM</MenuItem>
                          <MenuItem value={"10.30AM"}>10.30AM</MenuItem>
                          <MenuItem value={"12.30PM"}>12.30PM</MenuItem>
                          <MenuItem value={"1.30PM"}>1.30PM</MenuItem>
                          <MenuItem value={"3.30PM"}>3.30PM</MenuItem>
                          <MenuItem value={"5.30PM"}>5.30PM</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl
                        sx={{ m: 1, minWidth: 230, marginTop: "30px" }}
                      >
                        <InputLabel id="demo-simple-select-helper-label">
                          End Time
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={currentlySelectedItem.end_time}
                          label="end time"
                          name="end_time"
                          onChange={handleInputChange}
                        >
                          <MenuItem value={"8.30AM"}>8.30AM</MenuItem>
                          <MenuItem value={"10.30AM"}>10.30AM</MenuItem>
                          <MenuItem value={"12.30PM"}>12.30PM</MenuItem>
                          <MenuItem value={"1.30PM"}>1.30PM</MenuItem>
                          <MenuItem value={"3.30PM"}>3.30PM</MenuItem>
                          <MenuItem value={"5.30PM"}>5.30PM</MenuItem>
                        </Select>
                      </FormControl>
                      {isTimeSlotAllocated ? (
                        <Typography variant="body1" sx={{ color: "green" }}>
                          Time slot is allocated only a update will be affected
                        </Typography>
                      ) : (
                        <></>
                      )}
                    </Stack>

                    {/* details fields */}
                    <Typography
                      style={{
                        fontSize: 15,
                        marginLeft: "280px",
                        marginTop: "-150px",
                        fontWeight: 550,
                      }}
                    >
                      venue
                    </Typography>
                    <TextField
                      variant="outlined"
                      name="venue"
                      // InputLabelProps={{ shrink: inputValue.length > 0 ? true : false }}
                      onChange={handleInputChange}
                      value={currentlySelectedItem.venue}
                      size="small"
                      sx={{
                        backgroundColor: "white",
                        marginTop: "-35px",
                        marginLeft: "60%",
                        width: "45%",
                      }}
                    />
                    <Typography
                      style={{
                        fontSize: 15,
                        marginLeft: "280px",
                        marginTop: "15px",
                        fontWeight: 550,
                      }}
                    >
                      level
                    </Typography>
                    <TextField
                      variant="outlined"
                      name="level_name"
                      // InputLabelProps={{ shrink: inputValue.length > 0 ? true : false }}
                      onChange={handleInputChange}
                      value={currentlySelectedTable.level_name}
                      size="small"
                      disabled
                      sx={{
                        backgroundColor: "white",
                        marginTop: "-35px",
                        marginLeft: "60%",
                        width: "45%",
                      }}
                    />
                    <Typography
                      style={{
                        fontSize: 15,
                        marginLeft: "280px",
                        marginTop: "15px",
                        fontWeight: 550,
                      }}
                    >
                      Title
                    </Typography>
                    <TextField
                      variant="outlined"
                      name="lecture_title"
                      value={currentlySelectedItem.lecture_title}
                      onChange={handleInputChange}
                      size="small"
                      sx={{
                        height: "0.1px",
                        backgroundColor: "white",
                        marginTop: "-30px",
                        marginLeft: "60%",
                        width: "45%",
                      }}
                    />
                    <Typography
                      style={{
                        fontSize: 15,
                        marginLeft: "280px",
                        marginTop: "10px",
                        fontWeight: 550,
                      }}
                    >
                      Tutorial
                      <br />
                      group
                    </Typography>
                    <TextField
                      variant="outlined"
                      name="tutorialGroup"
                      value={activeUser.tutorialGroup}
                      size="small"
                      disabled
                      sx={{
                        height: "0.1px",
                        backgroundColor: "white",
                        marginTop: "-40px",
                        marginLeft: "60%",
                        width: "45%",
                      }}
                    />
                  </div>
                </DialogContentText>
              )}

              {/* cancel lecture dialog */}
              {selectedOption === "Cancel Lecture" && (
                <DialogContentText width="600px">
                  <div>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={lectures}
                      getOptionLabel={(option) => option.label}
                      onChange={handleSelectionChange}
                      renderInput={(params) => (
                        <TextField
                          label="Search for a lecture by Course, Title..."
                          variant="outlined"
                          sx={{
                            backgroundColor: "white",
                            marginTop: "30px",
                            marginRight: "5%",
                            width: "90%",
                          }}
                          InputProps={{
                            endAdornment: (
                              <IconButton>
                                <Search />
                              </IconButton>
                            ),
                            disableUnderline: true,
                          }}
                          {...params}
                        />
                      )}
                    />
                  </div>
                </DialogContentText>
              )}
            </DialogContent>
            <DialogActions>
              {/* update lecture buttons and cancel lecture buttons */}
              {selectedOption === "Update Lecture" ? (
                <>
                  <Button variant="outlined" onClick={handleClose2}>
                    Cancel
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      console.log(currentlySelectedItem);
                      updateTimeSlot(currentlySelectedItem);
                    }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outlined" onClick={handleClose2}>
                    Cancel
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      console.log(selectedCancelItem);
                      cancelALecture(selectedCancelItem);
                    }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </>
              )}
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </Box>
      <Box>
        <Box sx={{ typography: "body1", justifyContent: "space-evenly" }}>
          {/* tabs */}
          <TabContext value={value}>
            <Box
              sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}
            >
              <TabList
                onChange={tabIndexChangeHandle}
                aria-label="lab API tabs example"
                sx={{ height: "60px" }}
              >
                {daysOfWeek.map((day, index) => (
                  <Tab key={index} label={day} value={index} />
                ))}
              </TabList>
            </Box>
            {/* iterating the days and fill timeslots accordingly */}
            {daysOfWeek.map((day, index) => (
              <TabPanel value={index} variant="h3">
                {/* getting the data from the selected day */}

                {activesessions
                  //checks whether the selected day is matched with current value of the dayofweek
                  .filter((item) => currentDay === day)
                  //if then iterate timeslots for that particular day
                  .map((item, idx) => (
                    // time slots
                    <Card
                      key={idx}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 1,
                        padding: 0,
                        borderRadius: 4,
                        backgroundColor:
                          item?.instructor !== null ? "white" : "grey",
                      }}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          flexGrow: 1,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", marginRight: 1 }}
                          >
                            {item.lecture_title}
                          </Typography>
                          <Typography variant="body1" sx={{ marginLeft: 1 }}>
                            ({activeUser.tutorialGroup})
                          </Typography>
                        </Box>

                        <List
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <ListItem
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              width: "50%",
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <AccessTime color="primary" />
                            </ListItemIcon>
                            <ListItemText>
                              <Typography variant="h6">
                                {item.start_time}-{item.end_time}
                              </Typography>
                            </ListItemText>
                          </ListItem>

                          <ListItem
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              width: "50%",
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <Place color="primary" />
                            </ListItemIcon>

                            <ListItemText>
                              <Typography variant="h6">{item.venue}</Typography>
                            </ListItemText>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <ListItemIcon
                                sx={{ minWidth: 32, alignItems: "center" }}
                              >
                                <People color="primary" />
                              </ListItemIcon>
                              <ListItemText>
                                <Typography
                                  variant="h6"
                                  sx={{
                                    color:
                                      item.instructor !== null
                                        ? "grey"
                                        : "white",
                                  }}
                                >
                                  {item.instructor === null
                                    ? "lecture cancelled"
                                    : item.instructor}
                                </Typography>
                              </ListItemText>
                            </Box>
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  ))}
              </TabPanel>
            ))}
          </TabContext>
        </Box>
      </Box>
    </Box>
  );
}

export default Timetable;
