import React, { Fragment } from "react";
import { withA11y } from "@storybook/addon-a11y";
import { Formik, Form } from 'formik';
import { Container, Row, Col } from 'react-bootstrap';

import ScalePicker from './ScalePicker';

export default {
  title: "molecules | ScalePicker",
  component: ScalePicker,
  decorators: [withA11y]
};

export const ScalePickers = () => (
  <Fragment>
    <Formik
      initialValues={{
        painscale: '',
        painscale2: '4',
      }}
      enableReinitialize={true}
    >
      {({ handleSubmit,
        values,
        errors }) => {
        return (
          <Form>
            <Container style={{ padding: "20px" }}>
              <h1 style={{ color: "#FFFFFF" }}>Scale-Picker - default</h1>
              <Row>
                <Col>
                  <ScalePicker
                    text={<p style={{ color: "#FFFFFF" }}>Hello World</p>}
                    scope={['1', '2', '3', '4', '5']}
                    name="painscale"
                    initialCheck={values.painscale}
                  />
                </Col>
              </Row>
            </Container>
            <Container style={{ padding: "20px" }}>
              <h1 style={{ color: "#FFFFFF" }}>Scale-Picker - with props</h1>
              <Row>
                <Col>
                  <ScalePicker
                    text={<p style={{ color: "#FFFFFF" }}>Hello World</p>}
                    scope={['1', '2', '3', '4', '5', '6', '9', '12']}
                    name="painscale2"
                    changeAction={(e) => { console.log('The pressed button is: ' + e.target.value) }}
                    initialCheck={values.painscale2}
                    colorLeft={[134, 61, 33]}
                    colorRight={[1, 83, 46]}
                  />
                </Col>
              </Row>
            </Container>
          </Form>
        );
      }}
    </Formik>
  </Fragment>

);