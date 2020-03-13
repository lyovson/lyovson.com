/** @jsx jsx */

import React, { useContext } from "react";
import { css, jsx } from "@emotion/core";
import { StyledLink } from "../components/styled/StyledLink";
import { ThemeContext } from "./Layout";
export const Header = () => {
  const { current, send } = useContext(ThemeContext);

  return (
    <header
      css={css`
        background-color: ${current.matches("theme.dark")
          ? "var(--dark-background)"
          : "var(--light-background)"};

        border-bottom: 5px solid;

        border-image: linear-gradient(
            90deg,
            var(--rafa-accent) ${current.value.user === "rafa" ? "50%" : "0%"},
            var(--jess-accent) ${current.value.user === "jess" ? "50%" : "100%"}
          )
          1;

        display: grid;
        grid-area: footer;
        grid-template-columns: 1fr 2fr 2fr 1fr;
        grid-gap: 1rem;
        justify-content: space-between;
        align-items: center;

        margin: 0;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      `}
    >
      <StyledLink
        css={css`
          grid-column: ${current.value.user === "both"
            ? "1 / 2"
            : current.value.user === "rafa"
            ? "1 / 3"
            : "1 / 2"};
        `}
        to="/"
        onClick={() => send("CHANGE_USER_RAFA")}
      >
        Rafa
      </StyledLink>
      <StyledLink
        css={css`
          grid-column: ${current.value.user === "both"
            ? "2 / 4"
            : current.value.user === "rafa"
            ? "3 / 4"
            : "2 / 3"};
        `}
        to="/"
        onClick={() => send("CHANGE_USER_BOTH")}
      >
        <h1>lyovson.com</h1>
      </StyledLink>
      <StyledLink
        css={css`
          grid-column: ${current.value.user === "both"
            ? "4 / 5"
            : current.value.user === "rafa"
            ? "4 / 5"
            : "3 / 5"};
        `}
        to="/"
        onClick={() => send("CHANGE_USER_JESS")}
      >
        Jess
      </StyledLink>
    </header>
  );
};
