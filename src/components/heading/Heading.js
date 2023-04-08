import React from 'react';
import { Slide } from "react-reveal";
import "./heading-style.css";


export default function Heading(props) {
    return (
      <div className={props.className ?? "default-heading"}>

      <Slide left>
        <h2 className="page-heading">{props.children}</h2>
      </Slide>
      </div>
    );
  }