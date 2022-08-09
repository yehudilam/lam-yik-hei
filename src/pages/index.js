import * as React from "react"
import styled from 'styled-components';
import img6484 from '../images/resized-IMG_6484.jpg';
import HighlightedProject from "../components/HighlightedProject";
import MoreAboutMe from '../mdx/moreAboutMe.mdx';
import {Divider} from "@mui/material";
import WorkingExperiences from "../components/WorkingExperiences";

// todo: smaller padding for mobile, larger for other devices
const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  
  & a {
    color: blue;
  }
  
  & ul {}
  & ul > li {}
`;

const BannerImage = styled.img`
  max-height: 400px;
  object-fit: cover;
  width: 100%;
`;

const IndexPage = () => {
  return (
    <main>
      <div>
        <BannerImage src={img6484} />
      </div>

      <MainContent>
        <h1 className="text-6xl mb-8">
          LAM Yik Hei
        </h1>

        <nav className="flex flex-start items-center mb-8 divide-x flex-wrap">
          <div className="px-2">📧 yehudi.lam@gmail.com</div>
          <div className="px-2">☎️ +852 54038617</div>
          <div className="px-2">
            <a href="https://www.linkedin.com/in/yik-hei-lam-a36921124/">
              Linkedin
            </a>
          </div>
          <div className="px-2"><a href="https://github.com/yehudilam/">GitHub</a></div>
          <div className="px-2"><a href="https://yehudi-lam.notion.site/Lam-Yik-Hei-5cf24c5d7d1543868531111810435ee2">Notion</a></div>
        </nav>

        <section className="mb-8">
          <h2 className="text-3xl mb-2">Experiences</h2>

          <WorkingExperiences />

        </section>

        <Divider className="mb-8" />

        <section className="mb-8">
          <h2 className="text-3xl mb-2">Highlighted projects</h2>

          <HighlightedProject />
        </section>

        <Divider className="mb-8" />

        <section className="mb-8">
          <h2 className="text-3xl mb-2">Location and Visa</h2>

          <p>
            I am currently in Hong Kong, and will relocate permanently to UK in September 2022.
          </p>

          <p>
            I have permission to work in both Hong Kong and UK (BNO Visa), so no visa sponsorship and relocation package will be required.
          </p>
        </section>

        <Divider className="mb-8" />

        <section className="mb-8">
          <h2 className="text-3xl mb-2">Skills</h2>
          <p>
            HTML, CSS, Javascript, Typescript, React, Vue, Nest, GraphQL, jQuery, Elasticsearch, PHP, Laravel, Kotlin, Flutter, SQL, Docker, MongoDB, Firebase
          </p>
          <p>
            Jira, Agile, Scrum, Git
          </p>
        </section>

        <Divider className="mb-8" />

        <section className="mb-8">
          <h2 className="text-3xl mb-2">Education</h2>

          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl">Chinese University of Hong Kong</h3>
              <p className="text-gray-600">2011 - 2014</p>
            </div>
            <div>
              <p>Bachelor of Science, Major in Physics</p>
            </div>
          </div>
        </section>

        <Divider className="mb-8" />

        <section className="mb-8">
          <h2 className="text-3xl">More about me</h2>

          <MoreAboutMe />
        </section>
      </MainContent>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
