import { motion } from "framer-motion";

interface ButtonProps {
  name: string;
  href: string;
  animation?: object;
  onHoverAnimation?: object;
}

const Button: React.FC<ButtonProps> = ({
  name,
  href: documentPath,
  animation,
  onHoverAnimation
}) => {
  return (
    <motion.div {...animation}>
      <motion.button
        type="submit"
        onClick={() => window.open(documentPath)}
        whileHover={{ ...onHoverAnimation }}
        className="button"
      >
        <div className="button-inside-container">
          <div className="button-text">{name}</div>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default Button;
