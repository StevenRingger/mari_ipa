import React from 'react'
import ReactDOM from 'react-dom';
import TextButton from './TextButton'

describe('TextButton', () => {
  it('returns correct html and produces no errors', () => {
    const errorfn = jest.fn();
    const consoleError = console.error;
    console.error = errorfn;

    const div = document.createElement("div");
    ReactDOM.render(
      <TextButton
        action={() => { console.log("works") }}
        variant={"primary"}
        align={"right"}
      />,
      div
    )
    expect(errorfn).not.toHaveBeenCalled();
    console.error = consoleError;

    expect(div.innerHTML).toBe('<div class="btn-container right"><button type="button" class="btn btn-primary"></button></div>')
  })
})