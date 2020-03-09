import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IconButton.css';

/**
 * A customizable Icon Button with diffrent types
 *
 * If you want to add other React Bootstrap props of the Button you can just use them like you normaly do.
 *  You can find the possible props here: https://react-bootstrap.github.io/components/buttons/
 */
const IconButton = ({ action, set, icon, align, ...props }) => {
  return (
    <div className={'btn-container ' + align}>
      <Button
        bsPrefix="btn-icon"
        onClick={action}
        {...props}
      >
        <FontAwesomeIcon icon={[set, icon]} size="lg" />
      </Button>
    </div>
  )
}
export default IconButton

IconButton.defaultProps = {
  variant: "primary",
  action: () => { console.log('Button clicked') },
  set: "fas",
  icon: "info",
  align: 'left'
};

IconButton.propTypes = {
  /**
   * Define the onClick function
   */
  action: PropTypes.func,
  /**
   * Define which set the icon is in
   */
  set: PropTypes.oneOf([
    "fas",
    "fab"
  ]),
  /**
   * Define the icon that is displayed
   */
  icon: PropTypes.string.isRequired,
  /**
   * Choose a Button type to define the colors
   */
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "delete",
    "confirm",
    "info"
  ]),
  /**
   * Alignment of the button
   */
  align: PropTypes.oneOf([
    "left",
    "center", 
    "right"
  ])
};