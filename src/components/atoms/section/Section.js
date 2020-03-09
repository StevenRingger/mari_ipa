import React from 'react';
import PropTypes from "prop-types";

import './Section.css';

/**
 * Page section with border
 */
const Section = ({ ...props }) => {
  return (
    <section className={"section-" + props.variant}>
      {props.children}
    </section>
  )
}
export default Section;

Section.defaultProps = {
  variant: "light",
};

Section.propTypes = {
  /**
   * Define the style of the section
   */
  variant: PropTypes.oneOf([
    "light",
    "dark"
  ])
};