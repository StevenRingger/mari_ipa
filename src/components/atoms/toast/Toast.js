import React from 'react';

const Toast = ({ open, handleClose, message, ...props}) => {
  return (
    <Toast className="toast" {...props} onClose={() => this.handleClose()} show={open} autohide>
      <Toast.Header>{message || ''}</Toast.Header>
    </Toast>
  )
}

export default Toast;
