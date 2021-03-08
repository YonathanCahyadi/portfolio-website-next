import { motion } from "framer-motion";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import Meta from "../../components/Meta";
import { FadeInAndUp, FadeInAndRight } from "../../animations";
import ProjectsData from "../../data/projects.json";
import Card from "../../components/Card";

const Projects: React.FC = () => {
  return (
    <div>
      <Head>
        <Meta
          title="Yonathan Cahyadi - Projects"
          description="This is a Projects page regarding Yonathan Cahyadi"
          keywords={["Yonathan Cahyadi", "Projects"]}
        />

        <title>Yonathan Cahyadi - Projects</title>
        <link rel="icon" href="../assets/favicon.ico" />
      </Head>
      <Navbar selected="Projects" />

      <Content>
        <div className="projects-container">
          <div className="projects-inner-container">
            <motion.h1 {...FadeInAndRight(0, 2, 1)}>Projects</motion.h1>

            <div className="projects-cards-container">
              {ProjectsData.map((project, idx) => (
                <motion.div key={`project-${idx}`} {...FadeInAndUp(0, 1, 1  + (idx / 5))}>
                  <Card
                    href={`/projects/${idx}`}
                    title={project.name}
                    description={project.description}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Projects;
