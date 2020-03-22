import React, { useContext } from "react";
import { css } from "@emotion/core";
import { StyledLink } from "../components/styled/StyledLink";
import { StyledButton } from "../components/styled/StyledButton";
import { ThemeContext } from "./Layout";

export const Header = () => {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <header
      css={css`
        background-color: ${state.theme === "dark"
          ? "var(--dark-background)"
          : "var(--light-background)"};

        border-bottom: 5px solid;

        border-image: linear-gradient(
            90deg,
            var(--rafa-primary) ${state.user === "rafa" ? "70%" : "0%"},
            var(--jess-primary) ${state.user === "jess" ? "70%" : "100%"}
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
      <StyledButton user="rafa" onClick={() => dispatch("CHANGE_USER_RAFA")}>
        Rafa
      </StyledButton>

      <StyledLink
        css={css`
          grid-column: 2/4;
        `}
        to="/"
        onClick={() => dispatch("REMOVE_USER")}
      >
        <h1
          css={css`
            text-transform: uppercase;
            margin-bottom: 0;
            font-size: 1.5rem;
          `}
        >
          lyovson.com
        </h1>
      </StyledLink>
      <StyledButton
        to="/#bio"
        user="jess"
        onClick={() => dispatch("CHANGE_USER_JESS")}
      >
        Jess
      </StyledButton>
    </header>
  );
};
