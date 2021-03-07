import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonLinkProps {
  name: string;
  href: string;
  animation?: object;
  onHoverAnimation?: object;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  name,
  href,
  animation,
  onHoverAnimation
}) => {
  return (
    <motion.div {...animation}>
      <Link href={href}>
        <motion.button whileHover={{ ...onHoverAnimation }} className="button">
          {name}
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default ButtonLink;
