import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC, ReactNode } from "react";
import s from "../styles/mainContainer.module.scss";

type layoutProps = {
  children?: ReactNode;
};

const MainContainer: FC<layoutProps> = ({ children }) => {

  const router = useRouter();
  const lincActive = (path: string): CSSProperties => {
    return router.pathname == path ? {borderBottom: 'solid 1px #ffffff'} : {borderBottom: 'solid 0px #ffffff'}
  }

  const AVIA = '/avia'
  const AVIA_INFO = '/avia/info' 


  return (
    <>
      <Head>{/* some metatags */}</Head>
      <header className={s.header}>
        <nav className={s.navigation}>
          <Link style={lincActive(AVIA)} className={s.link} href={AVIA}>Поиск</Link>
          <Link style={lincActive(AVIA_INFO)} className={s.link} href={AVIA_INFO}>Карточка перелёта</Link>
        </nav>
      </header>
      <div className={s.container}>{children}</div>
    </>
  );
};

export default MainContainer;
