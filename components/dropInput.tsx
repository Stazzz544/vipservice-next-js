import { Dispatch, FC, SetStateAction, useState } from "react";
import { ICities } from "../models/ICities";
import s from "../styles/dropInput.module.scss";

type dropInputProps = {
  placeholder: string;
  label: string;
  valueSetter: Dispatch<SetStateAction<string>>;
  value: string;
  dropList: ICities[];
};

const DropInput: FC<dropInputProps> = ({
  placeholder,
  label,
  valueSetter,
  value,
  dropList,
}) => {
  const [isInputFocus, setInputFocus] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    valueSetter(e.target.value);
  };

  const filtredDropList = (value: string, arr: ICities[]) => {
    const filtredArr: ICities[] = [];

    arr.forEach((item) => {
      if (item.city.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1)
        filtredArr.push(item);
    });
    return filtredArr;
  };

  return (
    <div className={s.inputWrapper}>
      <input
        onChange={handleChange}
        onMouseOver={() => setInputFocus(true)}
        onMouseOut={() => setInputFocus(false)}
        placeholder={placeholder}
        className={s.cityField}
        value={value}
        type="text"
      />
      <label className={s.helpText}>{label}</label>

      <ul
        style={isInputFocus ? { display: "block" } : undefined}
        className={s.dropList}
      >
        {value &&
          filtredDropList(value, dropList).map((item) => {
            return (
              <li
                onClick={() => {
                  valueSetter(item.city);
                }}
                className={s.dropItemWrapper}
                key={item.id}
              >
                <div className={s.dropItem}>{item.city}</div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default DropInput;
