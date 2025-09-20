import * as React from "react";
import img6484 from "../images/resized-IMG_6484.jpg";
import lyhProfile from "../images/lam-yik-hei-profile.png";
import HighlightedProject from "../components/Hightlighted/HighlightedProject";
import MoreAboutMe from "../mdx/moreAboutMe.mdx";
import WorkingExperiences from "../components/WorkingExperiences";
import Duration from "../components/Duration";
import MdxWrapper from "../components/MdxWrapper";
import SectionDivider from "../components/SectionDivider";
import { BannerImage, MainContent, ProfilePic } from "../components/index.styled";

const IndexPage = () => {
  return (
    <main className="relative">
      <div>
        <BannerImage src={img6484} />
      </div>

      <MainContent>
        <ProfilePic src={lyhProfile} />

        <h1 className="text-6xl mb-2 mt-16">LAM, Yik Hei</h1>

        <div className="flex flex-start items-center mb-8 divide-x flex-wrap">
          <div className="pr-2">📧 yehudi.lam@gmail.com</div>
          <div className="px-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/yik-hei-lam-a36921124/"
            >
              Linkedin
            </a>
          </div>
          <div className="px-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/yehudilam/"
            >
              GitHub
            </a>
          </div>
          <div className="pl-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://yehudi-lam.notion.site/Lam-Yik-Hei-5cf24c5d7d1543868531111810435ee2"
            >
              Notion
            </a>
          </div>
        </div>

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
            HTML, CSS, Javascript, Typescript, React, Vue, NestJS, GraphQL,
            jQuery, Elasticsearch, PHP, Laravel, Kotlin, Flutter, SQL, Docker,
            MongoDB, Firebase
          </p>
          <p>Material-UI, Tailwind CSS, Next.js, Gatsby</p>
          <p>Jira, Agile, Scrum, Git, Postman, Figma</p>
        </section>

        <SectionDivider />

        <section className="mb-8">
          <h2 className="text-3xl mb-2">Education</h2>

          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold flex-1">
                Chinese University of Hong Kong
              </h3>
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

        <footer>
          <img
            src="https://github.com/yehudilam/lam-yik-hei/workflows/Deploy%20to%20Firebase%20Hosting%20on%20merge/badge.svg"
            alt="deployment status"
          />
        </footer>
      </MainContent>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Lam Yik Hei</title>;
