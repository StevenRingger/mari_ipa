import React, { Fragment } from "react";
import { withA11y } from "@storybook/addon-a11y";
import { Container } from 'react-bootstrap';

import TherapyMethod from './TherapyMethod';

export default {
  title: "molecules | TherapyMethod",
  component: TherapyMethod,
  decorators: [withA11y]
};

export const TherapyMethods = () => (
  <Fragment>
    <Container style={{ padding: "20px" }}>
      <h1 style={{ color: "#FFFFFF" }}>TherapyMethod - default</h1>
      <TherapyMethod style={{ backgroundColor: 'white' }} method={{
        "id": "35",
        "name": "In consectetuer turpis ut velit",
        "description": "Vestibulum ullamcorper mauris at ligula. Phasellus viverra nulla ut metus varius laoreet. Phasellus nec sem in justo pellentesque facilisis. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Donec posuere vulputate arcu. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Praesent ac massa at ligula laoreet iaculis.",
        "success_rate": 0.64
      }} />
    </Container>
  </Fragment>
);