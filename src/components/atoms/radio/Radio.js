import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import { useField } from "formik";
import { Form } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';

import './Radio.css';

/**
 * This is a simple styled radio button
 */
const Radio = ({ ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <Fragment>
      <Form.Check
        {...field}
        {...props}
        inline
        type="radio"
        id={props.name + '-' + props.value}
      />
      <FormControl.Feedback type="invalid">{errorText}</FormControl.Feedback>
    </Fragment>

  )
}
export default Radio;

Radio.defaultProps = {
};

Radio.propTypes = {
  /**
   * Text of the label next to the radio-button
   */
  label: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  /**
   * Prop to determine if this radio button is checked by default
   */
  checked: PropTypes.bool,
  /**
   * Name property of the radio button
   */
  name: PropTypes.string.isRequired,
  /**
   * Value of the radio-button
   */
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired

};