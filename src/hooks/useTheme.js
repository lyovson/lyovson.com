import React from "react";
import { themeReducer, initialState } from "../utils/themeReducer";

export const useTheme = () => {
  const [state, dispatch] = React.useReducer(themeReducer, initialState);

  return [state, dispatch];
};
