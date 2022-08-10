import * as React from 'react';
import HighlightedProjectCard from "./HighlightedProjectCard";
import acube from '../images/flex-system-alpha-connect.webp';
import corporateStudio from '../images/corperate-studio-1.png';
import clp from '../images/clp-sec-ssa.jpeg';
import carbonCoins from '../images/carbon-coins.webp';
import cdcNft from '../images/cdc-nft-home-page.png';
import alfred from '../images/alfred-shopify-plugin.png';
import telegram from '../images/telegram-capture-bot.png';
import roadhk from '../images/roadhk.png';
import acubeMdx from '../mdx/highlighted-projects/acube.mdx';
import csMdx from '../mdx/highlighted-projects/corporateStudio.mdx';
import clpMdx from '../mdx/highlighted-projects/clpSec.mdx';
import co2CoinsMdx from '../mdx/highlighted-projects/carbonCoins.mdx';
import cdcMdx from '../mdx/highlighted-projects/cdcNft.mdx';
import alfredMdx from '../mdx/highlighted-projects/alfred.mdx';
import telegramMdx from '../mdx/highlighted-projects/telegramBot.mdx';
import roadhkMdx from '../mdx/highlighted-projects/roadhk.mdx';
import {useState} from "react";
import HighlightedProjectDialog from "./HighlightedProjectDialog";
import styled from "styled-components";

const projects = [
  {
    title: 'Acube Alpha Connect',
    image: acube,
    stack: [
      'Kotlin'
    ],
    mdx: acubeMdx,
  },
  {
    title: 'Corporate Studio',
    image: corporateStudio,
    stack: [
      'Typescript', 'Material-UI', 'React',
    ],
    mdx: csMdx
  },
  {
    title: 'CLP Smart Energy Connect',
    image: clp,
    stack: [
      'Typescript', 'GraphQL', 'Tailwind CSS', 'Material-UI', 'React',
    ],
    mdx: clpMdx
  },
  {
    title: 'Carbon Coins',
    image: carbonCoins,
    stack: ['React', 'Ant Design', 'Java'],
    mdx: co2CoinsMdx,
  },
  {
    title: 'Crypto.com/nft',
    image: cdcNft,
    stack: ['Typescript', 'NestJS', 'React'],
    mdx: cdcMdx,
  },
  {
    title: 'Alfred Shopify plug-in',
    image: alfred,
    stack: ['Vue.js', 'Express', 'Vuetify', 'Docker'],
    mdx: alfredMdx,
  },
  {
    title: 'Telegram bot',
    image: telegram,
    stack: ['Javascript', 'Express', 'Telegram API'],
    mdx: telegramMdx,
  },
  {
    title: 'RoadHK',
    image: roadhk,
    stack: ['PHP', 'Laravel', 'Mysql', 'Vue'],
    mdx: roadhkMdx
  }
]

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  
  @media(max-width: 500px){
    display: block;
    margin: 0 auto;
  }
`;

const HighlightedProject = () => {
  const [selectedProject, setSelected] = useState(undefined);

  return (
    <>
      <ProjectsWrapper>
        {projects.map(project => (
          <HighlightedProjectCard
            project={project}
            setSelected={setSelected}
          />
        ))}
      </ProjectsWrapper>
      <HighlightedProjectDialog
        project={selectedProject}
        onClose={() => setSelected(undefined)}
      />
    </>
  )
};

export default HighlightedProject;
