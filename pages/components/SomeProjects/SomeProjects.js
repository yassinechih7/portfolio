import React from "react";
import projectCard from 'projectCard'

function SomeProjects() {
  return (
    <div className="SomeProjects">
      <div className="firstSection">

        <div className="titlesWrapper">
        <div className="main-title">Some of my projects</div>
        <div className="seconde-title">Your Business</div>
        </div>
        
        <div className="description">
          In my way to learn i have done many projects for fun need and practice
          here some examples
        </div>

        <projectCard />
        <projectCard />
        <projectCard />
      </div>
    </div>
  );
}

export default SomeProjects;
