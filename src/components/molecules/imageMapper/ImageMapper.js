import React, { Fragment, useState, useEffect, useCallback } from 'react';
import PropTypes from "prop-types";
import Image from 'react-bootstrap/Image';
import { debounce } from 'lodash';

import { getSections } from '../../../services/SectionService';
import './ImageMapper.css';
import usePopUp from '../../atoms/popUpAlert/UsePopUp';

/**
 * Displays a areas over an image. <br>
 */
const ImageMapper = React.memo((props) => {
  const popUp = usePopUp();
  const [width, setWidth] = useState();
  const [element, setElement] = useState();
  const [section, setSection] = useState({ "name": "anamese", "areas": [] });

  useEffect(() => {
    window.addEventListener('resize', debounce(function () {
      if (element) {
        setWidth(element.getBoundingClientRect().width)
      }
    }, 75));
    if (props.coordMap) {
      setSection(props.coordMap)
    } else {
      getSections().then(res => {
        setSection({
          "name": "anamese",
          "areas": res
        })
      }).catch(e => {
        popUp.showMessage(
          'Daten konnten nicht geladen werden',
          'ct-alert',
          'top-right'
        );
      })
    }
  }, [element, props.coordMap, popUp]);

  const styles = {
    area: {
      position: 'absolute',
      background: props.background,
      color: props.color,
      transform: 'translate3d(-50%, -50%, 0)',
      pointerEvents: 'none',
      textAlign: 'center'
    },
    img: { zIndex: 1, userSelect: "none" }
  };

  function click(e, area) {
    let elem = document.getElementById(e.target.getAttribute("alt"));
    removeClassFromSiblings(elem)
    elem.classList.add("active");
    props.clicked(area)
  }

  function hoverOn(e) {
    let elem = document.getElementById(e.target.getAttribute("alt"));
    elem.style.color = props.hoverColor;
    elem.style.backgroundColor = props.hoverBackground;
  }

  function hoverOff(e) {
    let elem = document.getElementById(e.target.getAttribute("alt"));
    elem.style.color = props.color;
    elem.style.backgroundColor = props.background;
  }

  function getDimensions(area) {
    if (area.shape === "circle") {
      return { width: area.scaledCoords[2] * 2 + "px", height: area.scaledCoords[2] * 2 + "px" }
    } else {
      return { width: area.scaledCoords[2] - area.scaledCoords[0] + "px", height: area.scaledCoords[3] - area.scaledCoords[1] + "px" }
    }
  }

  function removeClassFromSiblings(elem) {
    var sibling = elem.parentNode.firstChild;
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== elem) {
        sibling.classList.remove("active");
      }
      sibling = sibling.nextSibling
    }
  };

  function getCenter(area) {
    if (!area) return [0, 0];
    const scaledCoords = scaleCoords(area.coords);
    switch (area.shape) {
      case "circle":
        return [scaledCoords[0], scaledCoords[1]];
      case "poly":
      case "rect":
      default: {
        const n = scaledCoords.length / 2;
        const { y, x } = scaledCoords.reduce(
          ({ y, x }, val, idx) => {
            return !(idx % 2) ? { y, x: x + val / n } : { y: y + val / n, x };
          },
          { y: 0, x: 0 }
        );
        return [x, y];
      }
    }
  }

  function scaleCoords(coords) {
    const { imgWidth } = props;
    const scale = width && imgWidth && imgWidth > 0 ? width / imgWidth : 1;
    return coords.map(coord => coord * scale);
  }

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width);
      setElement(node);
    }
  }, []);

  const renderAreas = () => {
    return section.areas.map((a, index) => {
      const scaledCoords = scaleCoords(a.coords);
      const center = getCenter(a);
      a = { ...a, scaledCoords, center };
      const dim = getDimensions(a);
      return (
        <Fragment key={a.id || index}>
          <area
            alt={a.id}
            shape={a.shape}
            coords={scaledCoords.join(",")}
            onMouseEnter={(e) => hoverOn(e, a, index)}
            onMouseLeave={(e) => hoverOff(e, a, index)}
            onClick={(e) => click(e, a)}
          />
          <span className={(props.hasData.indexOf(a.id) > -1) ? a.shape + " data" : a.shape}
            id={a.id}
            style={{
              top: `${a.center[1]}px`,
              left: `${a.center[0]}px`,
              width: dim.width,
              height: dim.height,
              lineHeight: dim.height,
              ...styles.area
            }}>
            {a.id}
          </span>
        </Fragment>
      );
    })
  }

  return (
    <div style={{ position: 'relative' }} id="image-container" ref={measuredRef}>
      <Image src={props.image} useMap={`#${section.name}`} style={styles.img} alt="" fluid />
      {(typeof section !== 'undefined') ?
        <Fragment>

          <map name={section.name}>
            {renderAreas()}
          </map>
        </Fragment>
        : ''

      }
    </div>
  )
})
export default ImageMapper;

ImageMapper.defaultProps = {
  color: "#fff",
  background: "rgba(0,0,0,0.7)",
  hoverColor: "rgba(255,255,255,1)",
  hoverBackground: "rgba(0,0,0,0.6)",
};

ImageMapper.propTypes = {
  /**
   * With of the displayed image
   */
  width: PropTypes.number.isRequired,
  /**
   * Width of image where coordinates are correct for scaling
   */
  imgWidth: PropTypes.number,
  /**
   * Function where information about selected area is returned
   */
  clicked: PropTypes.func,
  /**
   * Image where coordinates are shown on
   */
  image: PropTypes.string.isRequired,
  /**
   * Color of the text
   */
  color: PropTypes.string,
  /**
   * Background-color of the area
   */
  background: PropTypes.string,
  /**
   * Hover color of the text
   */
  hoverColor: PropTypes.string,
  /**
   * Hover background-color of the area
   */
  hoverBackground: PropTypes.string,
};