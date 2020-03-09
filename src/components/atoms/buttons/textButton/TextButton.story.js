import React, { Fragment } from "react";
import { withA11y } from "@storybook/addon-a11y";
import { Container, Row, Col } from 'react-bootstrap';

import TextButton from './TextButton';

export default {
  title: "atoms | Buttons / TextButton",
  component: TextButton,
  decorators: [withA11y]
};

export const TextButtons = () => (
  <Fragment>
    <Container style={{ padding: "20px" }}>
      <h1 style={{ color: "#FFFFFF" }}>Buttons</h1>
      <Row>
        <Col md="2">
          <TextButton variant="primary">Primary</TextButton>
        </Col>
        <Col md="2">
          <TextButton variant="secondary">Secondary</TextButton>
        </Col>
        <Col md="2">
          <TextButton variant="delete">Delete</TextButton>
        </Col>
        <Col md="2">
          <TextButton variant="confirm">Confirm</TextButton>
        </Col>
        <Col md="2">
          <TextButton variant="info">Info</TextButton>
        </Col>
      </Row>
    </Container>
    <Container style={{ padding: "20px" }}>
      <h1 style={{ color: "#FFFFFF" }}>Buttons - disabled</h1>
      <Row>
        <Col md="2">
          <TextButton variant="primary" disabled>Primary</TextButton>
        </Col>
        <Col md="2">
          <TextButton variant="secondary" disabled>Secondary</TextButton>
        </Col>
        <Col md="2">
          <TextButton variant="delete" disabled>Delete</TextButton>
        </Col>
        <Col md="2">
          <TextButton variant="confirm" disabled>Confirm</TextButton>
        </Col>
        <Col md="2">
          <TextButton variant="info" disabled>Info</TextButton>
        </Col>
      </Row>
    </Container>
    <Container style={{ padding: "20px" }}>
      <h1 style={{ color: "#FFFFFF" }}>Buttons - align</h1>
      <Row>
        <Col md="4">
          <TextButton variant="primary">Default</TextButton>
        </Col>
        <Col md="4">
          <TextButton variant="secondary" align="center">Center</TextButton>
        </Col>
        <Col md="4">
          <TextButton variant="delete" align="right">Right</TextButton>
        </Col>
      </Row>
    </Container>
  </Fragment>
);