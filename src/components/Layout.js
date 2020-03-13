/** @jsx jsx */

import React from "react";
import { jsx, Global, css } from "@emotion/core";

import { Header } from "./Header";

import { Footer } from "./Footer";

import { useMachine } from "@xstate/react";

import { themeMachine } from "../machines/themeMachine";

export const ThemeContext = React.createContext();

export default ({ children }) => {
  const [current, send] = useMachine(themeMachine);
  return (
    <ThemeContext.Provider value={{ current: current, send: send }}>
      <div
        className="app"
        css={css`
          display: grid;
          position: relative;
          grid-template-areas:
            "header"
            "aside"
            "content"
            "footer";
          grid-template-rows: 100px auto 1fr 100px;
        `}
      >
        <Global
          styles={css`
            * {
              box-sizing: border-box;
            }
            :root {
              --jess-accent: #b71c1c;
              --rafa-accent: #0d47a1;
              --light-text: #121212;
              --light-background: #fafafa;
              --dark-text: #fafafa;
              --dark-background: #121212;
            }
            body {
              color: ${current.matches("theme.dark")
                ? "var(--dark-text)"
                : "var(--light-text)"};
              background-color: ${current.matches("theme.dark")
                ? "var(--dark-background)"
                : "var(--light-background)"};
            }
          `}
        />

        <Header />

        <div
          css={css`
            grid-area: content;
          `}
        >
          {children}
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};
