/** @jsx jsx */

import React, { useContext } from "react";
import { css, jsx } from "@emotion/core";
import { StyledLink } from "../components/styled/StyledLink";
import { StyledButton } from "../components/styled/StyledButton";
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
            var(--rafa-primary) ${current.value.user === "rafa" ? "70%" : "0%"},
            var(--jess-primary)
              ${current.value.user === "jess" ? "70%" : "100%"}
          )
          1;

        display: grid;
        grid-area: footer;
        grid-template-columns: 1fr 2fr 2fr 1fr;
        grid-gap: 1rem;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        margin: 0;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
      `}
    >
      <StyledButton user="rafa" onClick={() => send("CHANGE_USER_RAFA")}>
        Rafa
      </StyledButton>
      <StyledLink
        css={css`
          grid-column: 2/4;
        `}
        to="#bio"
        onClick={() => send("CHANGE_USER_BOTH")}
      >
        <h1
          css={css`
            text-transform: uppercase;
            font-size: 1.2rem;
            font-weight: 900;
          `}
        >
          lyovson.com
        </h1>
      </StyledLink>
      <StyledButton user="jess" onClick={() => send("CHANGE_USER_JESS")}>
        Jess
      </StyledButton>
    </header>
  );
};
