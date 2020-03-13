/** @jsx jsx */

import React, { useContext } from "react";
import { css, jsx } from "@emotion/core";
import { ThemeContext } from "./Layout";

export const Aside = () => {
  const { current, send } = useContext(ThemeContext);
  return (
    <aside
      css={css`
        display: ${current.value.user === "both" ? "none" : "grid"};
        grid-area: aside;
        padding: 2rem;
        background: linear-gradient(
          90deg,
          var(--rafa-accent) ${current.value.user === "rafa" ? "50%" : "0%"},
          var(--jess-accent) ${current.value.user === "jess" ? "50%" : "100%"}
        );
      `}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse commodi
      debitis tempore consequuntur minus quo aspernatur quam aliquid
      exercitationem? Amet accusamus, repellat voluptatibus quibusdam ea iste
      rerum in quidem, explicabo praesentium culpa expedita nulla consequuntur
      ratione fuga porro nobis vel quasi veritatis perferendis excepturi. Fugit
      ullam, similique consequuntur animi magni facere, dolorum labore corporis
      ad asperiores ipsum repellat repellendus ut? Porro, deleniti dolor, a
      dignissimos tempore dolore tenetur molestias quo unde sit voluptatum
      sapiente rem minus quia iste, incidunt totam iure debitis. Distinctio enim
      praesentium quidem quaerat, ab in incidunt mollitia facere temporibus
      magni molestias aspernatur nostrum ipsum. Consequuntur, architecto.
    </aside>
  );
};
