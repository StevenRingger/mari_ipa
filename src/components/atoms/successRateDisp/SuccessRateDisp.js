import React from 'react';
import PropTypes from "prop-types";

import './SuccessRateDisp.css';

/**
 * Displays element with the successrate and a colored background depending on how high it is.
 */

const SuccessRateDisp = ({
  successRate,
  ...props
}) => {
  const style = {
    general: {
      width: '100%',
      height: '100%',
      lineHeight: '50px',
      textAlign: 'center',
      float: 'right'
    }
  }
  const createStyle = () => {
    if (successRate <= 0.40) {
      return { backgroundColor: 'var(--error-hover)', ...style.general }
    } else if (successRate <= 0.80) {
      return { backgroundColor: 'var(--warning)', ...style.general }
    } else {
      return { backgroundColor: 'var(--success)', ...style.general }
    }
  }
  return (
    <div style={createStyle()} className="success-rate">
      <span></span>
      <p>{Math.round(successRate * 100) + '%'}</p>
    </div>
  )
}
export default SuccessRateDisp;

SuccessRateDisp.defaultProps = {
  successRate: 0
};

SuccessRateDisp.propTypes = {
  /**
   * Define the label over the TextField
   */
  successRate: PropTypes.number.isRequired,
};