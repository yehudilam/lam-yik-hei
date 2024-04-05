import * as React from "react";
import cdcMdx from "../mdx/experiences/cdc.mdx";
import qbsMdx from "../mdx/experiences/qbs.mdx";
import ztoreMdx from "../mdx/experiences/ztore.mdx";
import trifectahMdx from "../mdx/experiences/trifectah.mdx";
import cuhkMdx from "../mdx/experiences/cuhk.mdx";
import edfMdx from "../mdx/experiences/edf.mdx";
import ExperienceItem from "./ExperienceItem";

const experiences = [
  {
    company: "EDF Energy",
    from: "Oct 2022",
    to: "Present",
    position: "Software Engineer",
    mdx: edfMdx,
  },
  {
    company: "Crypto.com NFT",
    from: "Feb 2022",
    to: "Jul 2022",
    position: "Full stack developer",
    mdx: cdcMdx,
  },
  {
    company: "QBS System",
    from: "Sep 2018",
    to: "Feb 2022",
    position: "Frontend developer",
    mdx: qbsMdx,
  },
  {
    company: "Ztore",
    from: "Jun 2018",
    to: "Sep 2018",
    position: "Developer",
    mdx: ztoreMdx,
  },
  {
    company: "Trifectah",
    from: "Jan 2017",
    to: "Jun 2018",
    position: "Developer",
    mdx: trifectahMdx,
  },
  {
    company: "Chinese University of Hong Kong",
    from: "Oct 2014",
    to: "Jan 2017",
    position: "Research Assistant",
    mdx: cuhkMdx,
  },
];

const WorkingExperiences = () => {
  return (
    <div>
      {experiences.map((exp) => (
        <ExperienceItem exp={exp} />
      ))}
    </div>
  );
};

export default WorkingExperiences;
