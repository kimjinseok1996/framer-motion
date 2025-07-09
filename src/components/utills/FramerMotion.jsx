import { motion } from "framer-motion";
const FramerMotion = ({ children, as = "div", ...motionProps }) => {
  const MotionTag = motion[as] || motion.div;
  return <MotionTag {...motionProps}>{children}</MotionTag>;
};

export default FramerMotion;
