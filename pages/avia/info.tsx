import { FC } from "react";
import MainContainer from "../../components/MainContainer";
import Ticket from "../../components/ticket/Ticket";
import TwoWayTicket from "../../components/ticket/TwoWayThicket";
import { ITicket, ITwoWayTicket } from "../../models/ITicket";
import s from '../../styles/info.module.scss'



type Info = {
    tickets: ITicket[];
    twoWayTickets: ITwoWayTicket;
}

const Info: FC<Info> = ({tickets, twoWayTickets}) => {

  return (
    <MainContainer>
      <Ticket tickets={tickets} />
      <div className={s.divider}></div>
       <TwoWayTicket tickets={twoWayTickets} />
    </MainContainer>
  );
};

export async function getStaticProps() {
    const responseTickets = await fetch("http://cocodjambo.ru/api/tickets.json");
    const responseTwoWayTickets = await fetch("http://cocodjambo.ru/api/twoWayTickets.json");
    const twoWayTickets: { twoWayTickets: ITwoWayTicket } = await responseTwoWayTickets.json();
    const tickets: { tickets: Array<ITicket> } = await responseTickets.json();
    return {
      props: { tickets, twoWayTickets },
    };
  }
  

export default Info;
