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
    --color-transition: 0.5s;
  }
`;
