import * as React from 'react';
import cdcMdx from '../mdx/experiences/cdc.mdx';
import qbsMdx from '../mdx/experiences/qbs.mdx';
import ztoreMdx from '../mdx/experiences/ztore.mdx';
import trifectahMdx from '../mdx/experiences/trifectah.mdx';
import cuhkMdx from '../mdx/experiences/cuhk.mdx';
import ExperienceItem from "./ExperienceItem";

const experiences = [
  {
    company: 'Crypto.com NFT',
    from: 'Feb 2022',
    to: 'Jul 2022',
    position: 'Full stack developer',
    description: [],
    mdx: cdcMdx
  },
  {
    company: 'QBS System',
    from: 'Sep 2018',
    to: 'Feb 2022',
    position: 'Frontend developer',
    description: [],
    mdx: qbsMdx
  },
  {
    company: 'Ztore',
    from: 'Jun 2018',
    to: 'Sep 2018',
    position: 'Developer',
    description: [],
    mdx: ztoreMdx
  },
  {
    company: 'Trifectah',
    from: 'Jan 2017',
    to: 'Jun 2018',
    position: 'Developer',
    description: [],
    mdx: trifectahMdx
  },
  {
    company: 'Chinese University of Hong Kong',
    from: 'Oct 2014',
    to: 'Jan 2017',
    position: 'Research Assistant',
    description: [],
    mdx: cuhkMdx
  },
];

const WorkingExperiences = () => {

  return (
    <div>
      {experiences.map(exp => <ExperienceItem exp={exp} />)}
    </div>
  )
};

export default WorkingExperiences;
