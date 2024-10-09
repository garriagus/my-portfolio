"use client";

import {motion} from "framer-motion";

interface HomeProps {
    children: React.ReactNode;
}


export default function TransitionElement({ children }:HomeProps) {
  return (
    <motion.div
      initial={{opacity: 0, y: -100}}
      animate={{
        opacity: 1,
        y: 0,
	  transition:{duration:0.5}
      }}
    >
      <div>
       {children}
      </div>
    </motion.div>
  );
}