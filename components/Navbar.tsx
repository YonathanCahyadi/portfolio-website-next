import Link from "next/link";
import { motion } from "framer-motion";
import { GoDown, FadeInAndGoDown } from "../animations";

interface Page {
  name: string;
  href: string;
}

interface NavbarProps {
  selected: string;
}

const Navbar: React.FC<NavbarProps> = ({ selected }) => {
  const handleNavbarBurgerClick = () => {
    const navigationItemsNode = document.getElementsByClassName(
      "navigation-items"
    )[0] as HTMLElement;

    navigationItemsNode.style.display =
      navigationItemsNode.style.display === "none" ? "flex" : "none";
  };

  // const checkNavigationBar = () => {
  //   const navigationItemsNode = document.getElementsByClassName(
  //     "navigation-items"
  //   )[0] as HTMLElement;

  //   const burgerNode = document.getElementsByClassName(
  //     "burgers-container"
  //   )[0] as HTMLElement;

  //   // show the naviagtion items if the burger is not visible
  //   navigationItemsNode.style.display =
  //     burgerNode?.style.display === "none" &&
  //     navigationItemsNode?.style.display === "none"
  //       ? "none"
  //       : "flex";
  // };

  // useEffect(() => {
  //   addEventListener("resize", checkNavigationBar);

  //   return removeEventListener("resize", null);
  // }, []);

  const pages: Page[] = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "About",
      href: "/about"
    },
    {
      name: "Projects",
      href: "/projects"
    },
    {
      name: "Contact",
      href: "/contact"
    }
  ];

  return (
    <motion.div className="navigation-container" {...GoDown(1)}>
      <nav className="navigation-bar">
        <ul className="navigation-items">
          {pages.map((page, idx) => (
            <motion.li
              {...FadeInAndGoDown(1, 0.5 + idx / 5)}
              className={`navigation-item ${
                selected === page.name ? "active" : "inactive"
              }`}
              key={`${idx}-nav-item`}
            >
              <Link href={page.href}>{page.name}</Link>
            </motion.li>
          ))}
        </ul>

        <div className="burgers-container" onClick={handleNavbarBurgerClick}>
          <span className="burger"></span>
          <span className="burger"></span>
          <span className="burger"></span>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
