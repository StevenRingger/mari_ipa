import React from 'react';
import ReactDOM from 'react-dom';
import CustomDatePicker from './CustomDatePicker';
import { Formik } from 'formik';

describe('CustomDatePicker', () => {
  it('returns correct html and produces no errors', () => {
    const errorfn = jest.fn();
    const consoleError = console.error;
    console.error = errorfn;

    const div = document.createElement("div");
    ReactDOM.render(
      <Formik
        initialValues={{
          birthday: new Date('2020.02.17')
        }}
      >
        {props => {
          const {
            values,
            setFieldValue
          } = props;
          return (
            <CustomDatePicker
              label={"Geburtstag"}
              selected={values.birthday}
              onChange={(e) => { setFieldValue("birthday", e) }}
              dateFormat={"dd.MM.yyyy"}
            />
          )
        }}
      </Formik>,
      div
    )
    expect(errorfn).not.toHaveBeenCalled();
    console.error = consoleError;

    expect(div.innerHTML).toBe('<div><label class="form-label">Geburtstag</label><div class="form-group"><div class="react-datepicker-wrapper"><div class="react-datepicker__input-container"><input type="text" class="datepicker" value="17.02.2020"></div></div></div></div>')
  })
})