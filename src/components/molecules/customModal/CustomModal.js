import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

import TextButton from '../../atoms/buttons/textButton/TextButton';
import './CustomModal.css';

/**
 * Modal element with two buttons and a message
 */

const CustomModal = ({
  onHide, 
  animation, 
  show, 
  title, 
  message, 
  secondaryButtonAction, 
  secondaryButtonText, 
  primaryButtonAction, 
  primaryButtonText, 
  ...props
}) => {
  return (
    <Modal show={show} onHide={onHide} animation={animation}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <TextButton variant="secondary" onClick={secondaryButtonAction}>
          {secondaryButtonText}
        </TextButton>
        <TextButton variant="primary" onClick={primaryButtonAction}>
          {primaryButtonText}
        </TextButton>
      </Modal.Footer>
    </Modal>
  )
}
export default CustomModal;

CustomModal.defaultProps = {
  title: 'This is a Modal',
  message: 'This is the modal message',
  animation: false,
  primaryButtonText: 'Button 1',
  secondaryButtonText: 'Button 2',
  show: false
};

CustomModal.propTypes = {
  /**
   * What shoud happen when get closed
   */
  onHide: PropTypes.func, 
  /**
   * Should the component be animated
   */
  animation: PropTypes.bool, 
  /**
   * Is the component visible
   */
  show: PropTypes.bool, 
  /**
   * Title of the modal
   */
  title: PropTypes.string, 
  /**
   * Message to display in modal
   */
  message: PropTypes.string, 
  /**
   * Function for onClick of the secondary button
   */
  secondaryButtonAction: PropTypes.func, 
  /**
   * Text for the secondary button
   */
  secondaryButtonText: PropTypes.string, 
  /**
   * Function for onClick of the primary button
   */
  primaryButtonAction: PropTypes.func, 
  /**
   * Text for the primary button
   */
  primaryButtonText: PropTypes.string
};