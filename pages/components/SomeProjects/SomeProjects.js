import React from "react";
import ProjectCard from './ProjectCard'
import project from '../../../public/project.png'


function SomeProjects() {
  
  const SomeProjectsData = [
    ["Strapi ecommerce site", project, ['ReactJs', 'ExpressJs', 'MongoDB '], "To upgrade Dlex, you’ll need to upgrade your entire Workspace, which means all members in your Workspace. The top level of organization is Workspace.",'https://www.figma.com/', 'https://www.figma.com/'],
    ["Strapi ecommerce site", project, ['ReactJs', 'ExpressJs', 'MongoDB '], "To upgrade Dlex, you’ll need to upgrade your entire Workspace, which means all members in your Workspace. The top level of organization is Workspace.",'https://www.figma.com/', 'https://www.figma.com/'],
    ["Strapi ecommerce site", project, ['ReactJs', 'ExpressJs', 'MongoDB '], "To upgrade Dlex, you’ll need to upgrade your entire Workspace, which means all members in your Workspace. The top level of organization is Workspace.",'https://www.figma.com/', 'https://www.figma.com/'],

   ];
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

        {SomeProjectsData.map(e=><ProjectCard title={e[0]} icon={e[0]} fList={e[1]} description={e[0]} demo={e[0]} source={e[0]}/>)}

      </div>
    </div>
  );
}

export default SomeProjects;
