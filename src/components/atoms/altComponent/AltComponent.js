import React from 'react';

import Section from '../section/Section';

/**
 * Alternative component that can be displayed when another component breaks
 */

const AltComponent = () => {
  return (
    <Section style={{ textAlign: 'center' }}>
      <h3>Oops! Teile der Website konnten nicht korrekt dargestellt werden</h3>
      <h4>Bitte versuchen Sie es später nocheinmal</h4>
    </Section>
  )
}

export default AltComponent;