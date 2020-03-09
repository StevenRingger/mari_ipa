import React from 'react';
import { Toast } from 'react-bootstrap';

import './Toast.css';

const CustomToast = ({ open, handleClose, message, ...props}) => {
  return (
    <Toast className="toast" {...props} onClose={() => this.handleClose()} show={open} autohide>
      <Toast.Header>{message || ''}</Toast.Header>
    </Toast>
  )
}

export default CustomToast;