import React from "react";
import { Fade } from "react-reveal";
import Image from "../../components/image/Image";

import "./home-style.css";

import portofolioImg from "../../assets/portfolio-website.svg";

export default function HomePage(props) {
  return (
    <div className="home-page">
      <Fade left cascade>
        <div className="welcome-msg">
          <div>
            <h1>Hi,</h1>
            <h1>Welcome</h1>
          </div>
        </div>
      </Fade>

      <div className="portofolio-img">
        <Image src={portofolioImg} alt="portfolio-website" />
      </div>
    </div>
  );
}
