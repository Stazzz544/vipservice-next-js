import { FC } from "react";
import s from "../styles/confirmButton.module.scss";

type confirmButtonProps = {
  btnText: string;
  clickHandler: VoidFunction
};



const ConfirmButton: FC<confirmButtonProps> = ({ btnText, clickHandler }) => {
  return (
      <button onClick={() => {clickHandler()}} className={s.btn}>{btnText}</button>
  );
};
export default ConfirmButton;
