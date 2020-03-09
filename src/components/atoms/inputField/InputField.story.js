import React, { Fragment } from "react";
import { withA11y } from "@storybook/addon-a11y";
import InputField from "./InputField";
import { Container } from "react-bootstrap";
import { Formik } from "formik";

export default {
  title: "atoms | Input / InputField",
  component: InputField,
  decorators: [withA11y]
};

export const InputFields = () => (
  <Formik
    initialValues={{
      email: "",
      password: ""
    }}
  >
    <Fragment>
      <Container>
        <InputField
          label={"E-Mail"}
          name={"email"}
          placeholder={"max@muster.ch"}
          type={"email"}
        />
        <InputField
          label={"Passwort"}
          name={"password"}
          type={"password"}
        />
      </Container>
    </Fragment>
  </Formik>
);