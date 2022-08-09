import * as React from 'react';
import styled from 'styled-components';

const HighlightedProjectCard = styled.div`
  width: 300px;
  height: 400px;
  margin-right: 12px;
  margin-bottom: 12px;
  border-radius: 12px;
  border: 1px solid grey;
`;

const HighlightedProject = () => {

  return (
    <div className="flex justify-start items-center flex-wrap">
      <HighlightedProjectCard>
        Acube
      </HighlightedProjectCard>
      <HighlightedProjectCard>
        Corporate Studio
      </HighlightedProjectCard>
      <HighlightedProjectCard>
        CLP Smart Energy Connect
      </HighlightedProjectCard>
    </div>
  )
};

export default HighlightedProject;
