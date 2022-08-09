import * as React from "react"
import styled from 'styled-components';
import img6484 from '../images/resized-IMG_6484.jpg';
import HighlightedProject from "../components/HighlightedProject";

const MainContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px;
`;

const BannerImage = styled.img`
  max-height: 400px;
  object-fit: cover;
  width: 100%;
`;

const ExperienceItem = styled.div`
  margin-bottom: 12px;
`;

const IndexPage = () => {
  return (
    <main>
      <div>
        <BannerImage src={img6484} />
      </div>

      <MainContent>
        <h1 className="text-6xl mb-4">
          LAM Yik Hei
        </h1>

        <nav className="flex flex-start items-center mb-4 divide-x">
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

        <div className="mb-4">
          <h2 className="text-3xl mb-4">Experiences</h2>

          <ExperienceItem>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl">Crypto.com NFT</h3>
              <p className="text-gray-600">Feb 2022 - Jul 2022</p>
            </div>
            <div className="text-xl">
              Full stack developer
            </div>

            <ul className="list-disc list-inside">
              <li>Full stack development from Client facing UI, Admin panel to all backend services and queues</li>
              <li>Mainly React.js for frontend and NestJS for backend</li>
              <li>Supporting product-ops</li>
            </ul>
          </ExperienceItem>

          <ExperienceItem>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl">QBS System</h3>
              <p className="text-gray-600">Sep 2018 - Feb 2022</p>
            </div>
            <div className="text-xl">
              Frontend developer
            </div>

            <ul className="list-disc list-inside">
              <li>CRM and CMS development with React.js, Vue.js, and frontend libraries such as tailwind, Metronic, Vuetify, Material-ui, Ant Design</li>
              <li>Full Stack website development with PHP Laravel</li>
              <li>BLE android mobile apps development with Kotlin</li>
              <li>E-commerce platform development</li>
            </ul>
          </ExperienceItem>

          <ExperienceItem>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl">Ztore</h3>
              <p className="text-gray-600">Sep 2018</p>
            </div>
            <div className="text-xl">
              Frontend developer
            </div>

            <ul className="list-disc list-inside">
            </ul>
          </ExperienceItem>

          <ExperienceItem>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl">Trifectah</h3>
              <p className="text-gray-600">Sep 2018</p>
            </div>
            <div className="text-xl">
              Frontend developer
            </div>

            <ul className="list-disc list-inside">
            </ul>
          </ExperienceItem>


        </div>

        <div className="mb-4">
          <h2 className="text-3xl">Highlighted projects</h2>

          <HighlightedProject />
        </div>

        <div className="mb-4">
          <h2 className="text-3xl">Skills</h2>
        </div>

        <div className="mb-4">
          <h2 className="text-3xl">Education</h2>
        </div>

        <div className="mb-4">
          <h2 className="text-3xl">More about me</h2>
        </div>
      </MainContent>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
