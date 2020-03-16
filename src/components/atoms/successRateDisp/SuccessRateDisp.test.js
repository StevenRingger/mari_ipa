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

    expect(div.innerHTML).toBe('<div style="width: 100%; height: 100%; line-height: 50px; text-align: center; float: right;" class="success-rate"><span></span><p>98%</p></div>')
  })
})