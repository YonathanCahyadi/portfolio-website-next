import React from "react";
import Heading from "../../components/heading/Heading";
import Image from "../../components/image/Image";

import AboutImg from "../../assets/about.svg";
import ResumeImg from "../../assets/resume.svg";

import Resume from "../../assets/resume.pdf";

import "./about-style.css";
import { Fade } from "react-reveal";

export default function About(props) {
  const downloadResume = () => {
    window.open(Resume);
  };

  return (
    <div className="about-page">
      <Heading className="heading">About</Heading>

      <div className="about-img">
        <Image src={AboutImg} alt="about-img.svg" />
      </div>

      <Fade right>
        <div className="about-text">
          <p>
            My name is <b>Yonathan Cahyadi</b> and I have a{" "}
            <b>Bachelor of Information Technology (Computer Science)</b> degree.
            I am a <b>Full Stack Web Developer</b>. For more Information you can
            download my Resume using the button below.
          </p>
        </div>
      </Fade>

      <Fade bottom>
        <button className="download-resume" onClick={downloadResume}>
          <img
            src={ResumeImg}
            alt="resume.svg"
            className="resume-download-img"
          />
          <h4>Resume</h4>
        </button>
      </Fade>
    </div>
  );
}
