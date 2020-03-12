import React, { Fragment } from "react";
import { withA11y } from "@storybook/addon-a11y";
import { Container } from "react-bootstrap";
import { Formik } from "formik";
import CustomDatePicker from "./CustomDatePicker";

export default {
  title: "atoms | Input / CustomDatePicker",
  component: CustomDatePicker,
  decorators: [withA11y]
};

export const CustomDatePickers = () => (
  <Formik
    initialValues={{
      birthday: new Date('2020.02.17')
    }}
  >
    {props => {
      const {
        values,
        setFieldValue
      } = props;
      return (
        <CustomDatePicker
          label={"Geburtstag"}
          selected={values.birthday}
          onChange={(e) => { setFieldValue("birthday", e) }}
          dateFormat={"dd.MM.yyyy"}
        />
      )
    }}
  </Formik>
);