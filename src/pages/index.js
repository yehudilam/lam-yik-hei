import * as React from "react"
import styled from 'styled-components';
import img6484 from '../images/resized-IMG_6484.jpg';
import lyhProfile from '../images/lam-yik-hei-profile.png';
import HighlightedProject from "../components/HighlightedProject";
import MoreAboutMe from '../mdx/moreAboutMe.mdx';
import WorkingExperiences from "../components/WorkingExperiences";
import Duration from "../components/Duration";
import MdxWrapper from "../components/MdxWrapper";
import SectionDivider from "../components/SectionDivider";

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  position: relative;
  
  & a {
    color: blue;
  }
  
  @media(max-width: 500px){
    padding: 24px 12px;
  }
`;

const BannerImage = styled.img`
  max-height: 400px;
  object-fit: cover;
  width: 100%;
`;

const ProfilePic = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 100%;
  position: absolute;
  top: -60px;
  left: 60px;
  
  @media (max-width: 500px){
    left: 30px;
  }
`;

const IndexPage = () => {
  return (
    <main>
      <div>
        <BannerImage src={img6484} />
      </div>

      <MainContent>
        <ProfilePic src={lyhProfile} />

        <h1 className="text-6xl mb-2 mt-16">
          LAM Yik Hei
        </h1>

        <nav className="flex flex-start items-center mb-8 divide-x flex-wrap">
          <div className="pr-2">📧 yehudi.lam@gmail.com</div>
          <div className="px-2">☎️ +852 5403 8617</div>
          <div className="px-2">
            <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/yik-hei-lam-a36921124/">
              Linkedin
            </a>
          </div>
          <div className="px-2">
            <a target='_blank' rel='noreferrer' href="https://github.com/yehudilam/">GitHub</a>
          </div>
          <div className="pl-2">
            <a target='_blank' rel='noreferrer' href="https://yehudi-lam.notion.site/Lam-Yik-Hei-5cf24c5d7d1543868531111810435ee2">Notion</a>
          </div>
        </nav>

        <section className="mb-8">
          <h2 className="text-3xl mb-2">Experiences</h2>

          <WorkingExperiences />

        </section>

        <SectionDivider />

        <section className="mb-8">
          <h2 className="text-3xl mb-2">Highlighted projects</h2>

          <HighlightedProject />
        </section>

        <SectionDivider />

        <section className="mb-8">
          <h2 className="text-3xl mb-2">Skills</h2>
          <p className="mb-1">
            HTML, CSS, Javascript, Typescript, React, Vue, Nest, GraphQL, jQuery, Elasticsearch, PHP, Laravel, Kotlin, Flutter, SQL, Docker, MongoDB, Firebase
          </p>
          <p>
            Jira, Agile, Scrum, Git
          </p>
        </section>

        <SectionDivider />

        <section className="mb-8">
          <h2 className="text-3xl mb-2">Education</h2>

          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold flex-1">Chinese University of Hong Kong</h3>
              <Duration from="2011" to="2014" />
            </div>
            <div>
              <p>Bachelor of Science, Major in Physics</p>
            </div>
          </div>
        </section>

        <SectionDivider />

        <section className="mb-8">
          <h2 className="text-3xl mb-2">More about me</h2>

          <MdxWrapper>
            <MoreAboutMe />
          </MdxWrapper>
        </section>
      </MainContent>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Lam Yik Hei</title>
