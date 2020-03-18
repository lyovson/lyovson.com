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
  const { current } = useContext(ThemeContext);
  const user = authors[current.value.user];

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

  if (current.value.user === "both") {
    return null;
  }

  return (
    <aside
      id="bio"
      css={css`
        display: grid;
        grid-area: aside;
        place-items: center;
        padding: 5px;
        border-radius: 10px;
        max-width: 90%;
        margin: auto;
        background: linear-gradient(
          90deg,
          var(--rafa-primary) ${current.value.user === "rafa" ? "70%" : "0%"},
          var(--jess-primary) ${current.value.user === "jess" ? "70%" : "100%"}
        );
      `}
    >
      <article
        css={css`
          color: ${current.matches("theme.dark")
            ? "var(--dark-text)"
            : "var(--light-text)"};
          background-color: ${current.matches("theme.dark")
            ? "var(--dark-background)"
            : "var(--light-background)"};
          padding: 1rem;
          border-radius: 10px;
          transition: var(--color-transition);
          display: grid;
          grid-template: auto 1fr 100px/ 1fr;
        `}
      >
        <header>
          <Img
            fluid={data[`${current.value.user}Image`].childImageSharp.fluid}
          />
          <h2
            css={css`
              text-transform: capitalize;
            `}
          >
            {user.fullName}
          </h2>

          <em>{user.status}</em>
        </header>

        <main>{user.bio}</main>

        <footer
          css={css`
            display: flex;
            justify-content: space-between;
            padding: 0;
            margin: 0;

            a {
              color: ${`var(--${current.value.user}-primary)`};
            }
          `}
        >
          {user.social.map(element => (
            <StyledButton key={element.name} user={current.value.user}>
              <a href={element.link} target="blank">
                <Icon icon={socialIcons[element.name]} />
              </a>
            </StyledButton>
          ))}
        </footer>
      </article>
    </aside>
  );
};
