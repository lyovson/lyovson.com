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
            var(--rafa-accent) ${current.value.user === "rafa" ? "50%" : "0%"},
            var(--jess-accent) ${current.value.user === "jess" ? "50%" : "100%"}
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
      `}
    >
      <StyledButton>💛</StyledButton>
      <StyledButton>💙</StyledButton>
      <StyledButton onClick={() => send("CHANGE_THEME")}>🖤</StyledButton>
      <StyledButton>💚</StyledButton>
      <StyledButton>💜</StyledButton>{" "}
    </footer>
  );
};
