import Content from "../../components/Content";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import { motion } from "framer-motion";
import { FadeInAndRight, FadeInAndUp, ScaleBigger } from "../../animations";
import Meta from "../../components/Meta";
import DownloadButton from "../../components/DownloadButton";


const About: React.FC = () => {
  return (
    <>
      <Head>
        <Meta
          title="Yonathan Cahyadi - About"
          description="This is an About page regarding Yonathan Cahyadi, here you can see the skills I have and download my resume."
          keywords={["Yonathan Cahyadi", "About", "Resume", "Skills"]}
        />

        <title>Yonathan Cahyadi - About</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navbar selected="About" />

      <Content>
        <div className="about-container">
          <div className="about-text-container">
            <motion.h1 {...FadeInAndRight(0, 2, 1)}>About Me</motion.h1>
            <motion.div>
              My name is Yonathan Cahyadi and I have a Bachelor of Information
              Technology (Computer Science) degree. I am a{" "}
              <b>Full Stack Web Developer</b>. For more Information you can
              download my Resume using the button below.
            </motion.div>
            <div className="download-resume-container">
              <DownloadButton onHoverAnimation={ScaleBigger()} animation={FadeInAndUp(0, 2, 1)} name="Resume" documentPath={"/resume.pdf"} />
            </div>
          </div>

          <div className="skills-container">
            <h1>Skills and Knowledge</h1>
            These are some of the skills and Knowledge that I have:
            <div className="skill-list-container">Test</div>
          </div>
        </div>
      </Content>
    </>
  );
};

export default About;
