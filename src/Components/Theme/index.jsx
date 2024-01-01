import { ThemeBackground } from "./style";

export const ChangeTheme = (props) => {
  return (
    <ThemeBackground className={props.theme}>
      <div className={props.theme === "light" ? "square_light" : "square"}>
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
  );
};
