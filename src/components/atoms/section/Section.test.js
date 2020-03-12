import React from 'react'
import ReactDOM from 'react-dom';
import Section from './Section'

describe('Section', () => {
  it('returns correct html and produces no errors', () => {
    const errorfn = jest.fn();
    const consoleError = console.error;
    console.error = errorfn;

    const div = document.createElement("div");
    ReactDOM.render(
      <Section>Test</Section>,
      div
    )
    expect(errorfn).not.toHaveBeenCalled();
    console.error = consoleError;

    expect(div.innerHTML).toBe('<section class="section-light">Test</section>')
  })
})