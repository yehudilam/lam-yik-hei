import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import styled from 'styled-components';
import MdxWrapper from "./MdxWrapper";
import SectionDivider from "./SectionDivider";
import TocIcon from '@mui/icons-material/Toc';
import Close from '@mui/icons-material/Close';
import {IconButton} from "@mui/material";

const ProjectBanner = styled.div`
  max-height: 400px;
  width: 100%;
  overflow: hidden;
`;

const DialogBanner = styled.img`
  object-fit: cover;
  max-height: 250px;
  width: 100%;
`;

const ProjectDialogContent = styled.section`
  padding: 0 60px;
  
  @media(max-width: 500px){
    padding: 0 40px;
  }
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
      <div className="pb-4 relative">
        <ProjectBanner className="mb-4">
          <DialogBanner src={project.image} alt={project.title} />
        </ProjectBanner>

        <ProjectDialogContent>
          <h1 className="text-4xl mb-4">{project.title}</h1>

          <div className="flex justify-start mb-4">
            <TocIcon />

            <div className="ml-1 mr-2">Stack:</div>

            <p>{project.stack.join(', ')}</p>
          </div>

          <SectionDivider />

          <MdxWrapper className="mb-4">
            <project.mdx />
          </MdxWrapper>
        </ProjectDialogContent>

        <div className="absolute right-0 top-0 pr-2 pt-2">
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </div>
      </div>
    </Dialog>
  );
};

export default HighlightedProjectDialog;
