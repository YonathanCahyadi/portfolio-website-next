import { motion } from "framer-motion";
import Link from "next/link";

interface DownloadButtonProps {
  name: string;
  documentPath: string;
  animation?: object;
  onHoverAnimation?: object;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  name,
  documentPath,
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
        {name}
      </motion.button>
    </motion.div>
  );
};

export default DownloadButton;
