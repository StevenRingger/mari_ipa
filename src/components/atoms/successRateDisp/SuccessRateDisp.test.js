import React from 'react'
import ReactDOM from 'react-dom';
import SuccessRateDisp from './SuccessRateDisp'

describe('SuccessRateDisp', () => {
  it('returns correct html and produces no errors', () => {
    const errorfn = jest.fn();
    const consoleError = console.error;
    console.error = errorfn;

    const div = document.createElement("div");
    ReactDOM.render(
      <SuccessRateDisp successRate={0.98} />,
      div
    )
    expect(errorfn).not.toHaveBeenCalled();
    console.error = consoleError;

    expect(div.innerHTML).toBe('<div style="width: 50px; height: 50px; line-height: 50px; text-align: center; float: right;">98%</div>')
  })
})