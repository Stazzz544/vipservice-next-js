import { FC } from "react";
import MainContainer from "../components/MainContainer";
import s from "../styles/avia.module.scss";
import SeachPanel from "../components/SeachPanel";
import { ICities } from "../models/ICities";
import { CitiesContext } from "../provider/citiesProvider";

type aviaProps = {
  citiesList: ICities[];
};

const Avia: FC<aviaProps> = ({ citiesList }) => {

  return (
    <MainContainer>
      <CitiesContext.Provider value={citiesList}>
        <SeachPanel />
      </CitiesContext.Provider>

      <div className={s.aboutApp}>
        <div className={s.discription}>
          Уважаемый пользователь! В данном демо-приложении доступны следующие
          функции:
        </div>
        <div className={s.discriptionItem}>
          - автокомплит при наборе города - попробуйте ввести, например букву {'"А"'}
        </div>
        <div className={s.discriptionItem}>
          - реализована эмуляция отправки данных на сервер, для этого заполните поля и нажмите кнопку {'"Найти билеты"'}
        </div>
        <div className={s.discriptionItem}>
          - также возможно перейти на вкладку {'"Карточка перелёта"'} и попереключаться между вариантами вылета в билете
        </div>
        <div className={s.discriptionItem}>
          - на странице поиска реализована адаптивно-резиновая вёрстка.
        </div>
      </div>

    </MainContainer>
  );
};

export async function getStaticProps() {
  const response = await fetch("http://cocodjambo.ru/api/cities.json");
  const data: { cityes: Array<ICities> } = await response.json();
  const citiesList = data.cityes;
  return {
    props: { citiesList },
  };
}

export default Avia;
