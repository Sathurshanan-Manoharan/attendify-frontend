import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Typography, List, ListItem, ListItemText, Divider, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const LectureSearch = ({ suggestedLectures, onCancelLecture }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLecture, setSelectedLecture] = useState(null);

  const handleSearch = () => {
    // Perform search based on searchQuery
    // For simplicity, let's filter suggestedLectures based on searchQuery
    const results = suggestedLectures.filter(lecture => lecture.toLowerCase().includes(searchQuery.toLowerCase()));
    setSearchResults(results);
  };

  const handleSelectLecture = (lecture) => {
    setSelectedLecture(lecture);
  };

  const handleCancel = () => {
    onCancelLecture(selectedLecture);
    setSelectedLecture(null);
  };

  return (
    <div>
      <TextField
        label="Search Lecture"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleSearch} aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {searchResults.length > 0 && (
        <List>
          {searchResults.map((lecture, index) => (
            <React.Fragment key={index}>
              <ListItem button onClick={() => handleSelectLecture(lecture)}>
                <ListItemText primary={lecture} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      )}
      <Typography variant="h6">Suggestions:</Typography> {/* Updated text here */}
      <List>
        {suggestedLectures.map((lecture, index) => (
          <React.Fragment key={index}>
            <ListItem button onClick={() => handleSelectLecture(lecture)}>
              <ListItemText primary={lecture} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <Button variant="contained" disabled={!selectedLecture} onClick={handleCancel}>Cancel Lecture</Button>
    </div>
  );
};

LectureSearch.propTypes = {
  suggestedLectures: PropTypes.array.isRequired,
  onCancelLecture: PropTypes.func.isRequired,
};

export default LectureSearch;
