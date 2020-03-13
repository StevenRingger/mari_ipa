import React from 'react'
import ReactDOM from 'react-dom';
import TherapyMethod from './TherapyMethod'

describe('TherapyMethod', () => {
  it('returns correct html and produces no errors', () => {
    const errorfn = jest.fn();
    const consoleError = console.error;
    console.error = errorfn;

    const div = document.createElement("div");
    ReactDOM.render(
      <TherapyMethod style={{ backgroundColor: 'white' }} method={{
        "id": "35",
        "name": "In consectetuer turpis ut velit",
        "description": "Vestibulum ullamcorper mauris at ligula. Phasel  at ligula laoreet iaculis.",
        "success_rate": 0.64
      }} />,
      div
    )
    expect(errorfn).not.toHaveBeenCalled();
    console.error = consoleError;

    expect(div.innerHTML).toBe('<div class="therapy-method" style="background-color: white;"><div class="row"><div class="col-10"><h4>In consectetuer turpis ut velit</h4><p>Vestibulum ullamcorper mauris at ligula. Phasel  at ligula laoreet iaculis.</p></div><div class="col-2"><div style="width: 50px; height: 50px; line-height: 50px; text-align: center; float: right;">64%</div></div></div></div>')
  })
})