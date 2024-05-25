import { motion } from "framer-motion";
const AnimateDiv = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateDiv;
