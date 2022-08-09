import * as React from "react";
import styled from 'styled-components';

const ExperienceWrapper = styled.div`
`;

const ExperienceItem = ({ exp }) => {
  return (
    <ExperienceWrapper className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-2xl">{exp.company}</h3>
        <p className="text-gray-600">{exp.from} - {exp.to}</p>
      </div>
      <div className="text-xl mb-1">
        {exp.position}
      </div>

      <exp.mdx />
    </ExperienceWrapper>
  );
};

export default ExperienceItem;
