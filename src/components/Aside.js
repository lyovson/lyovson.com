import React, { useContext } from "react";
import { css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeContext } from "./Layout";
import Img from "gatsby-image";
import { authors } from "../utils/authors";
import { motion, AnimatePresence } from "framer-motion";
import { StyledLink } from "./styled/StyledLink";

import { Icon } from "@iconify/react";
import twitterIcon from "@iconify/icons-simple-icons/twitter";
import facebookIcon from "@iconify/icons-simple-icons/facebook";
import linkedinIcon from "@iconify/icons-simple-icons/linkedin";
import githubIcon from "@iconify/icons-simple-icons/github";
import mailDotRu from "@iconify/icons-simple-icons/mail-dot-ru";
import { StyledButton } from "./styled/StyledButton";

const socialIcons = {
  twitter: twitterIcon,
  facebook: facebookIcon,
  linkedin: linkedinIcon,
  email: mailDotRu,
  github: githubIcon
};

export const Aside = () => {
  const { state, dispatch } = useContext(ThemeContext);
  const user = authors[state.user];

  const data = useStaticQuery(graphql`
    query {
      rafaImage: file(relativePath: { eq: "rafa.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      jessImage: file(relativePath: { eq: "jess.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const variants = {
    visible: {
      opacity: 1,
      x: 0
    },
    hiddenRafa: {
      opacity: 0,
      x: -100
    },
    hiddenJess: {
      opacity: 0,
      x: 100
    }
  };

  return (
    <AnimatePresence>
      <motion.aside
        key={state.user}
        initial={state.user === "jess" ? "hiddenJess" : "hiddenRafa"}
        animate="visible"
        exit={state.user === "jess" ? "hiddenJess" : "hiddenRafa"}
        variants={variants}
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        onDrag={(e, i) => {
          console.log(i);
          if (Math.abs(i.offset.y) > 200 || Math.abs(i.offset.x) > 200) {
            dispatch("REMOVE_USER");
          }
        }}
        css={css`
          padding: 1rem;
          text-align: center;
          position: fixed;
          top: 100px;
          left: 10%;
          right: 10%;
          bottom: 100px;
          overflow: scroll;
          place-items: center;
          border: 5px solid;
          border-image: var(--border-gradient);
          color: ${state.theme === "dark"
            ? "var(--dark-text)"
            : "var(--light-text)"};
          background-color: ${state.theme === "dark"
            ? "var(--dark-background)"
            : "var(--light-background)"};

          display: grid;
          grid-template: auto 1fr 100px/ 1fr;
          z-index: 0;
          @media screen and (min-width: 700px) {
            top: calc(100px + 1rem);
            bottom: calc(100px + 1rem);
            min-width: auto;

            ${state.user === "rafa"
              ? `width: 30%;
                 left: 1rem;
              `
              : state.user === "jess"
              ? `width: 30%;
               left: calc(70% - 1rem);
              `
              : null};
          }
        `}
      >
        <header>
          <Img fluid={data[`${state.user}Image`].childImageSharp.fluid} />
          <h2
            css={css`
              text-transform: uppercase;
            `}
          >
            {user.fullName}
          </h2>
          <blockquote
            css={css`
              font-style: italic;
              font-size: 0.8rem;
            `}
          >
            "{user.status}"
          </blockquote>
        </header>

        <nav>
          <StyledLink
            animate={{ y: "2px" }}
            onClick={() => dispatch("REMOVE_USER")}
            to={`/${state.user}/`}
          >
            Home
          </StyledLink>
          <StyledLink
            animate={{ y: "2px" }}
            onClick={() => dispatch("REMOVE_USER")}
            to={`/${state.user}/bio`}
          >
            Bio
          </StyledLink>
          <StyledLink
            animate={{ y: "2px" }}
            onClick={() => dispatch("REMOVE_USER")}
            to={`/${state.user}/projects`}
          >
            Projects
          </StyledLink>
          <StyledLink
            animate={{ y: "2px" }}
            onClick={() => dispatch("REMOVE_USER")}
            to={`/${state.user}/portfolio`}
          >
            Portfolio
          </StyledLink>
          <StyledLink
            onClick={() => dispatch("REMOVE_USER")}
            to={`/${state.user}/contact`}
          >
            Contact
          </StyledLink>
        </nav>

        <footer
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 0;
            margin: 0;

            a {
              color: ${`var(--${state.user}-primary)`};
            }
          `}
        >
          {user.social.map(element => (
            <StyledButton key={element.name} user={state.user}>
              <a href={element.link} target="blank">
                <Icon icon={socialIcons[element.name]} />
              </a>
            </StyledButton>
          ))}
        </footer>
      </motion.aside>
    </AnimatePresence>
  );
};
