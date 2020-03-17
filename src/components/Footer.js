/** @jsx jsx */

import React, { useContext } from "react";
import { css, jsx } from "@emotion/core";
import { StyledButton } from "../components/styled/StyledButton";
import { ThemeContext } from "./Layout";

export const Footer = () => {
  const { current, send } = useContext(ThemeContext);

  return (
    <footer
      css={css`
        border-top: 5px solid;

        border-image: linear-gradient(
            90deg,
            var(--rafa-primary) ${current.value.user === "rafa" ? "70%" : "0%"},
            var(--jess-primary)
              ${current.value.user === "jess" ? "70%" : "100%"}
          )
          1;
        background-color: ${current.matches("theme.dark")
          ? "var(--dark-background)"
          : "var(--light-background)"};

        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        grid-area: header;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 1rem;
        z-index: 1;
      `}
    >
      <StyledButton>💛</StyledButton>
      <StyledButton>💙</StyledButton>
      <StyledButton onClick={() => send("CHANGE_THEME")}>
        {current.matches("theme.dark") ? "☀️" : "🌖"}
      </StyledButton>
      <StyledButton>💚</StyledButton>
      <StyledButton>💜</StyledButton>{" "}
    </footer>
  );
};
