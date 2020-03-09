import React, { Fragment } from "react";
import { withA11y } from "@storybook/addon-a11y";
import { Container, Row, Col } from 'react-bootstrap';
import { Formik } from "formik";

import Radio from './Radio';
import Section from './../section/Section';

export default {
  title: "atoms | Input / Radio",
  component: Radio,
  decorators: [withA11y]
};

export const Radios = () => (
  <Formik>
    <Fragment>
      <Container style={{ padding: "20px" }}>
        <h1 style={{ color: "#FFFFFF" }}>Radio - default</h1>
        <Section>
          <Row>
            <Col md="3">
              <Radio name="radio-button" value="2" label="I'm a radio Button" />
            </Col>
            <Col md="3">
              <Radio name="radio-button" value="5" label="I'm a radio Button 2" />
            </Col>
          </Row>
        </Section>
      </Container>
      <Container style={{ padding: "20px" }}>
        <h1 style={{ color: "#FFFFFF" }}>Radio - default-checked</h1>
        <Section>
          <Row>
            <Col md="3">
              <Radio name="radio-button2" value="2" label="I'm a radio Button" />
            </Col>
            <Col md="3">
              <Radio name="radio-button2" value="5" checked label="I'm a radio Button 2" />
            </Col>
          </Row>
        </Section>
      </Container>
    </Fragment>
  </Formik>


);