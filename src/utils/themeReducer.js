export const themeReducer = (state, action) => {
  switch (action) {
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
    case "CHANGE_USER_RAFA":
      return { ...state, user: "rafa" };
    case "CHANGE_USER_JESS":
      return { ...state, user: "jess" };
    case "REMOVE_USER":
      return { ...state, user: undefined };
    default:
      throw new Error();
  }
};

const theme =
  typeof window !== `undefined`
    ? window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark"
    : "dark";

export const initialState = { theme: theme, user: undefined };
