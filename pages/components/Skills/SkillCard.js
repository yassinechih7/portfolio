import React from "react";
import Image from "next/image";


function SkillCard(props) {
  return (
    <div className="SkillCard">
      <div className="skill-card-icon">
        <Image src={props.icon} alt={props.title} />
      </div>
      <div className="skill-card-title">{props.title}</div>
      <div className="skill-card-text">{props.text}</div>
    </div>
  );
}

export default SkillCard;
