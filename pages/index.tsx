import Head from "next/head";
import { motion } from "framer-motion";
import Wave from "../components/Wave";
import ButtonLink from "../components/ButtonLink";
import { FadeIn, FadeInAndGoUp, GoUp, ScaleBigger } from "../animations";
import Meta from "../components/Meta";

interface PagesInterfaces {
  name: string;
  href: string;
}

export default function Home() {
  const pages: PagesInterfaces[] = [
    {
      name: "About",
      href: "/about"
    },
    {
      name: "Projects",
      href: "/projects"
    },
    {
      name: "Contacts",
      href: "/contact"
    }
  ];

  return (
    <div className="container">
      <Head>
        <Meta
          title="Yonathan Cahyadi"
          description="Hi, I'm a Full Stack Web Developer. This is my portfolio website, the place where I showcase some of my projects. Feel free to look around. :)"
          keywords={[
            "Yonathan",
            "Cahyadi",
            "Yonathan Cahyadi",
            "Portfolio",
            "Portfolio Website",
            "Website",
            "Yonathan Cahyadi Portfolio Website",
            "Yonathan Cahyadi Portfolio",
            "Yonathan Portfolio",
            "Cahyadi Portfolio"
          ]}
        />

        <title>Yonathan Cahyadi</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Wave top />

      <main className="main">
        <motion.div {...FadeIn(2)}>
          <motion.h1 className="welcome-msg" {...GoUp(100, 1, 1)}>
            Hi, Welcome
          </motion.h1>
        </motion.div>

        <div className="buttons-container">
          {pages.map((page, idx) => (
            <ButtonLink
              animation={FadeInAndGoUp(80, 1, 2 + idx / 3)}
              onHoverAnimation={ScaleBigger()}
              key={idx}
              href={page.href}
              name={page.name}
            />
          ))}
        </div>
      </main>

      <Wave />
    </div>
  );
}
