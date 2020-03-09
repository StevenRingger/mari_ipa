import React, { Fragment } from "react";
import { withA11y } from "@storybook/addon-a11y";
import { Container, Row, Col } from 'react-bootstrap';

import IconButton from './IconButton';

export default {
  title: "atoms | Buttons / IconButton",
  component: IconButton,
  decorators: [withA11y]
};

export const IconButtons = () => (
  <Fragment>
    <Container style={{ padding: "20px" }}>
      <h1 style={{ color: "#FFFFFF" }}>Icon-Buttons</h1>
      <Row>
        <Col md="2">
          <IconButton variant="primary" icon="pen">click</IconButton>
        </Col>
        <Col md="2">
          <IconButton variant="secondary" set="fab" icon="google">click</IconButton>
        </Col>
        <Col md="2">
          <IconButton variant="delete" icon="minus">click</IconButton>
        </Col>
        <Col md="2">
          <IconButton variant="confirm" icon="check">click</IconButton>
        </Col>
        <Col md="2">
          <IconButton variant="info">click</IconButton>
        </Col>
      </Row>
    </Container>
    <Container style={{ padding: "20px" }}>
      <h1 style={{ color: "#FFFFFF" }}>Icon-Buttons - disabled</h1>
      <Row>
        <Col md="2">
          <IconButton variant="primary" icon="pen" disabled>click</IconButton>
        </Col>
        <Col md="2">
          <IconButton variant="secondary" set="fab" icon="google" disabled>click</IconButton>
        </Col>
        <Col md="2">
          <IconButton variant="delete" icon="minus" disabled>click</IconButton>
        </Col>
        <Col md="2">
          <IconButton variant="confirm" icon="check" disabled>click</IconButton>
        </Col>
        <Col md="2">
          <IconButton variant="info" disabled>click</IconButton>
        </Col>
      </Row>
    </Container>
    <Container style={{ padding: "20px" }}>
      <h1 style={{ color: "#FFFFFF" }}>Icon-Buttons - align</h1>
      <Row>
        <Col md="3">
          <IconButton variant="primary" icon="pen" />
        </Col>
        <Col md="3">
          <IconButton variant="secondary" set="fab" icon="google" align='center' />
        </Col>
        <Col md="3">
          <IconButton variant="delete" icon="minus" align='right' />
        </Col>
      </Row>
    </Container>
  </Fragment>
);