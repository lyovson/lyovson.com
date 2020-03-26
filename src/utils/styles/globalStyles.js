import { css } from "@emotion/core";
import { colors } from "./colors";
export const globalStyles = css`
  :root {
    color-scheme: dark light;
    --jess-primary: ${colors.jess.primary};
    --jess-secondary: ${colors.jess.dark};
    --rafa-primary: ${colors.rafa.primary};
    --rafa-secondary: ${colors.rafa.dark};
    --accent-color: ${colors.accent.primary};
    --light-text: ${colors.light.text};
    --light-background: ${colors.light.background};
    --dark-text: ${colors.dark.text};
    --dark-background: ${colors.dark.background};
    --color-transition: 0.3s;
  }

  a {
    display: inline-block;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 3px solid;
    border-image: var(--border-gradient);
    border-image: var(--border-gradient);
    padding-bottom: 0.2rem;
    transition: 0.2s;
    &:hover {
      font-style: italic;
      transform: scale(0.9);
    }
    &:active {
      transform: scale(0.8);
    }
  }
`;
