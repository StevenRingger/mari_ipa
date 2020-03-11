import React from 'react';
import PropTypes from "prop-types";
import { Form } from 'react-bootstrap';

import './ScalePicker.css';
import Radio from './../../atoms/radio/Radio';
import { interpolateColorsHsl } from "../../../services/ColorInterpolationService";

/**
 * This is a component for a scale. It displays specific numbers as buttons that can be selected.
 */
const ScalePicker = ({ 
  text, 
  scope, 
  name, 
  initialCheck, 
  changeAction, 
  color, 
  colorLeft, 
  colorRight, 
  ...props 
}) => {
  const colors = (colorLeft && colorRight) ? interpolateColorsHsl(colorLeft, colorRight, scope.length) : interpolateColorsHsl(color, color, scope.length);

  return (
    <Form.Group>
      <Form.Label>{text}</Form.Label>
      <div onChange={changeAction} className="scale-picker-radio">
        {scope.map((value, index) => (
          <Radio
            checked={(initialCheck === value) ? true : false}
            className="radio-button"
            style={{ backgroundColor: "hsl(" + colors[index][0] + "," + colors[index][1] + "," + colors[index][2] + ")" }}
            label={value}
            key={value}
            name={name}
            value={value}
            disabled={props.disabled}
          />
        ))}
        {(props.errorText !== '') ? <div style={{ width: '100%', marginTop: '.25rem', fontSize: '80%', color: '#dc3545' }}>{props.errorText}</div> : ''}
      </div>
    </Form.Group>
  )
}
export default ScalePicker;

ScalePicker.defaultProps = {
  color: [0, 0, 58]
};

ScalePicker.propTypes = {
  /**
   * Text that appears above the Scale-Picker
   */
  text: PropTypes.string,
  /**
   * Array of numbers from where to where the scale goes
   */
  scope: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Name property of radio buttons
   */
  name: PropTypes.string.isRequired,
  /**
   * The initial selected value 
   */
  initialCheck: PropTypes.string,
  /**
   * Define the onChange function
   */
  changeAction: PropTypes.func,
  /**
   * Color of the radio buttons
   */
  color: PropTypes.arrayOf(PropTypes.number),
  /**
   * Color of the left outer radio button if there should be a gradient inbetween
   */
  colorLeft: PropTypes.arrayOf(PropTypes.number),
  /**
   * Color of the right outer radio button if there should be a gradient inbetween
   */
  colorRight: PropTypes.arrayOf(PropTypes.number)
};