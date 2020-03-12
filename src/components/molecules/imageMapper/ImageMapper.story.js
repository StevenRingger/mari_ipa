import React, { Fragment } from "react";
import { withA11y } from "@storybook/addon-a11y";
import { Container, Row, Col } from 'react-bootstrap';

import ImageMapper from './ImageMapper';
import image from '../../../resources/image_for_mapper.png';

export default {
  title: "molecules | ImageMapper",
  component: ImageMapper,
  decorators: [withA11y]
};
const map = {
  name: "example",
  areas:  [
    {
      "id":"1",
      "name": "punkt 1",
      "shape": "circle",
      "coords": [54, 55, 12]
    },
    {
      "id":"2",
      "name": "punkt 2",
      "shape": "circle",
      "coords": [52, 118, 12]
    },
    {
      "id":"3",
      "name": "punkt 3",
      "shape": "circle",
      "coords": [51, 175, 12]
    },
    {
      "id":"4",
      "name": "punkt 4",
      "shape": "circle",
      "coords": [50, 244, 12]
    },
    {
      "id":"5",
      "name": "punkt 5",
      "shape": "circle",
      "coords": [51, 334, 12]
    }
]
}
const setArea = (area) => {
  console.log(area)
}

export const ImageMappers = () => (
  <Fragment>
    <Container style={{ padding: "20px" }}>
      <h1 style={{ color: "#FFFFFF" }}>ImageMapper - default</h1>
      <Row>
        <Col>
          <ImageMapper
            width={600}
            imgWidth={700}
            clicked={setArea}
            coordMap={map}
            image={image}
            hasData={["1", "4"]}
            color="#fff"
            background="rgba(0,0,0,0.7)"
            hoverColor="rgba(255,255,255,1)"
            hoverBackground="rgba(0,0,0,0.6)" />
        </Col>
      </Row>
    </Container>
  </Fragment>

);