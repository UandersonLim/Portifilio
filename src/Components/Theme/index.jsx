import { ThemeBackground } from "./style";
import { useState } from "react";

export const ChangeTheme = (props) => {

  const ThemeTotal = (parametro) => {

    if (props.theme === parametro) {
      return "square_light";
    } else {
      return "square";
    }
  };

  return (
    <>
      <ThemeBackground className={props.theme}>
        <div className={ThemeTotal("light")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </ThemeBackground>
    </>
  );
};
