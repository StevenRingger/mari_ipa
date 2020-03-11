import React from 'react';
import PropTypes from "prop-types";

/**
 * Displays element with the successrate and a colored background depending on how high it is.
 */

const SuccessRateDisp = ({ 
  successRate, 
  ...props 
}) => {
  const style = {
    general: {
      width: '50px',
      height: '50px',
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
    <div style={createStyle()}>
      {Math.round(successRate * 100) + '%'}
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