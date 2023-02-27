import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

import { useState } from "react";

export default function CustomDatePicker(props) {
  const [startDate, setStartDate] = useState();

  const handleChange = (e) => {
    setStartDate(e);
    props.onValueChange(moment(e).format("DD.MM.YYYY"));
  };
  return (
    <>
      <div className="form-group p-2">
        <label className="p-2">{props.label}</label>
        <DatePicker
          required
          className={`form-control datePicker`}
          selected={startDate}
          onChange={(date) => handleChange(date)}
          placeholderText={props.placeholder}
        />
      </div>
    </>
  );
}
