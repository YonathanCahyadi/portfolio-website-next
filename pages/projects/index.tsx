import Content from "../../components/Content";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import Meta from "../../components/Meta";

const About: React.FC = () => {
  return (
    <div>
      <Head>
        <Meta
          title="Yonathan Cahyadi - Projects"
          description="This is a Projects page regarding Yonathan Cahyadi"
          keywords={["Yonathan Cahyadi", "Projects"]}
        />

        <title>Yonathan Cahyadi - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar selected="Projects" />

      <Content>Projects</Content>
    </div>
  );
};

export default About;
