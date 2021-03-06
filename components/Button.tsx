import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  name: string;
  href: string;
  animation?: object;
  onHoverAnimation?: object;
}

const Button: React.FC<ButtonProps> = ({
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

export default Button;
