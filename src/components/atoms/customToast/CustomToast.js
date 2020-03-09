import React from 'react';
import { Toast } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './CustomToast.css';

/**
 * Custom styled toast notification
 */

const CustomToast = ({ 
  open, 
  handleClose, 
  message, 
  variant,
  position,
  ...props}) => {
  return (
    <Toast className={(position)? variant+ ' toast-position '+position: variant } {...props} onClose={() => this.handleClose()} show={open} autohide>
      <Toast.Header>{message || ''}</Toast.Header>
    </Toast>
  )
}

export default CustomToast;

CustomToast.defaultProps = {
  variant: 'ct-default'
};

CustomToast.propTypes = {
  /**
   * Is it displayed
   */
  open: PropTypes.bool, 
  /**
   * Function to handle close event
   */
  handleClose: PropTypes.func, 
  /**
   * Message to be displayed
   */
  message: PropTypes.string, 
  /**
   * Alert color
   */
  variant: PropTypes.oneOf([
    "ct-default",
    "ct-alert"
  ]),
  /**
   * Position of the Toast
   */
  position: PropTypes.oneOf([
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right"
  ]),
};