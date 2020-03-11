import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import PropTypes from "prop-types";
import { useField } from 'formik';
import "./InputField.css"

/**
 * Customizable Input Field that can be used in forms.
 */

const InputField = ({
  name, 
  label, 
  ...props 
}) => {
  const [field, meta] = useField(props);
  return (
    <Form.Group name={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        className={"cornered"}
        {...props}
        {...field}
        isInvalid={meta.error && meta.touched}
      />
      {meta.error && meta.touched ? <FormControl.Feedback type="invalid">{meta.error}</FormControl.Feedback> : ""}
    </Form.Group>
  )
}
export default InputField

InputField.defaultProps = {
  type: "text"
};

InputField.propTypes = {
  /**
   * Define the label over the TextField
   */
  label: PropTypes.string.isRequired,
  /**
   * Choose the type of the TextField
   */
  type: PropTypes.oneOf([
    "text",
    "email",
    "password",
    "number",
    "tel",
  ]),
  /**
   * Define the placeholder
   */
  placeholder: PropTypes.string,
  /**
   * Define the ID of the field which basically sets the label's "for" attribute and input's "id" attribute
   */
  name: PropTypes.string.isRequired
};