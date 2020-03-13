import { Machine } from "xstate";

export const themeMachine = Machine({
  id: "mode",
  type: "parallel",
  states: {
    theme: {
      initial: "dark",
      states: {
        dark: {
          on: {
            CHANGE_THEME: "light"
          }
        },
        light: {
          on: {
            CHANGE_THEME: "dark"
          }
        }
      }
    },
    user: {
      initial: "both",
      states: {
        both: {
          on: {
            CHANGE_USER_RAFA: "rafa",
            CHANGE_USER_JESS: "jess"
          }
        },
        rafa: {
          on: {
            CHANGE_USER_JESS: "jess",
            CHANGE_USER_BOTH: "both"
          }
        },
        jess: {
          on: {
            CHANGE_USER_RAFA: "rafa",
            CHANGE_USER_BOTH: "both"
          }
        }
      }
    }
  }
});
