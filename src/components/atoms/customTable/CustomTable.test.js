import React from 'react'
import ReactDOM from 'react-dom';
import CustomTable from './CustomTable'
import { BrowserRouter } from 'react-router-dom';

const data = [
  {
    1: 'row 1 col 1',
    2: 'row 1 col 2'
  }, {
    1: 'row 2 col 1',
    2: 'row 2 col 2'
  }, {
    1: 'row 3 col 1',
    2: 'row 3 col 2'
  }
]

describe('CustomTable', () => {
  it('returns correct html and produces no errors', () => {
    const errorfn = jest.fn();
    const consoleError = console.error;
    console.error = errorfn;

    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <CustomTable header={["header 1", "header 2"]} data={data} style={{ color: 'white' }} />
      </BrowserRouter>
      ,
      div
    )
    expect(errorfn).not.toHaveBeenCalled();
    console.error = consoleError;

    expect(div.innerHTML).toBe('<table style="color: white;" class="table table-sm table-striped table-bordered"><thead><tr><th>header 1</th><th>header 2</th></tr></thead><tbody><tr><td>row 1 col 1</td><td>row 1 col 2</td></tr><tr><td>row 2 col 1</td><td>row 2 col 2</td></tr><tr><td>row 3 col 1</td><td>row 3 col 2</td></tr></tbody></table>')
  })
})