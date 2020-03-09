import React, { Fragment } from 'react';

/**
 * Alternative component that can be displayed when another component breaks
 */

const AltComponent = () => {
  return (
    <Fragment style={{ textAlign: 'center' }}>
      <h3>Oops!Teile der Website konnten nicht korrekt dargestellt werden</h3>
      <h4>Bitte versuchen Sie es später nocheinmal</h4>
    </Fragment>
  )
}

export default AltComponent;