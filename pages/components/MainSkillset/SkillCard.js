import React from "react";
import Image from "next/image";

function SkillCard(props) {
  return (
    <div className="SkillCard">
      <div className="card-image">
        <Image src={props.icon} alt={props.title} />
      </div>
      <div className="card-title">{props.title}</div>
      <div className="card-text">{props.text}</div>
    </div>
  );
}

export default SkillCard;
