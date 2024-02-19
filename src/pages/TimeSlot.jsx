// TimeSlot.js

import PropTypes from 'prop-types';

const TimeSlot = ({ time, isSelected, onSelect }) => {
  return (
    <div
      className={`time-slot ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      {time}
    </div>
  );
};

TimeSlot.propTypes = {
  time: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired
};
export default TimeSlot;
