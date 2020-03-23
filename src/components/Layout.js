import React, { useReducer } from "react";
import { Global, css } from "@emotion/core";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence>
        <motion.div
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
          `}
        >
          <Global
            styles={css`
              ${normalize};
              ${globalStyles};
              :root {
                --border-gradient: linear-gradient(
                    90deg,
                    var(--rafa-primary) ${state.user === "rafa" ? "70%" : "0%"},
                    var(--jess-primary)
                      ${state.user === "jess" ? "70%" : "100%"}
                  )
                  1;
              }
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
          {state.user ? (
            <Aside
              css={css`
                grid-area: content;
              `}
            />
          ) : null}
          }
          <motion.main
            initial={{ opacity: 0, marginLeft: "1rem", marginRight: "1rem" }}
            animate={
              state.user
                ? state.user === "rafa"
                  ? { opacity: 1, marginLeft: "31%", marginRight: "1rem" }
                  : { opacity: 1, marginLeft: "1rem", marginRight: "31%" }
                : { opacity: 1, marginLeft: "1rem", marginRight: "1rem" }
            }
            exit={{ opacity: 0, marginLeft: "1rem", marginRight: "1rem" }}
            css={css`
              grid-area: content;
            `}
          >
            {children}
          </motion.main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </ThemeContext.Provider>
  );
};
