import React from 'react'
import ReactDOM from 'react-dom';
import AltComponent from './AltComponent'

describe('AltComponent', () => {
  it('returns correct html and produces no errors', () => {
    const errorfn = jest.fn();
    const consoleError = console.error;
    console.error = errorfn;

    const div = document.createElement("div");
    ReactDOM.render(
      <AltComponent />,
      div
    )
    expect(errorfn).not.toHaveBeenCalled();
    console.error = consoleError;

    expect(div.innerHTML).toBe('<section class="section-light" style="text-align: center;"><h3>Ups! Teile der Website konnten nicht korrekt dargestellt werden</h3><h4>Bitte versuchen Sie es später nocheinmal</h4></section>')
  })
})