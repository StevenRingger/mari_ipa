import React from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";

import "react-datepicker/dist/react-datepicker.css";
import "./CustomDatePicker.css";

/**
 * Custom datepicker with label
 */

const CustomDatePicker = ({label, selected, onChange, dateFormat,...props}) => {
  return (
    <div>
      <Form.Label>{label}</Form.Label>
      <Form.Group>
        <DatePicker
          selected={selected}
          className="datepicker"
          onChange={onChange}
          dateFormat={dateFormat}
        />
      </Form.Group>
    </div>
  )
}

export default CustomDatePicker;

CustomDatePicker.defaultProps = {
  dateFormat: "dd.MM.yyyy"
};

CustomDatePicker.propTypes = {
  /**
   * Define the label over the TextField
   */
  label: PropTypes.string.isRequired,
  /**
   * Set the date that is selected from start
   */
  selected: PropTypes.instanceOf(Date).isRequired,
  /**
   * Function which gets executed when Input changes
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Format for the date (f.e. "dd.MM.yyyy")
   */
  dateFormat: PropTypes.string
};
