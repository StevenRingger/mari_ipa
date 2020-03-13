import React from 'react'
import ReactDOM from 'react-dom';

import image from '../../../resources/image_for_mapper.png';
import ImageMapper from './ImageMapper';

const map = {
  name: "example",
  areas: [
    {
      "id": "1",
      "name": "punkt 1",
      "shape": "circle",
      "coords": [54, 55, 12]
    },
    {
      "id": "2",
      "name": "punkt 2",
      "shape": "circle",
      "coords": [52, 118, 12]
    },
    {
      "id": "3",
      "name": "punkt 3",
      "shape": "circle",
      "coords": [51, 175, 12]
    },
    {
      "id": "4",
      "name": "punkt 4",
      "shape": "circle",
      "coords": [50, 244, 12]
    },
    {
      "id": "5",
      "name": "punkt 5",
      "shape": "circle",
      "coords": [51, 334, 12]
    }
  ]
}
const setArea = (area) => {
  console.log(area)
}
describe('ImageMapper', () => {
  it('returns correct html and produces no errors', () => {
    const errorfn = jest.fn();
    const consoleError = console.error;
    console.error = errorfn;

    const div = document.createElement("div");
    ReactDOM.render(
      <ImageMapper
        width={600}
        imgWidth={700}
        clicked={setArea}
        coordMap={map}
        image={image}
        hasData={["1", "4"]}
        color="#fff"
        background="rgba(0,0,0,0.7)"
        hoverColor="rgba(255,255,255,1)"
        hoverBackground="rgba(0,0,0,0.6)" />,
      div
    )
    expect(errorfn).not.toHaveBeenCalled();
    console.error = consoleError;

    expect(div.innerHTML).toBe('<div style=\"position: relative;\" id=\"image-container\"><img src=\"test-file-stub\" usemap=\"#example\" style=\"z-index: 1; user-select: none;\" alt=\"\" class=\"img-fluid\"><map name=\"example\"><area alt=\"1\" shape=\"circle\" coords=\"54,55,12\"><span class=\"circle data\" id=\"1\" style=\"top: 55px; left: 54px; width: 24px; height: 24px; line-height: 24px; position: absolute; background: rgba(0, 0, 0, 0.7); color: rgb(255, 255, 255); transform: translate3d(-50%, -50%, 0); pointer-events: none; text-align: center;\">1</span><area alt=\"2\" shape=\"circle\" coords=\"52,118,12\"><span class=\"circle\" id=\"2\" style=\"top: 118px; left: 52px; width: 24px; height: 24px; line-height: 24px; position: absolute; background: rgba(0, 0, 0, 0.7); color: rgb(255, 255, 255); transform: translate3d(-50%, -50%, 0); pointer-events: none; text-align: center;\">2</span><area alt=\"3\" shape=\"circle\" coords=\"51,175,12\"><span class=\"circle\" id=\"3\" style=\"top: 175px; left: 51px; width: 24px; height: 24px; line-height: 24px; position: absolute; background: rgba(0, 0, 0, 0.7); color: rgb(255, 255, 255); transform: translate3d(-50%, -50%, 0); pointer-events: none; text-align: center;\">3</span><area alt=\"4\" shape=\"circle\" coords=\"50,244,12\"><span class=\"circle data\" id=\"4\" style=\"top: 244px; left: 50px; width: 24px; height: 24px; line-height: 24px; position: absolute; background: rgba(0, 0, 0, 0.7); color: rgb(255, 255, 255); transform: translate3d(-50%, -50%, 0); pointer-events: none; text-align: center;\">4</span><area alt=\"5\" shape=\"circle\" coords=\"51,334,12\"><span class=\"circle\" id=\"5\" style=\"top: 334px; left: 51px; width: 24px; height: 24px; line-height: 24px; position: absolute; background: rgba(0, 0, 0, 0.7); color: rgb(255, 255, 255); transform: translate3d(-50%, -50%, 0); pointer-events: none; text-align: center;\">5</span></map></div>')
  })
})