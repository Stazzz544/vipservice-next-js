import { FC, ReactNode } from "react";
import s from "../styles/loader.module.scss";
import Plane from '../assets/img/icons/plane.svg'

const spanGenerator = (num: number): ReactNode => {
    const arr = []
    for(let i = 1; i < num+1; i++) arr.push(i)
    return arr.map(i => <span key={i} style={{ "--i": i} as React.CSSProperties}></span>)
}

const Loader: FC = () => {
  return (
    <section className={s.mainWrapper}>
      <div className={s.loader}>
        {spanGenerator(20)}
        <div className={s.planeHolder}>
          <Plane className={s.plane}/>
        </div>
      </div>
    </section>
  );
};
export default Loader;
