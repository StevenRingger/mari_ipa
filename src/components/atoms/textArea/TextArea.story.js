import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { Container } from 'react-bootstrap';
import { Formik } from "formik";

import TextArea from './TextArea';

export default {
  title: "atoms | Input / TextArea",
  component: TextArea,
  decorators: [withA11y]
};

export const TextAreas = () => (
  <Formik>
    <Container style={{ padding: "20px" }}>
      <h1 style={{ color: "#FFFFFF" }}>TextArea - default</h1>
      <TextArea
        label={"Subjektiv"}
        name={"subjective"}
      />
      <h1 style={{ color: "#FFFFFF" }}>TextArea - rows</h1>
      <TextArea
        label={"Subjektiv"}
        name={"subjective"}
        rows="10"
      />
      <h1 style={{ color: "#FFFFFF" }}>TextArea - disabled</h1>
      <TextArea
        label={"Subjektiv"}
        name={"subjective"}
        disabled
      />
    </Container>
  </Formik>
);