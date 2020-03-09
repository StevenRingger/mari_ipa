import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import SuccessRateDisp from '../../atoms/successRateDisp/SuccessRateDisp';
import './TherapyMethod.css';

/**
 * A single therapymethod
 */

const TherapyMethod = ({ method, clickable, selected, therapy, ...props }) => {
  console.log(method)
  return (
    <div
      className={(selected && selected.id === method.id) ? 'therapy-method selected' : 'therapy-method'}
      onClick={() => { therapy(method) }}
      style={props.style}
    >
      <Row >
        <Col xs={10}>
          <h4>{method.name}</h4>
          <p>{method.description}</p>
        </Col>
        <Col xs={2}>
          <SuccessRateDisp successRate={method.success_rate} />
        </Col>
      </Row>
    </div>
  )
}
export default TherapyMethod;

TherapyMethod.defaultProps = {
  clickable: false
};

TherapyMethod.propTypes = {
  /**
   * Object with id, name, description, success_rate
   */
  method: PropTypes.object, 
  /**
   * Is component clickable
   */
  clickable: PropTypes.bool, 
  /**
   * Object of the selected method (id, name, description, success_rate)
   */
  selected: PropTypes.object, 
  /**
   * Function for when therapymethod gets clicked
   */
  therapy: PropTypes.func
};