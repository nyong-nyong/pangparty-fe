import { motion } from "framer-motion";

export default function Recap1Page() {
  return (
    <motion.div
      className="pagetransition"
      animate={{ x: 100 }}
      transition={{ ease: "easeOut", duration: 2 }}
      initial={false}
    >
      <h2>Recap1Page</h2>
    </motion.div>
  );
}
