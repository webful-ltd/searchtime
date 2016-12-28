import React, { PropTypes } from 'react';
import DatePicker from 'react-native-datepicker';
import setDate from '../actions/dates';

const DateField = ({ name, currentDate }) => (
  <DatePicker
    confirmBtnText="OK"
    cancelBtnText="Cancel"
    date={currentDate}
    onDateChange={(newDate) => { setDate(name, newDate); }}
  />
);

DateField.propTypes = {
  name: PropTypes.string.isRequired,
  currentDate: PropTypes.string.isRequired,
};

export default DateField;
