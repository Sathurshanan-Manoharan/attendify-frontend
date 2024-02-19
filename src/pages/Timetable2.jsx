import { useState } from 'react';
import { Grid, Divider } from '@mui/material';
import LectureScheduler from './LectureScheduler';
import LectureSearch from './LectureSearch';
import TimeTable from './TimeTable';

function Timetable2() {
  const availableSlots = {
    Monday: ['9:00 AM', '10:00 AM', '11:00 AM'],
    Tuesday: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'],
    Wednesday: ['9:00 AM', '10:00 AM', '11:00 AM'],
    Thursday: ['9:00 AM', '10:00 AM'],
    Friday: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'],
    Saturday: ['10:00 AM', '11:00 AM', '12:00 PM'],
    Sunday: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'],
  };

  const [timetable, setTimetable] = useState([]);
  const [suggestedLectures] = useState([
    'Suggested Lecture 1',
    'Suggested Lecture 2',
    'Suggested Lecture 3',
  ]);

  const handleAddLecture = (lecture) => {
    setTimetable([...timetable, lecture]);
  };

  const handleCancelLecture = (lecture) => {
    setTimetable(timetable.filter(item => item !== lecture));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <LectureScheduler
          availableSlots={['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']}
          onAddLecture={handleAddLecture}
        />
      </Grid>
      <Grid item xs={6} style={{ position: 'relative' }}>
        <Divider orientation="vertical" style={{ position: 'absolute', top: 0, bottom: 0, left: 'calc(50% - 1px)' }} />
        <LectureSearch
          suggestedLectures={suggestedLectures}
          onCancelLecture={handleCancelLecture}
        />
      </Grid>
      <Grid item xs={12}>
        <TimeTable availableSlots={availableSlots} />
      </Grid>
    </Grid>
  );
}

export default Timetable2;
