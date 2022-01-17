import React from "react";

function projectCard(props) {
  return (
    <div className="projectCard">
      <div className="cardTitle">{props.title}</div>

      <div className="content-wrapper">
        <div className="project-card-img">{props.icon}</div>
        <div className="futures-list">
          <ul>
            {props.fList.map((e, i)=> <li key={i}>e</li>)}
          </ul>
        </div>

        <div className="card-description">{props.description}</div>

        <div className="buttonWrapper">
            <div className="demo-button">
            <button><a href={props.demo}></a></button>
            </div>

            <div className="source-button">
            <button><a href={props.source}></a></button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default projectCard;
