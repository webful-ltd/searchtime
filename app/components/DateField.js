import React, { PropTypes } from 'react';
import DatePicker from 'react-native-datepicker';

const DateField = ({ onChange, currentDate }) => (
  <DatePicker
    confirmBtnText="OK"
    cancelBtnText="Cancel"
    date={currentDate}
    onDateChange={onChange}
  />
);

DateField.propTypes = {
  currentDate: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DateField;
