import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { motion } from "framer-motion";

import Navbar from "../../components/Navbar";
import Meta from "../../components/Meta";
import Content from "../../components/Content";
import ProjectsData from "../../data/projects.json";

import Pointer from "../../components/Pointer";
import ButtonLink from "../../components/ButtonLink";
import Button from "../../components/Button";
import { FadeInAndRight, FadeInAndUp, FadeIn, ScaleBigger } from "../../animations";

interface IProject {
  name: string;
  date: string;
  techs: string[];
  description: string;
  github?: string;
  website?: string;
}

interface ProjectProps {
  data: IProject;
  lastPage: boolean;
  firstPage: boolean;
  currentPage: number;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ProjectsData.map((project, idx) => ({
      params: { id: idx.toString() }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<ProjectProps> = async ({
  params
}) => {
  return {
    props: {
      data: ProjectsData[parseInt(params.id as string)],
      firstPage: "0" === (params.id as string),
      lastPage: (ProjectsData.length - 1).toString() === (params.id as string),
      currentPage: parseInt(params.id as string)
    }
  };
};

const Project: React.FC<ProjectProps> = ({
  data,
  firstPage,
  lastPage,
  currentPage
}) => {
  return (
    <div>
      <Head>
        <Meta
          title={data.name}
          description={data.description}
          keywords={data.name.split(" ")}
        />
        <title>Yonathan Cahyadi - {data.name}</title>
        <link rel="icon" href="../assets/favicon.ico" />
      </Head>

      <Navbar selected="Projects" />
      <Content>
        <div className="project-container">
          <div className="project-inner-container">
            <div className="project-name">
              <motion.h1 {...FadeInAndRight(0, 2, 0)}>{data.name}</motion.h1>
            </div>
            <motion.div className="project-description" {...FadeIn(4)}>
              <div className="project-date">
                <sub>{data.date}</sub>
              </div>
              {data.description}
            </motion.div>
            <div className="project-techs">
              <motion.h3 {...FadeInAndRight(0, 2, 0)}>
                Used Technology
              </motion.h3>
              <ul className="project-techs-list">
                {data.techs.map((tech, idx) => (
                  <motion.li
                    className="project-tech"
                    key={`tech-${idx}`}
                    {...FadeInAndUp(0, 1, 1.5 + idx / 5)}
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="project-others">
              <motion.h3 {...FadeInAndRight(0, 2, 0)}>Other Links</motion.h3>
              <div className="project-other">
                {data.github && (
                  <Button name="Source Code" href={data.github} onHoverAnimation={ScaleBigger()} animation={FadeInAndUp(0, 1, 1)} />
                )}
                {data.website && <Button name="Website" href={data.website} onHoverAnimation={ScaleBigger()} animation={FadeInAndUp(0, 1, 1.3)}  />}
              </div>
            </div>
            <motion.div className="navigation-buttons" {...FadeInAndUp(0, 1, 2)}>
              {!firstPage && (
                <Pointer back href={`/projects/${currentPage - 1}`} />
              )}
              <ButtonLink name="ToC" href={"/projects"} />
              {!lastPage && <Pointer href={`/projects/${currentPage + 1}`} />}
            </motion.div>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Project;
