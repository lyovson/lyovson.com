import React, { useContext } from "react";
import { css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeContext } from "./Layout";
import Img from "gatsby-image";
import { authors } from "../utils/authors";

import { Icon } from "@iconify/react";
import twitterIcon from "@iconify/icons-simple-icons/twitter";
import facebookIcon from "@iconify/icons-simple-icons/facebook";
import linkedinIcon from "@iconify/icons-simple-icons/linkedin";
import mailDotRu from "@iconify/icons-simple-icons/mail-dot-ru";
import { StyledButton } from "./styled/StyledButton";

const socialIcons = {
  twitter: twitterIcon,
  facebook: facebookIcon,
  linkedin: linkedinIcon,
  email: mailDotRu
};

export const Aside = () => {
  const { state } = useContext(ThemeContext);
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

  if (!state.user) {
    return null;
  }

  return (
    <aside
      id="bio"
      css={css`
        padding: 1rem;

        grid-area: ${state.user === "rafa" ? "laside" : "raside"};
        position: fixed;
        top: 100px;
        left: 10%;
        right: 10%;
        bottom: 100px;
        overflow: scroll;
        place-items: center;
        border: 5px solid;
        border-image: linear-gradient(
            90deg,
            var(--rafa-primary) ${state.user === "rafa" ? "70%" : "0%"},
            var(--jess-primary) ${state.user === "jess" ? "70%" : "100%"}
          )
          1;
        color: ${state.theme === "dark"
          ? "var(--dark-text)"
          : "var(--light-text)"};
        background-color: ${state.theme === "dark"
          ? "var(--dark-background)"
          : "var(--light-background)"};

        transition: var(--color-transition);
        display: grid;
        grid-template: auto 1fr 100px/ 1fr;
        z-index: 0;
        @media screen and (min-width: 700px) {
          top: 79px;
          bottom: 80px;

          ${state.user === "rafa"
            ? `width: 30%;
                 left: 0;
              `
            : state.user === "jess"
            ? `width: 30%;
               left: calc(100vw - 30% );
              `
            : null};
        }
      `}
    >
      <header>
        <Img fluid={data[`${state.user}Image`].childImageSharp.fluid} />
        <h2
          css={css`
            text-transform: capitalize;
          `}
        >
          {user.fullName}
        </h2>

        <em>{user.status}</em>
      </header>

      {/* <main>{user.bio}</main> */}
      <nav>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
      </nav>

      <footer
        css={css`
          display: flex;
          justify-content: space-between;
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
    </aside>
  );
};
