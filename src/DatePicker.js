import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

const DatePick = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="datepicker">
      <h3>Date Picker</h3>
      <DatePicker
        placeholderText="Pick Date"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showYearDropdown
        scrollableYearDropdown
        showPopperArrow
      />
    </div>
  );
};

export default DatePick;
