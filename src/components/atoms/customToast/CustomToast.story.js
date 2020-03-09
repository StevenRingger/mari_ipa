import React, { Fragment } from "react";
import { withA11y } from "@storybook/addon-a11y";
import { Container } from 'react-bootstrap';

import CustomToast from './CustomToast';

export default {
  title: "atoms | CustomToast",
  component: CustomToast,
  decorators: [withA11y]
};

export const CustomToasts = () => (
  <Fragment>
    <Container style={{ padding: "20px" }}>
      <h1 style={{ color: "#FFFFFF" }}>CustomToast - default</h1>
      <CustomToast message="test" />
      <CustomToast message="test" variant="ct-alert"/>
    </Container>
  </Fragment>
);