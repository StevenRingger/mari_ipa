import React from 'react'
import ReactDOM from 'react-dom';
import CustomToast from './CustomToast'

describe('CustomToast', () => {
  it('returns correct html and produces no errors', () => {
    const errorfn = jest.fn();
    const consoleError = console.error;
    console.error = errorfn;

    const div = document.createElement("div");
    ReactDOM.render(
      <CustomToast message="test" />,
      div
    )
    expect(errorfn).not.toHaveBeenCalled();
    console.error = consoleError;

    expect(div.innerHTML).toBe('<div class="fade toast ct-default show" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-header">test<button type="button" class="close ml-2 mb-1" data-dismiss="toast"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button></div></div>')
  })
})