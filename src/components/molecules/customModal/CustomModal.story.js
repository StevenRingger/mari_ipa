import React, { Fragment } from "react";
import { withA11y } from "@storybook/addon-a11y";
import { Container } from 'react-bootstrap';

import CustomModal from './CustomModal';

export default {
  title: "molecules | CustomModal",
  component: CustomModal,
  decorators: [withA11y]
};

export const CustomModals = () => (

  <Fragment>
    <Container style={{ padding: "20px" }}>
      <h1 style={{ color: "#FFFFFF" }}>CustomModal - default</h1>
      <CustomModal
        show={true}
        animation={true}
        title={"Ungespeicherte Daten"}
        message={"Sie haben noch ungespeicherte Änderungen, die gelöscht werden wenn Sie die Seite verlassen."}
        secondaryButtonText={"Abbrechen"}
        primaryButtonText={"Verlassen"} />
    </Container>
  </Fragment>
);