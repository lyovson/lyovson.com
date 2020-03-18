import React, { useContext } from "react";
import { css } from "@emotion/core";
import { StyledButton } from "../components/styled/StyledButton";
import { ThemeContext } from "./Layout";

import { Icon } from "@iconify/react";
import twitterIcon from "@iconify/icons-simple-icons/twitter";
import facebookIcon from "@iconify/icons-simple-icons/facebook";
import linkedinIcon from "@iconify/icons-simple-icons/linkedin";
import mailDotRu from "@iconify/icons-simple-icons/mail-dot-ru";

export const Footer = () => {
  const { current, send } = useContext(ThemeContext);

  return (
    <footer
      css={css`
        border-top: 5px solid;
        padding: 0.5rem;
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
        z-index: 1;
      `}
    >
      <StyledButton user={current.value.user}>
        <a href="/ ">
          <Icon icon={twitterIcon} />
        </a>
      </StyledButton>
      <StyledButton user={current.value.user}>
        <a href="/ ">
          <Icon icon={facebookIcon} />
        </a>
      </StyledButton>
      <StyledButton
        css={css`
          font-size: 1.5rem;
        `}
        onClick={() => send("CHANGE_THEME")}
      >
        {current.matches("theme.dark") ? "☀️" : "🌖"}
      </StyledButton>
      <StyledButton user={current.value.user}>
        <a href="/ ">
          <Icon icon={linkedinIcon} />
        </a>
      </StyledButton>
      <StyledButton user={current.value.user}>
        <a href="/ ">
          <Icon icon={mailDotRu} />
        </a>
      </StyledButton>
    </footer>
  );
};
