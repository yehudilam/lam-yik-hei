import * as React from "react";
import styled from 'styled-components';
import Duration from "./Duration";
import MdxWrapper from "./MdxWrapper";

const ExperienceWrapper = styled.div`
`;

const ExperienceItem = ({ exp }: {
  exp: {
    company: string;
    from: string;
    to: string;
    position: string;
    mdx: any;
  };
}) => {
  return (
    <ExperienceWrapper className="mb-3 hover:bg-gray-100 p-2">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-xl font-semibold">{exp.company}</h3>

        <Duration from={exp.from} to={exp.to} minWidth="155px" />
      </div>
      <div className="text-xl mb-1">
        {exp.position}
      </div>

      <MdxWrapper>
        <exp.mdx />
      </MdxWrapper>
    </ExperienceWrapper>
  );
};

export default ExperienceItem;
