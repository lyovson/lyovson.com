import React from "react";
import { Global, css } from "@emotion/core";
import { Helmet } from "react-helmet";
import { useMachine } from "@xstate/react";

import { Header } from "./Header";
import { Footer } from "./Footer";

import { themeMachine } from "../machines/themeMachine";
import { authors } from "../utils/authors";
import { colors, normalize } from "../utils/styles";

console.log("Authors", authors);
export const ThemeContext = React.createContext();

export default ({ children }) => {
  const [current, send] = useMachine(themeMachine);
  return (
    <ThemeContext.Provider value={{ current: current, send: send }}>
      <Helmet defer={false}>
        <title>Lyovson.com</title>
      </Helmet>

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
            :root {
              --jess-primary: ${colors.jess.primary};
              --jess-secondary: ${colors.jess.dark};
              --rafa-primary: ${colors.rafa.primary};
              --rafa-secondary: ${colors.rafa.dark};
              --accent-color: ${colors.accent.primary};
              --light-text: ${colors.light.text};
              --light-background: ${colors.light.background};
              --dark-text: ${colors.dark.text};
              --dark-background: ${colors.dark.background};
              --color-transition: 0.2s;
            }
            body {
              color: ${current.matches("theme.dark")
                ? "var(--dark-text)"
                : "var(--light-text)"};
              background-color: ${current.matches("theme.dark")
                ? "var(--dark-background)"
                : "var(--light-background)"};
              transition: var(--color-transition);
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
