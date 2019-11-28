import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          font-family: "Ubuntu", sans-serif;
          background: ${props => props.theme.bg};
          color: ${props => props.theme.text};
          font-size: 16px;
          margin: 0;
          letter-spacing: 1px;
        }
      `}
    />
  );
}
