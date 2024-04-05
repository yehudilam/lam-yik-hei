import * as React from "react";
import styled from "styled-components";
import { Project } from "./HighlightedProjectDialog";

const HighlightedProjectCardWrapper = styled.a`
  width: 300px;
  height: 250px;
  margin-right: 12px;
  margin-bottom: 12px;
  border-radius: 1rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .project-title {
    color: black;
  }

  @media (min-width: 500px) and (max-width: 768px) {
    width: calc(50% - 16px);
    gap: 0;
    margin-right: 0;

    :nth-child(odd) {
      margin-right: 16px;
    }
  }

  @media (max-width: 500px) {
    width: 300px;
    margin: 0 auto 12px auto;

    :nth-child(odd) {
      margin-right: auto;
    }
  }
`;

const CardThumbnail = styled.img`
  object-fit: contain;
  height: 100%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

const HighlightedProjectCard = ({
  project,
  setSelected,
}: {
  project: Project;
  setSelected: (project: Project) => void;
}) => {
  return (
    <HighlightedProjectCardWrapper
      onClick={() => setSelected(project)}
      className="drop-shadow border border-grey-200 hover:shadow-lg hover:brightness-90"
    >
      <div className="flex-1 overflow-hidden">
        <CardThumbnail src={project.image} />
      </div>
      <div className="project-title leading-10">{project.title}</div>
    </HighlightedProjectCardWrapper>
  );
};

export default HighlightedProjectCard;
