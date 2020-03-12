import React from 'react'
import ReactDOM from 'react-dom';
import TextArea from './TextArea'
import { Formik } from 'formik';

describe('TextArea', () => {
  it('returns correct html and produces no errors', () => {
    const errorfn = jest.fn();
    const consoleError = console.error;
    console.error = errorfn;

    const div = document.createElement("div");
    ReactDOM.render(
      <Formik>
        <TextArea
          label={"Subjektiv"}
          name={"subjective"}
        />
      </Formik>,
      div
    )
    expect(errorfn).not.toHaveBeenCalled();
    console.error = consoleError;

    expect(div.innerHTML).toBe('<div class="form-group"><label class="form-label">Subjektiv</label><textarea label="Subjektiv" name="subjective" rows="3" class="text-area form-control"></textarea><div class="invalid-feedback"></div></div>')
  })
})