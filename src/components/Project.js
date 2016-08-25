import React from 'react';
import FeatureList from './FeatureList';
import '../styles/Project.scss';

const getImage = path => ({
  src: path
})

const Project = ({project}) => (
  <div className="project">
    <div className="top-line">
      <div className="title">{project.title}</div>
      <div className="links">
        {
          project.liveLink.length ?
            <a
              className="link live-link"
              target="_blank"
              href={project.liveLink}
            >
              Live
            </a> : ''
        }
          <a className="link fa fa-github fa-2x" target="_blank" href={project.githubLink}></a>
      </div>
    </div>
    <div className="project-content">
      <div className="content-left">
        <div className="tech-stack">
          <div className="title">Tech Stack</div>
          <div className="content">{project.techStack}</div>
        </div>
        <div className="features">
          <div className="title">Features</div>
          <div className="content">
           <FeatureList features={project.features} />
          </div>
        </div>
      </div>
      <div className="content-right">
        <img src={project.image} alt="img"/>
      </div>
    </div>
  </div>
);

export default Project;
