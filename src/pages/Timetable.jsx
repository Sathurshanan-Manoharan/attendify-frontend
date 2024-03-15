
import * as React from 'react';
import { Grid,Box,Typography ,Card,CardContent} from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Search } from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import {TextField,Stack} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {FormControl,Select,InputLabel} from '@mui/material';
import {Autocomplete,IconButton} from '@mui/material';
import Backend from '../axiosConfiguration/axiosconfig';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useEffect } from 'react';


const options = [
  'Update Lecture',
  'Cancel Lecture', 
];

const tables = {
  data:[
    {
      level_name: "4",
      timetable_id:"123",
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
                  module: "Programming 101",
                  instructor: "Prof. Smith",
                  course: "Computer Science",
                  venue: "Lecture Hall 1",
                  lecture_title: "Introduction to Programming"
                },
                {
                  start_time: "10:30",
                  end_time: "12:30",
                  module: "Mathematics",
                  instructor: "Dr. Jones",
                  course: "Software Engineering",
                  venue: "Lecture Hall 2",
                  lecture_title: "Limits and Derivatives"
                }
              ]
            },
            {
              day: "Wednesday",
              sessions: [
                {
                  start_time: "13:30",
                  end_time: "15:30",
                  module: "Data Structures",
                  instructor: "Mr. Lee",
                  course: "Computer Science",
                  venue: "Lab 3",
                  lecture_title: "Arrays and Linked Lists"
                }
              ]
            }
          ]
        },
        {
          group_name: "Group B",
          days: [
            {
              day: "Tuesday",
              sessions: [
                {
                  start_time: "10:30",
                  end_time: "12:30",
                  module: "Object oriented programming",
                  instructor: "Dr. Brown",
                  course: "Software Engineering",
                  venue: "Lecture Hall 3",
                  lecture_title: "Classes and objects"
                }
              ]
            },
            {
              day: "Thursday",
              sessions: [
                {
                  start_time: "15:30",
                  end_time: "17:30",
                  module: "Web Development",
                  instructor: "Ms. Garcia",
                  course: "Computer Science",
                  venue: "Lab 1",
                  lecture_title: "Introduction to HTML and CSS"
                }
              ]
            }
          ]
        }
      ]

    }
  ]
}


function Timetable() {

  const [value, setValue] = React.useState('1');
  const [currentlySelectedTable,setCurrentlySelectedTable] = React.useState(tables.data[0])
  const [recievedtables,setReceivedTables] = React.useState(tables.data)
  const [selectedCancelItem,setSelectedCancelItem] = React.useState(null);
  const [isTimeSlotAllocated,setIsTimeSlotAllocated] = React.useState(false);
  const [currentDay,setCurrentDay] = React.useState('Monday');
  const [currentlySelectedItem,setCurrentlySelectedItem] = React.useState(
    {
      start_time: "",
      end_time: "",
      module: "",
      instructor: "",
      course: "",
      venue: "",
      lecture_title: ""
    }
  )
  const [activesessions,setActiveSessions] = React.useState(tables.data[0].tutorial_groups[0].days[0].sessions)
  const [activeUser,setActiveUser] = React.useState(
    {

      name: "Adib Mubarak",
      email: "adib.20221609@iit.ac.lk",
      uowId: "W1956200",
      iitId: "20221609",
      tutorialGroup: "B",
      degreeType: "SE",
      year: "L5",
      uid: "043DEAA8672681"
    })
    const [lectures,setLectures] = React.useState([
      { label: 'Tuesday SDGP Session 1 - 08:30', value: 1 },
      { label: 'Tuesday SDGP Session 2 - 12:30', value: 2 },
      { label: 'Tuesday SDGP Session 3 - 12:30', value: 3 }
    ])

    
    useEffect(()=>{
      getTimeTablesFromBackend()      
    },[activeUser.iitId])


  
  useEffect(()=>{
      getActiveUsersTable()
  },[recievedtables])
  

  const getTimeTablesFromBackend = async()=>{

    try{
      
      const response = await Backend.get('/timetable')
      //console.log(response.data.data.timetable)
      setReceivedTables(response.data.data.timetable)
    
    }catch(err){

      console.log(err.message)

    }
    
  }


  const setUser = (user)=> {

      setActiveUser(user)

  }

  
  const getActiveUsersTable = ()=>{

    
    recievedtables.forEach((table)=>{

      table.tutorial_groups.forEach(tutorialGroup=>{

        if(tutorialGroup.group_name === activeUser.tutorialGroup){
          setCurrentlySelectedTable(table)
          console.log("changed",table)
        }

      })
    })
  }

  
  const changeSessionsByDayChange = (dayIndex) =>{
    
    let changedDay =  daysOfWeek[dayIndex]
    setCurrentDay(changedDay)
    //console.log(changedDay)
    currentlySelectedTable.tutorial_groups.forEach(tutorialGroup=>{
      tutorialGroup.days.forEach(day=>{

        if(tutorialGroup.group_name === activeUser.tutorialGroup){
            if(day.day === changedDay){

              setActiveSessions(day.sessions)
              //console.log(activesessions)
              let temSessionArr = []
    
              day.sessions.forEach((session,index)=>{
                temSessionArr.push({ label: ` ${changedDay} ${session.module} ${session.start_time}-${session.end_time}`, value: index })
              })
    
              setLectures(temSessionArr);
    
            }
        }
      
        
      })
    })
  }


   
   const handleSelectionChange = (event, newValue) => {

    
    const selectedIndex = lectures.findIndex(lecture => lecture === newValue);
    if(selectedIndex>=0){

      setSelectedCancelItem(activesessions[selectedIndex])

    }
    else{

      setSelectedCancelItem(null)

    }
    
  };

    
    useEffect(()=>{

      selectSession()
      //console.log("invoked")

    },[currentlySelectedItem.start_time,currentlySelectedItem.end_time])


    
  
    const updateTimeSlot = (timeslot)=>{

      
        if(currentlySelectedItem.module !==""){

          try{
            currentlySelectedTable.tutorial_groups.forEach(tutorialGroup=>{
              tutorialGroup.days.forEach(day=>{
        
                if(day.day === currentDay){
        
                  day.sessions.forEach(session=>{

                    if(session.start_time == timeslot.start_time && session.end_time == timeslot.end_time ){
                      session.start_time = timeslot.start_time
                      session.end_time = timeslot.end_time
                      session.course = timeslot.course
                      session.lecture_title = timeslot.lecture_title
                      session.course = timeslot.course
                      session.instructor = timeslot.instructor
                      session.module = timeslot.module
                      session.venue = timeslot.venue
                    }
                   
                  })
        
                }
                
              })
            })

           
            const response = Backend.put(`/timetable/${currentlySelectedTable._id}`,currentlySelectedTable)
            console.log(response.data)

          }
          catch(err){
            console.log(err)
          }

        }

    }


    
    const selectSession = ()=>{


      for(let i=0;i<activesessions.length;i++){

        let session = activesessions[i]
        console.log(session)

        
        if(session.start_time===currentlySelectedItem.start_time && session.end_time === currentlySelectedItem.end_time){
         
          setCurrentlySelectedItem(session)
          break
          
        }
        else{

            setCurrentlySelectedItem({
              start_time: currentlySelectedItem.start_time,
              end_time: currentlySelectedItem.end_time,
              module: "",
              instructor: "",
              course: "",
              venue: "",
              lecture_title: ""
            })


        }
      }

    

    }

    //cancel a lecture
    const cancelALecture = (timeslot) => {

      if(timeslot !== null){

        console.log(timeslot)
        try{

          // updating the currently selected table data
          currentlySelectedTable.tutorial_groups.forEach(tutorialGroup=>{
            tutorialGroup.days.forEach(day=>{
      
              if(day.day === currentDay){
      
                day.sessions.forEach(session=>{

                  if(session.start_time == timeslot.start_time && session.end_time == timeslot.end_time ){
                    session.start_time = timeslot.start_time
                    session.end_time = timeslot.end_time
                    session.course = timeslot.course
                    session.lecture_title = timeslot.lecture_title
                    session.course = timeslot.course
                    session.instructor = null // sets instructor to null to cancell the lecture
                    session.module = timeslot.module
                    session.venue = timeslot.venue
                  }
                 
                })
      
              }
              
            })
          })

          //sending the updated table to the backend
          const response = Backend.put(`/timetable/${currentlySelectedTable._id}`,currentlySelectedTable)
          console.log(response.data)

        }
        catch(err){
          console.log(err)
        }

      }

    }



    // this will update the currently selected timeslot details
    const handleInputChange = (e) => {

      const { name, value } = e.target;

      setCurrentlySelectedItem({
        ...currentlySelectedItem,
        [name]: value
      });
  
    };


    const handleChange2 = ( event,newValue) => {
      setValue(newValue);
      changeSessionsByDayChange(newValue)
      
    };

  ////////////////////////////////////////////////////////////////


  const [time, setTime] = React.useState("");

  const handleChange = (event) => {
    setTime(event.target.value);


   };


  const [selectedOption, setSelectedOption] = React.useState(options[0]);
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
  //const timeSlots = ['8.30', '10.30', '13.30', '15.30'];
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



  return(
    <Box>
    <Box sx={{ marginBottom: "20px", marginTop: "0px"}}>
      <Grid container>
        <Grid item xs={11}>
        <Typography variant="h4" color="#004AAD" fontWeight="bold">
            Schedule Viewport
        </Typography>
        </Grid>
        <Grid item xs={1} > 
       <Button> 
        <Fab color="primary" aria-label="add" onClick={handleClick}>
                <AddIcon />
        </Fab>
      </Button>
      </Grid>
      </Grid>                
          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                
                width: '20ch',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClickOpen} variant="outlined" >
                {option}
              </MenuItem>
            ))}
          </Menu> 
          <React.Fragment>                   
          <Dialog                  
            open={open2}
            onClose={handleClose2}
            fullWidth
            maxWidth="sm"
            PaperProps={{

              component: 'form',
              onSubmit: (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries(formData.entries());
                const email = formJson.email;
                console.log(email);
                handleClose2();
              },
              style: {

                maxWidth: '800px', 
                minWidth: '400px',
                maxHeight: '600px',
                minHeight:'400px',
  
              },                      
            }}                    
          >

          <DialogTitle>
            {selectedOption === 'Update Lecture' && ( 
                <Typography  style={{ fontSize: 18, marginLeft: '10px', marginTop: '5px',color:'gray' }}>Schedule additional lecture</Typography>)}
            {selectedOption === 'Cancel Lecture' && ( 
                <Typography  style={{ fontSize: 18, marginLeft: '10px', marginTop: '5px',color:'gray' }}>Cancel scheduled lecture</Typography>)}
           </DialogTitle>                   
          <DialogContent > 
          {selectedOption === 'Update Lecture' && (
          <DialogContentText width="600px">
          <div> 
          <Stack sx={{width:230}}>
            <FormControl sx={{ m: 1, minWidth: 230,marginTop:'30px'}}>
            <InputLabel id="demo-simple-select-helper-label">Start Time</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={currentlySelectedItem.start_time}
              name='start_time'
              label="start time"
              onChange={handleInputChange}
            >
                        <MenuItem value={"08:30"}>08:30</MenuItem>
                        <MenuItem value={"10:30"}>10:30</MenuItem>
                        <MenuItem value={"12:30"}>12:30</MenuItem>
                        <MenuItem value={"13:30"}>13:30</MenuItem>
                        <MenuItem value={"15:30"}>15:30</MenuItem>
            </Select>
            
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 230,marginTop:'30px'}}>
            <InputLabel id="demo-simple-select-helper-label">End Time</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={currentlySelectedItem.end_time}
              label="end time"
              name='end_time'
              onChange={handleInputChange}
            >
                        <MenuItem value={"08:30"}>8:30</MenuItem>
                        <MenuItem value={"10:30"}>10:30</MenuItem>
                        <MenuItem value={"12:30"}>12:30</MenuItem>
                        <MenuItem value={"13:30"}>13:30</MenuItem>
                        <MenuItem value={"15:30"}>15:30</MenuItem>
            </Select>
            </FormControl>
            {isTimeSlotAllocated?(<Typography variant='body1' sx={{color:'green'}}>Time slot is allocated only a update will be affected</Typography>):(<></>)}
          </Stack>
       
        <Typography style={{ fontSize: 15, marginLeft: '280px', marginTop: '-150px', fontWeight:550 }}>Course</Typography>
        <TextField
          variant="outlined"
          name='course'
          // InputLabelProps={{ shrink: inputValue.length > 0 ? true : false }}
          onChange={handleInputChange}
          value={currentlySelectedItem.course}
          size="small"
          sx={{ backgroundColor: 'white', marginTop:'-35px', marginLeft: '60%',width:'45%' }}
        />
        <Typography style={{ fontSize: 15, marginLeft: '280px', marginTop: '15px',fontWeight:550 }}>venue</Typography>
        <TextField
          variant="outlined"
          name='venue'
          // InputLabelProps={{ shrink: inputValue.length > 0 ? true : false }}
          onChange={handleInputChange}
          value={currentlySelectedItem.venue}
          size="small"
          sx={{ backgroundColor: 'white', marginTop:'-35px', marginLeft: '60%',width:'45%' }}
        />
        <Typography style={{ fontSize: 15, marginLeft: '280px', marginTop: '15px',fontWeight:550 }}>level</Typography>
        <TextField
          variant="outlined"
          name='level_name'
          // InputLabelProps={{ shrink: inputValue.length > 0 ? true : false }}
          onChange={handleInputChange}
          value={currentlySelectedTable.level_name}
          size="small"
          disabled
          sx={{ backgroundColor: 'white', marginTop:'-35px', marginLeft: '60%',width:'45%' }}
        />
        <Typography style={{ fontSize: 15, marginLeft: '280px', marginTop: '15px',fontWeight:550 }}>Title</Typography>
        <TextField
          variant="outlined" 
          name="lecture_title"
          value={currentlySelectedItem.lecture_title}
          onChange={handleInputChange}
          size="small"                    
          sx={{ height: '0.1px', backgroundColor: 'white', marginTop: '-30px', marginLeft: '60%',width:'45%' }}
        />
        <Typography style={{ fontSize: 15, marginLeft: '280px', marginTop: '12px' ,fontWeight:550}}>Module</Typography>
        <TextField
          variant="outlined"
          name="module"
          value={currentlySelectedItem.module}
          onChange={handleInputChange}
          size="small"                   
          sx={{ height: '0.1px', backgroundColor: 'white', marginTop: '-25px', marginLeft: '60%',width:'45%' }}
        />
        <Typography style={{ fontSize: 15, marginLeft: '280px', marginTop: '10px' ,fontWeight:550}}>Tutorial<br />group</Typography>
        <TextField
          variant="outlined"
          name="tutorialGroup"     
          value={activeUser.tutorialGroup}            
          size="small"   
          disabled                 
          sx={{ height: '0.1px', backgroundColor: 'white',  marginTop: '-40px',marginLeft: '60%',width:'45%' }}
        /> 
        </div>
        </DialogContentText>
        )} 

       {selectedOption === 'Cancel Lecture' && ( 
        <DialogContentText width="600px"> 
        <div>               
              <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={lectures}
                        getOptionLabel={(option) => option.label}
                        onChange={handleSelectionChange}
                        renderInput={(params) =>(
                        <TextField 
                        label="Search for a lecture by Course, Title..."
                        variant="outlined"
                        sx={{backgroundColor: 'white', marginTop: '30px', marginRight: '5%',width:'90%' }}
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
              </DialogContentText>)} 
            </DialogContent>                   
          <DialogActions>
          {selectedOption==='Update Lecture'?(
                        <>
                        <Button variant="outlined" onClick={handleClose2}>Cancel</Button>
                        <Button variant="outlined" onClick={()=>{
                          console.log(currentlySelectedItem)
                          updateTimeSlot(currentlySelectedItem)
                        }}type="submit">Submit</Button>
                        </>
                      ):(
                        <>
                        <Button variant="outlined" onClick={handleClose2}>Cancel</Button>
                        <Button variant="outlined" onClick={()=>{
                          console.log(selectedCancelItem)
                          cancelALecture(selectedCancelItem)
                        }}type="submit">Submit</Button>
                        </>
                      )}
          </DialogActions>
        </Dialog></React.Fragment>                         
      </Box>                    
      <Box>
  
           <Box sx={{  typography: 'body1', justifyContent:'space-evenly'}}>
                <TabContext value={value} >              
                <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
                   
                    <TabList onChange={handleChange2}  aria-label="lab API tabs example" sx={{height:'60px' }}>
                    {daysOfWeek.map((day, index) => (
                       
                      <Tab key={index} label={day} value={index} />
  
                      ))}
                    </TabList>
                  </Box>
                  {/* iterating the days and fill timeslots accordingly */}
                  {daysOfWeek.map((day, index) => (
                      <TabPanel value={index} variant='h3'>
                  {/* getting the data from the selected day */}
                  
                  {activesessions
                  //checks whether the selected day is matched with current value of the dayofweek
                  .filter(item => currentDay === day)
                  //if then iterate timeslots for that particular day
                  .map((item, idx) => (
     
                    <Card key={idx} sx={{marginBottom:"50px", backgroundColor:item?.lecturer?'white':'#AAAAAA'}}>
                      <CardContent>
                        <Box sx={{ display: "flex", alignItems: "center" , justifyContent:"space-between"}}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                    {/* {add the properties of the currentSelected item such as level,lecturer} */}
                    <Typography variant="body" sx={{ marginRight: 2 }}>
                      {item.start_time} - {item.end_time}
                    </Typography>
                    <Typography variant="h5" sx={{ marginRight: 2 }}>
                      {item.module}
                    </Typography>
                    <Typography variant="h6">{item.tutorialGroup}</Typography>
                    {item?.instructor?(<Typography variant='h5'>{item.lecturer}</Typography>):(
                            <Typography variant='h5' sx={{color:'white',marginTop:'10px',marginBottom:'10px'}}>Lecture cancelled</Typography>
                          )}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body" sx={{marginRight:0}}>{item.date}</Typography>
                    <Typography variant="body"  sx={{marginRight:0}}>{item.location}</Typography>
                  </Box>
                  </Box>
                       
                      </CardContent>
                    </Card>
                  ))}
                    </TabPanel>
                      ))}
                  
                 
                </TabContext>
              </Box>   
                {/* <Card
                variant="elevation"
                sx={{            
                boxShadow: 2,
                borderRadius: "12px",
                border: "none",
              }}
                >
                <CardContent sx={{display:'flex',
                flexDirection:'column',
                justifyContent: 'space-evenly'}}> 
                <Box sx={{display:'flex',
                justifyContent: 'space-evenly'}}>
                {daysOfWeek.map((day, index) => (
                  <Button key={index} variant={day} variant ="contained" sx={{display: 'flex',
                  justifyContent: 'space-between',
                  fontWeight:"bold",color:"white",
                  fontSize:"15px",backgroundColor:"#004AAD"}} onClick={()=>{                  
                  }} >{day}</Button>
                ))}
                </Box>              
            </CardContent>
              </Card> */}
              
              
                
               
                                           
           </Box>      
          </Box>
    );
  }
export default Timetable;
