import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import PropTypes from "prop-types";
import "./card-style.css";

import Arrow from "../../assets/arrow.svg";

function Card(props) {
  return (
    <div className={props.className ?? "default-card"}>
      <div className="card-container">
        <div className="card-date">{props.date ?? "date unspecified"}</div>

        <div className="card-name-heading">
          <h5>Project Name</h5>
        </div>
        <div className="card-name common">
          <h3>{props.name}</h3>
        </div>

        {props.techs ? (
          <div>
            <div className="card-name-heading">
              <h5>Technologies</h5>
            </div>
            <div className="card-tech common">
              <ul className="card-tech-items">
                {props.techs.map((t, i) => (
                  <li key={`${t.name}-${i}`} className="card-tech-item">
                    {t.img ? (
                      <img className="card-tech-icon" src={t.img} alt={t.name} />
                    ) : (
                      <div />
                    )}
                    <h5>{t.name}</h5>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div />
        )}

        <div className="card-name-heading">
          <h5>Description</h5>
        </div>
        <div className="card-description common">
          <p>{props.description}</p>
        </div>

        <div className="card-name-heading">
          <h5>Github Source Code</h5>
        </div>
        <div className="card-github common">
          <a
            className="card-github-link"
            href={props.github}
            alt={props.github}
          >
            {props.github}
          </a>
        </div>

        {props.website ? (
          <div>
            <div className="card-name-heading">
              <h5>Website</h5>
            </div>
            <div className="card-website common">
              <a
                className="card-website-link"
                href={props.website}
                alt={props.website}
              >
                {props.website}
              </a>
            </div>
          </div>
        ) : (
          <div />
        )}

        {props.samples ? (
          <div>
            <div className="card-name-heading">
              <h5>Samples</h5>
            </div>
            <div className="card-sample common">
              <ul className="card-sample-items">
                {props.samples.map((s, i) => (
                  <li key={`${s.name} - ${i}`} className="card-sample-item">
                    <img className="card-sample-img" src={s.img} alt={s.name} />
                    <h5>{s.name}</h5>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string,
  name: PropTypes.string,
  techs: PropTypes.array,
  description: PropTypes.string,
  github: PropTypes.string,
  website: PropTypes.string,
  samples: PropTypes.array
};

function Cards(props) {
  const [currentCardCount, setCurrentCardCount] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    props.datas.map((data) => {
      setCards((oldCard) => [
        ...oldCard,
        <Card
          date={data.date}
          name={data.name}
          techs={data.techs}
          description={data.description}
          github={data.github}
          website={data.website}
          samples={data.samples}
        />
      ]);
    });
  }, props.datas);

  const clickLeftArrow = () => {
    if (currentCardCount > 0) {
      setCurrentCardCount((prevCount) => prevCount - 1);
    }
  };

  const clickRightArrow = () => {
    if (currentCardCount < props.datas.length - 1) {
      setCurrentCardCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <Fade bottom>
      <div className="outer-cards-container">
        <img
          className="arrow-left arrow-common"
          src={Arrow}
          alt="left-arrow-img.svg"
          onClick={() => clickLeftArrow()}
        />

        <div className="cards-container">{cards[currentCardCount]}</div>

        <div className="card-count">
          {`${currentCardCount + 1} / ${props.datas.length}`}
        </div>

        <img
          className="arrow-right arrow-common"
          src={Arrow}
          alt="right-arrow-img.svg"
          onClick={() => clickRightArrow()}
        />
      </div>
    </Fade>
  );
}

Cards.propTypes = {
  datas: PropTypes.array
};

export { Card, Cards };
