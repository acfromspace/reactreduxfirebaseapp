import React from "react";

// Involved with ProjectList.js

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by @acfromspace</p>
        <p className="grey-text">3rd September, 3pm</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
