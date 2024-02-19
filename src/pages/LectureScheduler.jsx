import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Typography } from '@mui/material';

const LectureScheduler = ({ availableSlots, onAddLecture }) => {
  const [selectedSlot, setSelectedSlot] = useState('');
  const [module, setModule] = useState('');
  const [course, setCourse] = useState('');
  const [title, setTitle] = useState('');
  const [group, setGroup] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAddLecture = () => {
    if (selectedSlot && module && course && title && group) {
      const lecture = {
        time: selectedSlot,
        module,
        course,
        title,
        group,
      };
      onAddLecture(lecture);
      // Reset the form fields after adding the lecture
      setSelectedSlot('');
      setModule('');
      setCourse('');
      setTitle('');
      setGroup('');
      setAnchorEl(null);
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Schedule additional lectures
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel id="select-slot-label">Select Time Slot</InputLabel>
          <Select
            labelId="select-slot-label"
            id="select-slot"
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
            fullWidth
            MenuProps={{
              anchorEl: anchorEl,
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
              transformOrigin: {
                vertical: 'top',
                horizontal: 'left',
              },
            }}
            onClose={() => setAnchorEl(null)}
            onOpen={(e) => setAnchorEl(e.currentTarget)}
          >
            {availableSlots.map((slot) => (
              <MenuItem key={slot} value={slot}>
                {slot}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputLabel htmlFor="module">Module</InputLabel>
            <TextField
              id="module"
              variant="outlined"
              value={module}
              onChange={(e) => setModule(e.target.value)}
              fullWidth
              placeholder="e.g., Math, Science"
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="course">Course</InputLabel>
            <TextField
              id="course"
              variant="outlined"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              fullWidth
              placeholder="e.g., Calculus, Biology"
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="title">Title</InputLabel>
            <TextField
              id="title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              placeholder="e.g., Lecture 1, Lab Session"
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="group">Group</InputLabel>
            <TextField
              id="group"
              variant="outlined"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              fullWidth
              placeholder="e.g., Group A, Group B"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="flex-end">
        <Button variant="contained" onClick={handleAddLecture}>Add Lecture</Button>
      </Grid>
    </Grid>
  );
};

LectureScheduler.propTypes = {
  availableSlots: PropTypes.array.isRequired,
  onAddLecture: PropTypes.func.isRequired,
};

export default LectureScheduler;
