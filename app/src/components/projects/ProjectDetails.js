import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>A random paragraph sits here.</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by @acfromspace</div>
          <div>2nd September, 3pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
