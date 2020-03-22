import React, { useReducer } from "react";
import { Global, css } from "@emotion/core";
import { Helmet } from "react-helmet";

import { Header } from "./Header";
import { Aside } from "./Aside";
import { Footer } from "./Footer";

import { themeReducer, initialState } from "../utils/themeReducer";
import { globalStyles, normalize } from "../utils/styles";

export const ThemeContext = React.createContext();

export default ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      <Helmet defer={false}>
        <title>Lyovson.com</title>
      </Helmet>

      <div
        className="app"
        css={css`
          display: grid;
          grid-gap: 1rem;
          grid-template-areas:
            "header header header"
            "laside content raside"
            "footer footer footer";
          grid-template-rows: 100px 1fr 100px;
          grid-template-columns: auto auto auto;
          align-items: center;
          margin: 1rem;
        `}
      >
        <Global
          styles={css`
            ${normalize};
            ${globalStyles};
            body {
              color: ${state.theme === "dark"
                ? "var(--dark-text)"
                : "var(--light-text)"};
              background-color: ${state.theme === "dark"
                ? "var(--dark-background)"
                : "var(--light-background)"};
              transition: var(--color-transition);
            }
          `}
        />

        <Header />

        <Aside
          css={css`
            grid-area: content;
          `}
        />

        <main
          css={css`
            grid-area: content;

            ${state.user === "rafa"
              ? "margin-left: 30%"
              : state.user === "jess"
              ? "margin-right: 30%"
              : "margin: 0"};
          `}
        >
          {children}
        </main>

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};
