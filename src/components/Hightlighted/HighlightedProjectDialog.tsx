import * as React from "react";
import styled from "styled-components";
import MdxWrapper from "../MdxWrapper";
import SectionDivider from "../SectionDivider";
import Dialog from "../Dialog";
import IconButton from "../IconButton";

const ProjectBanner = styled.div`
  max-height: 400px;
  width: 100%;
  overflow: hidden;
`;

const DialogBanner = styled.img`
  object-fit: cover;
  max-height: 350px;
  width: 100%;
`;

const ProjectDialogContent = styled.section`
  padding: 0 60px;

  @media (max-width: 500px) {
    padding: 0 40px;
  }
`;

export interface Project {
  title: string;
  image: string;
  stack: string[];
  mdx: any;
}

const HighlightedProjectDialog = ({
  project,
  onClose,
}: {
  project?: Project;
  onClose: () => void;
}) => {
  if (!project) {
    return <></>;
  }

  return (
    <Dialog open={!!project} onClose={onClose}>
      <div className="pb-4 relative bg-white max-w-3xl lg:mx-12 mx-2">
        <ProjectBanner className="mb-4">
          <DialogBanner src={project.image} alt={project.title} />
        </ProjectBanner>

        <ProjectDialogContent>
          <h1 className="text-4xl mb-4">{project.title}</h1>

          <div className="flex justify-start mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>


            <div className="ml-1 mr-2">Stack:</div>

            <p>{project.stack.join(", ")}</p>
          </div>

          <SectionDivider />

          <MdxWrapper className="mb-4">
            <project.mdx />
          </MdxWrapper>
        </ProjectDialogContent>

        <div className="absolute right-0 top-0 pr-2 pt-2">
          <IconButton onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
      </div>
    </Dialog>
  );
};

export default HighlightedProjectDialog;
