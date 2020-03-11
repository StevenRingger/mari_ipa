import React from 'react'
import { Form } from 'react-bootstrap';
import { useField } from "formik";
import PropTypes from "prop-types";
import FormControl from 'react-bootstrap/FormControl';

import './TextArea.css';

/**
 * Customizable Input Field that can be used in forms.
 */
const TextArea = ({ ...props }) => {
    const [field, meta] = useField(props);
    if (field.value === undefined) {
        field.value = "";
    }
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
        <Form.Group controlId={props.controlId}>
          <Form.Label>{props.label}</Form.Label>
          <Form.Control 
            className="text-area"
            as="textarea" 
            {...props} 
            {...field}
            isInvalid={meta.error && meta.touched}
          />
          <FormControl.Feedback type="invalid">{errorText}</FormControl.Feedback>
        </Form.Group>
    )
}
export default TextArea

TextArea.defaultProps = {
    rows: "3"
};

TextArea.propTypes = {
    /**
     * Define the label over the TextField
     */
    label: PropTypes.string.isRequired,
    /**
     * Amount of rows the Textarea should have
     */
    rows: PropTypes.string,
    /**
     * Define the placeholder
     */
    placeholder: PropTypes.string,
    /**
     * Define the ID of the field which basically sets the label's "for" attribute and input's "id" attribute
     */
    controlId: PropTypes.string
};