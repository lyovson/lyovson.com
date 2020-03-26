import React from "react";
import { css } from "@emotion/core";
import { motion } from "framer-motion";
import { Link } from "gatsby";

export const StyledLink = props => {
  const MotionLink = motion.custom(Link);
  return (
    <MotionLink
      {...props}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        text-transform: uppercase;
        color: inherit;
        padding: 0.5rem;
        border-top: 0;
        border-left: 0;
        border-right: 0;

        border-bottom: 3px solid;
        transition: transform var(--color-transition);

        border-image: var(--border-gradient);
        height: 100%;

        /* &:hover {
          transform: translateY(2px);
          font-style: italic;
        }
        &:active {
          transform: translateY(5px);

          font-style: italic;
        } */
      `}
    >
      {props.children}
    </MotionLink>
  );
};
