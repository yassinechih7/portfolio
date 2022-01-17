import React from "react";
import SkillCard from "./SkillCard";
import Image from "next/image";

import { penwb, loopwb, lockwb, truckwb } from "./ImgesImport";

function Skills() {
  const SkillsData = [
    [
      penwb,
      "Python",
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
    ],
    [
      loopwb,
      "NodeJs",
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
    ],
    [
      truckwb,
      "ReactJS",
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
    ],
    [
      lockwb,
      "Linux",
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
    ],
    [
      penwb,
      "Html5 & CSS3",
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
    ],
    [
      loopwb,
      "SQL NoSQL Databases",
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
    ],
    [
      truckwb,
      "GIT & version controle",
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
    ],
    [
      lockwb,
      "Ethical hacking",
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
    ],
  ];
  return (
    <div className="Skills">
      <div className="min-title"></div>
      <div className="main-title"></div>

      {SkillsData.map((e) => (
        <SkillCard icon={e[0]} title={e[1]} text={e[2]} />
      ))}
    </div>
  );
}

console.log(process.env.PUBLIC_URL);

export default Skills;
