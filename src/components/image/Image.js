import React from "react";
import PropsTypes from "prop-types";
import { Fade } from "react-reveal";

import "./image-style.css";

export default function Image(props) {
  return (
    <Fade>
        <img className="image" src={props.src} alt={props.alt} />
    </Fade>
  );
}



Image.propsTypes = {
    src: PropsTypes.string.isRequired,
    alt: PropsTypes.string.isRequired
}