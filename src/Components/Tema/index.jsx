import { TemaFundo } from "./style";

export const TrocaDeTema = (props) => {
  console.log(props.tema);

  // setThema(props.tema)

  return (
    <TemaFundo className={props.tema}>
      <div className={props.tema === "light" ? "square_light" : "square"}>
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
    </TemaFundo>
  );
};
