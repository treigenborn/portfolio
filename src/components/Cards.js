import React from "react";
import * as fiIcons from "react-icons/fi";
function Cards(props) {
  const Background = props.src;
  return (
    <>
      <li className="cards-item">
        <div className="cards-content">
          <div
            className="cards-front cards-item-img"
            style={{ backgroundImage: `url(${Background})` }}
          ></div>
          <div className="cards-back">
            <p className="cards-item-text">{props.text}</p>
            <h5 className="cards-tecnologies">{props.tecnologies}</h5>
            <button className="cards-btn">View Live</button>
            <a href={props.githubLink} target="blank">
              <fiIcons.FiGithub className="cards-github-link" />
            </a>
          </div>
        </div>
        <div className="cards-item-title">
          <h5>{props.title}</h5>
        </div>
      </li>
    </>
  );
}

export default Cards;
