import React, { Fragment } from "react";
import { withA11y } from "@storybook/addon-a11y";
import { Container, Row, Col } from 'react-bootstrap';

import Section from './Section';

export default {
  title: "atoms | Section",
  component: Section,
  decorators: [withA11y]
};

export const Sections = () => (
  <Fragment>
    <Container style={{ padding: "20px" }}>
      <h1 style={{ color: "#FFFFFF" }}>Section default</h1>
      <Row>
        <Col>
          <Section >chdsfjbsf</Section>
        </Col>
      </Row>
    </Container>
    <Container style={{ padding: "20px" }}>
      <h1 style={{ color: "#FFFFFF" }}>Section light</h1>
      <Row>
        <Col>
          <Section variant="light">chdsfjbsf</Section>
        </Col>
      </Row>
    </Container>
    <Container style={{ padding: "20px" }}>
      <h1 style={{ color: "#FFFFFF" }}>Section dark</h1>
      <Row>
        <Col>
          <Section variant="dark">chdsfjbsf</Section>
        </Col>
      </Row>
    </Container>
  </Fragment>
);