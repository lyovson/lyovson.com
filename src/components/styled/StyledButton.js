import React from "react";
import { css } from "@emotion/core";
import { motion } from "framer-motion";

export const StyledButton = props => {
  return (
    <motion.button
      {...props}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      css={css`
        color: #704e7a;
        background: inherit;
        border: 0px;
        padding: 0.5rem;
        outline: none;
        height: 100%;
        opacity: 1;

        text-transform: uppercase;
        font-size: 0.9rem;
        font-weight: 900;
        transition: var(--color-transition);
        text-align: center;

        a {
          font-size: 1.5rem;
          color: ${`var(--${props.user}-primary)`};
          border-bottom: 0px;
          border-image: none;
        }
      `}
    >
      {props.children}
    </motion.button>
  );
};
