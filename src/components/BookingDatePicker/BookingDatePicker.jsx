import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './BookingDatePicker.module.css';

const BookingDatePicker = ({ selectedDate, setSelectedDate }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      placeholderText="Booking date*"
      dateFormat="dd.MM.yyyy"
      required
      className={styles.input}
      calendarClassName="customCalendar"
    />
  );
};

export default BookingDatePicker;
