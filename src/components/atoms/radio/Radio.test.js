import React from 'react'
import ReactDOM from 'react-dom';
import Radio from './Radio'
import { Formik } from 'formik';

describe('Radio', () => {
  it('returns correct html and produces no errors', () => {
    const errorfn = jest.fn();
    const consoleError = console.error;
    console.error = errorfn;

    const div = document.createElement("div");
    ReactDOM.render(
      <Formik>
        <Radio name="radio-button" value="2" label="Im a radio Button" /> 
      </Formik>,
      div
    )
    expect(errorfn).not.toHaveBeenCalled();
    console.error = consoleError;

    expect(div.innerHTML).toBe('<div class="form-check form-check-inline"><input name="radio-button" type="radio" id="radio-button-2" class="form-check-input" value="2"><label title="" for="radio-button-2" class="form-check-label">Im a radio Button</label></div><div class="invalid-feedback"></div>')
  })
})