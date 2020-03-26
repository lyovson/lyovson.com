import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { css } from "@emotion/core";
import { ThemeContext } from "./Layout";

export const Main = ({ children, location }) => {
  const { state } = useContext(ThemeContext);
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  console.log(location.pathname);
  return (
    <AnimatePresence>
      <motion.main
        key={location.pathname}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
        css={css`
          grid-area: content;
          z-index: ${state.user ? " -1 " : "0"};
          transition: var(--color-transition);

          @media screen and (min-width: 700px) {
            max-width: ${state.user ? "100%" : "900px"};
            transition: 0.2s;
            opacity: 1;
            z-index: 0;
            margin: ${state.user
              ? state.user === "rafa"
                ? "0 auto 0 33%"
                : "0 33% 0 auto"
              : "0 auto"};
          }
        `}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};
