import { FC, useContext, useEffect, useState } from "react";
import s from "../styles/seachPanel.module.scss";
import ConfirmButton from "./ConfirmButton";
import DateInput from "./dateInput";
import DropInput from "./dropInput";
import { Dayjs } from "dayjs";
import { CitiesContext } from "../provider/citiesProvider";
import Loader from "./Loader";

const SeachPanel: FC = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [returnDate, setReturnDare] = useState<Dayjs | null>(null);
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const citiesList = useContext(CitiesContext);

  const serverEmulation = () => {
    setError((prev) => (prev = ""));
    if (startDate && returnDate && from && to) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setError("На сервере проводятся технические работы, сервис в данный момент недоступен. Повторите попытку позже.");
      }, 2000);
    } else {
      setError("Заполнены не все поля, проверьте правильность заполнения и повторите попытку...");
    }
  };

  return (
    <>
      <div className={s.panelWrapper}>
        <div className={s.fieldsWrapper}>
          <div className={s.flexGroup}>
            <div className={s.flexItem}>
              <DropInput
                dropList={citiesList}
                placeholder={"Город вылета"}
                label={"Откуда"}
                valueSetter={setFrom}
                value={from}
              />
            </div>
            <div className={s.flexItem}>
              <DropInput
                dropList={citiesList}
                placeholder={"Город прилёта"}
                label={"Куда"}
                valueSetter={setTo}
                value={to}
              />
            </div>
          </div>

          <div className={s.flexGroup}>
            <div className={s.flexItem}>
              <DateInput
                label={"Туда"}
                value={startDate}
                valueSetter={setStartDate}
              />
            </div>
            <div className={s.flexItem}>
              <DateInput
                label={"Обратно"}
                value={returnDate}
                valueSetter={setReturnDare}
              />
            </div>

            <div className={s.dashLine} />
          </div>
        </div>

        <div className={s.buttonWrapper}>
          <ConfirmButton
            clickHandler={serverEmulation}
            btnText="Найти билеты"
          />
        </div>

        {isLoading && (
          <div className={s.loaderWrapper}>
            <Loader />
          </div>
        )}
      </div>
      {error && <div className={s.error}>{error}</div>}
    </>
  );
};

export default SeachPanel;
