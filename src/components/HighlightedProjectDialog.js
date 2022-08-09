import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import styled from 'styled-components';

const ProjectBanner = styled.div`
  max-height: 400px;
  width: 100%;
  overflow: hidden;
`;

const HighlightedProjectDialog = ({ project, onClose }) => {
  if(!project){
    return <></>
  }

  return (
    <Dialog
      open={!!project}
      onClose={onClose}
    >
      <div className="px-4 pb-4">
        <ProjectBanner className="mb-4">
          <img src={project.image} alt={project.title} />
        </ProjectBanner>

        <h1 className="text-4xl mb-4">{project.title}</h1>

        <div className="flex justify-start mb-4">
          <div className="mr-2 font-bold">Stack:</div>

          <p>{project.stack.join(', ')}</p>
        </div>

        <div className="mb-4">
          <project.mdx />
        </div>
      </div>
    </Dialog>
  );
};

export default HighlightedProjectDialog;
