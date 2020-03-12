import React from 'react'
import ReactDOM from 'react-dom';
import ScalePicker from './ScalePicker'
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';

describe('ScalePicker', () => {
  it('returns correct html and produces no errors', () => {
    const errorfn = jest.fn();
    const consoleError = console.error;
    console.error = errorfn;

    const div = document.createElement("div");
    ReactDOM.render(
      <Formik
      initialValues={{
        painscale: '',
        painscale2: '4',
      }}
      enableReinitialize={true}
    >
      {({ handleSubmit,
        values,
        errors }) => {
        return (
          <Form>
            <ScalePicker
              text="Hello World"
              scope={['1', '2', '3', '4', '5', '6', '9', '12']}
              name="painscale2"
              changeAction={(e) => { console.log('The pressed button is: ' + e.target.value) }}
              initialCheck={values.painscale2}
              colorLeft={[134, 61, 33]}
              colorRight={[1, 83, 46]}
            />
          </Form>
        );
      }}
    </Formik>,
      div
    )
    expect(errorfn).not.toHaveBeenCalled();
    console.error = consoleError;

    expect(div.innerHTML).toBe('<form class=""><div class="form-group"><label class="form-label">Hello World</label><div class="scale-picker-radio"><div style="background-color: hsl(134, 61%, 33%);" class="radio-button form-check form-check-inline"><input name="painscale2" type="radio" id="painscale2-1" class="form-check-input" value="1"><label title="" for="painscale2-1" class="form-check-label">1</label></div><div class="invalid-feedback"></div><div style="background-color: hsl(115, 64%, 35%);" class="radio-button form-check form-check-inline"><input name="painscale2" type="radio" id="painscale2-2" class="form-check-input" value="2"><label title="" for="painscale2-2" class="form-check-label">2</label></div><div class="invalid-feedback"></div><div style="background-color: hsl(96, 67%, 37%);" class="radio-button form-check form-check-inline"><input name="painscale2" type="radio" id="painscale2-3" class="form-check-input" value="3"><label title="" for="painscale2-3" class="form-check-label">3</label></div><div class="invalid-feedback"></div><div style="background-color: hsl(77, 70%, 39%);" class="radio-button form-check form-check-inline"><input name="painscale2" type="radio" id="painscale2-4" class="form-check-input" value="4" checked=""><label title="" for="painscale2-4" class="form-check-label">4</label></div><div class="invalid-feedback"></div><div style="background-color: hsl(58, 74%, 40%);" class="radio-button form-check form-check-inline"><input name="painscale2" type="radio" id="painscale2-5" class="form-check-input" value="5"><label title="" for="painscale2-5" class="form-check-label">5</label></div><div class="invalid-feedback"></div><div style="background-color: hsl(39, 77%, 42%);" class="radio-button form-check form-check-inline"><input name="painscale2" type="radio" id="painscale2-6" class="form-check-input" value="6"><label title="" for="painscale2-6" class="form-check-label">6</label></div><div class="invalid-feedback"></div><div style="background-color: hsl(20, 80%, 44%);" class="radio-button form-check form-check-inline"><input name="painscale2" type="radio" id="painscale2-9" class="form-check-input" value="9"><label title="" for="painscale2-9" class="form-check-label">9</label></div><div class="invalid-feedback"></div><div style="background-color: hsl(1, 83%, 46%);" class="radio-button form-check form-check-inline"><input name="painscale2" type="radio" id="painscale2-12" class="form-check-input" value="12"><label title="" for="painscale2-12" class="form-check-label">12</label></div><div class="invalid-feedback"></div><div style="width: 100%; margin-top: .25rem; font-size: 80%; color: rgb(220, 53, 69);"></div></div></div></form>')
  })
})