import * as React from 'react';
import styled from "styled-components";

const HighlightedProjectCardWrapper = styled.a`
  width: 300px;
  height: 250px;
  margin-right: 12px;
  margin-bottom: 12px;
  border-radius: 12px;
  border: 1px solid grey;
`;

const CardThumbnail = styled.img`
  object-fit: contain;
  border-radius: 12px;
`;

const HighlightedProjectCard = ({
  project, setSelected
                                }) => {

  return (
    <HighlightedProjectCardWrapper onClick={() => setSelected(project)}>
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex-1 overflow-hidden">
          <CardThumbnail src={project.image} />
        </div>
        <div>{project.title}</div>
      </div>
    </HighlightedProjectCardWrapper>
  )
};

export default HighlightedProjectCard;
