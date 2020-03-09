import React, { Fragment } from "react";
import { createMemoryHistory } from 'history'
import { withA11y } from "@storybook/addon-a11y";
import { Container } from 'react-bootstrap';
import { Router } from "react-router-dom";

import CustomTable from './CustomTable';

export default {
  title: "atoms | CustomTable",
  component: CustomTable,
  decorators: [withA11y]
};

const data = [
  {
    1: 'row 1 col 1',
    2: 'row 1 col 2'
  },{
    1: 'row 2 col 1',
    2: 'row 2 col 2'
  },{
    1: 'row 3 col 1',
    2: 'row 3 col 2'
  }
]

export const CustomTables = () => (
  <Fragment>
    <Router history={createMemoryHistory({ initialEntries: ['/'] })}>
      <Container style={{ padding: "20px" }}>
        <h1 style={{ color: "#FFFFFF" }}>Table</h1>
        <CustomTable header={["header 1", "header 2"]} data={data} style={{color: 'white'}}/>
      </Container>
    </Router>
  </Fragment>
);