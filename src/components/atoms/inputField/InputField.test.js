import React from 'react'
import ReactDOM from 'react-dom';
import InputField from './InputField'
import { Formik } from 'formik';

describe('InputField', () => {
  it('returns correct html and produces no errors', () => {
    const errorfn = jest.fn();
    const consoleError = console.error;
    console.error = errorfn;

    const div = document.createElement("div");
    ReactDOM.render(
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
      >
        <InputField
          label={"E-Mail"}
          name={"email"}
          placeholder={"max@muster.ch"}
          type={"email"}
        />
      </Formik>,
      div
    )
    expect(errorfn).not.toHaveBeenCalled();
    console.error = consoleError;

    expect(div.innerHTML).toBe('<div name="email" class="form-group"><label class="form-label">E-Mail</label><input name="email" placeholder="max@muster.ch" type="email" class="cornered form-control" value=""></div>')
  })
})