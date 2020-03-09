import React, { Fragment } from "react";
import { withA11y } from "@storybook/addon-a11y";
import { Container } from 'react-bootstrap';

import ButtonGroup from './ButtonGroup';

export default {
  title: "molecules | ButtonGroup",
  component: ButtonGroup,
  decorators: [withA11y]
};

export const ButtonGroups = () => (
  <Fragment>
    <Container style={{ padding: "20px", position: "relative" }}>
      <h1 style={{ color: "#FFFFFF" }}>ButtonGroup - default</h1>
      <ButtonGroup editMode />
    </Container>
  </Fragment>
);