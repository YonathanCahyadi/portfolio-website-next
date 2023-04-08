import React from "react";

import logo from "./assets/yonathan-cahyadi-logo.svg";

import { Layout, Navigation, ContentDiv } from "./components/layout/Layout";

import HomePage from "./pages/home/Home";
import ProjectsPage from "./pages/projects/Projects";
import ContactPage from "./pages/contact/Contact";
import AboutPage from "./pages/about/About";


class App extends React.Component {
  render() {
    return (
      <Layout>
        <Navigation logo={logo} />
        <ContentDiv primary id="home">
          <HomePage />
        </ContentDiv>
        <ContentDiv id="about">
         <AboutPage />
        </ContentDiv>
        <ContentDiv primary id="projects">
          <ProjectsPage />
        </ContentDiv>
        <ContentDiv id="contact">
          <ContactPage />
        </ContentDiv>
      </Layout>
    );
  }
}

export default App;
