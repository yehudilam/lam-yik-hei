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
    description: [
      'An App for attendance tracking. Employees can use this app to clock in and out, using a combination GPS, Bluetooth beacons and taking photos of the premises. There are two apps in total for this product, one for employees and one for admin purposes.'
    ],
    mdx: acubeMdx,
  },
  {
    title: 'Corporate Studio',
    image: corporateStudio,
    stack: [
      'Typescript', 'Material-UI', 'React',
    ],
    description: [
      'Corporate studio is one of the products from Linklogis. It a dashboard to check up details of a company, say from difference news sources, court news, financial status. Team members mainly located in mainland China (devs) and Hong Kong (other members).',
    ],
    mdx: csMdx
  },
  {
    title: 'CLP Smart Energy Connect',
    image: clp,
    stack: [
      'Typescript', 'GraphQL', 'Tailwind CSS', 'Material-UI', 'React',
    ],
    description: [
      'A dashboard for displaying various sensors deployed in a indoor premises, which aims to allow the premises owners to understand how to optimize energy usage, while maintaining a high quality indoor environment.',
      'I was responsible for the frontend, which has a stack of Typescript, GraphQL, tailwind, material-UI. The difficult part was to verify, convert and calculate the time series data points, as well as plotting them without impacting the performance of the page.'
    ],
    mdx: clpMdx
  },
  {
    title: 'Carbon Coins',
    image: carbonCoins,
    stack: ['React', 'Ant Design', 'Java'],
    description: [
      'Carbon coins is a network of Reverse vending machines (RVM). It encourages people to recycle plastic bottles by providing incentives, carboncoins, which can be exchanged for discounts in different merchants.',
      'I was responsible for the admin panel managing the network of machines, as well as different configurations for the network, for example, the list of barcodes that will be accepted, merchant rewards settings.'
    ],
    mdx: co2CoinsMdx,
  },
  {
    title: 'Crypto.com/nft',
    image: cdcNft,
    stack: ['Typescript', 'NestJS', 'React'],
    description: [
      'I joined [crypto.com](http://crypto.com) with the NFT Team, which by then was still under rapid expansion and development. I was responsible for both frontend (client-facing UI and admin panel) and backend, as well as supporting the product operations.',
      'Team members located all across south-east Asia, though majority was located in HK.'
    ],
    mdx: cdcMdx,
  },
  {
    title: 'Alfred Shopify plug-in',
    image: alfred,
    stack: ['Vue.js', 'Express', 'Vuetify', 'Docker'],
    description: [
      'This was a shopify plugin for Alfred, a logistic service provider. Once installed, the plug-in allows customers to choose and collect what they have bought from a list of locations provided by Alfred. The module involves communicating between Shopify APIs and Alfred APIs, as well as a layout that matches the Shopify shipment and admin pages.',
    ],
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
