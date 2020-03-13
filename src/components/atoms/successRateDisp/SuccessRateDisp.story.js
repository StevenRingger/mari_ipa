import React, { Fragment } from "react";
import { withA11y } from "@storybook/addon-a11y";
import { Container } from 'react-bootstrap';

import SuccessRateDisp from './SuccessRateDisp';

export default {
  title: "atoms | SuccessRateDisp",
  component: SuccessRateDisp,
  decorators: [withA11y]
};

export const SuccessRateDisps = () => (
  <Fragment>
    <Container style={{ padding: "20px" }}>
      <h1 style={{ color: "#FFFFFF" }}>SuccessRateDisp - default</h1>
      <SuccessRateDisp successRate={0.98} />
      <SuccessRateDisp successRate={0.5} />
      <SuccessRateDisp successRate={0.31} />
    </Container>

  </Fragment>
);