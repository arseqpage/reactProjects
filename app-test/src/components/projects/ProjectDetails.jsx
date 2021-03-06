import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project tile - {id}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, inventore! Officiis,
            velit.
          </p>
        </div>
        <div className="card-action gret-lighten-4 grey-text">
          <div>Posted by Arseq</div>
          <div>2nd Septemver, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
