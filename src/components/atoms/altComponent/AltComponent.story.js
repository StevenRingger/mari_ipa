import React, { Fragment } from "react";
import { withA11y } from "@storybook/addon-a11y";
import { Container, Row, Col } from 'react-bootstrap';

import AltComponent from './AltComponent';

export default {
  title: "atoms | AltComponent",
  component: AltComponent,
  decorators: [withA11y]
};

export const AltComponents = () => (
  <Fragment>
    <Container style={{ padding: "20px" }}>
      <h1 style={{ color: "#FFFFFF" }}>Alt Component default</h1>
      <Row>
        <Col>
          <AltComponent />
        </Col>
      </Row>
    </Container>
  </Fragment>
);