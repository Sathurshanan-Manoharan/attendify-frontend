import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define the blue and white theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Blue
    },
    secondary: {
      main: '#fff', // White
    },
    grey: {
      main: '#f5f5f5', // Gray
    },
    darkBlue: {
      main: '#0d47a1', // Dark Blue
    },
  },
});

const TimeTable = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const timeSlots = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper} style={{ borderCollapse: 'collapse', borderSpacing: '0' }}>
        <Table>
          <TableHead>
            <TableRow>
              {daysOfWeek.map((day, index) => (
                <TableCell key={day} style={{ backgroundColor: day === 'Sunday' || day === 'Saturday' ? '#f5f5f5' : 'inherit', borderRight: index === daysOfWeek.length - 1 ? 'none' : '1px solid #ddd', height: '30px'}}>
                {day}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {timeSlots.map((time) => (
              <TableRow key={time} style={{ height: '30px' }}>
                {daysOfWeek.map((day, dayIndex) => (
                  <TableCell key={`${day}-${time}`} style={{ backgroundColor: day === 'Sunday' || day === 'Saturday' ? '#f5f5f5' : 'inherit', borderRight: dayIndex === daysOfWeek.length - 1 ? 'none' : '1px solid #ddd', position: 'relative', height: '25px', padding: 0, width: '100px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                      {/* {dayIndex === 0 && <div style={{ backgroundColor: '#fff', marginLeft: '5px' }}>{day === 'Sunday' ? time : ''}</div>} */}
                      {dayIndex !== daysOfWeek.length && (
                        <React.Fragment>
                          <div style={{ marginLeft:'-175px' }}>{time}</div>
                          <div style={{ position: 'absolute', top: '0%', bottom: '0%', left: '25%', width: '1px', backgroundColor: '#ddd' }}></div>
                        
                        </React.Fragment>
                      )}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

TimeTable.propTypes = {
  availableSlots: PropTypes.object.isRequired,
};

export default TimeTable;
