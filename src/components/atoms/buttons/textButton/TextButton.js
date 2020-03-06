import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from "prop-types";
import './TextButton.css';

/**
 * A customizable Text Button with diffrent types
 *
 * If you want to add other React Bootstrap props of the Button you can just use them like you normaly do.
 * You can find the possible props here: https://react-bootstrap.github.io/components/buttons/
 */
const TextButton = ({ action, align, ...props }) => {
  return (
    <div className={'btn-container ' + align}>
      <Button
        onClick={action}
        {...props}
      >
        {props.children}
      </Button>
    </div>
  )
}
export default TextButton;

TextButton.defaultProps = {
  variant: "primary"
};

TextButton.propTypes = {
  /**
   * Define the onClick function
   */
  action: PropTypes.func,
  /**
   * Choose a Button type to define the colors
   */
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "delete",
    "confirm",
    "info"
  ])
};