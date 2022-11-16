import { FC, useEffect, useState } from "react";
import { ticketViewPrice } from "../../common/commonFunc";
import { ITicket } from "../../models/ITicket";
import s from "../../styles/ticket/ticket.module.scss";
import TicketButton from "./TicketButton";
import TicketTimeAndRoute from "./TicketTimeAndRoute";

import TicketTypeAndLogo from "./TicketTypeAndLogo";

type TicketProps = {
  tickets: ITicket[];
};

const Ticket: FC<TicketProps> = ({ tickets }) => {
  const [currentTicketId, setCurrentTicketId] = useState<number | null>(null);

  useEffect(() => {
    setCurrentTicketId(tickets[0].id);
  }, []);

  return (
    <>
      {tickets
        .filter((ticket) => ticket.id == currentTicketId)
        .map((ticket) => {
          return (
            <div key={ticket.id} className={s.ticketBody}>
              <div className={s.TicketleftSide}>
                <TicketTypeAndLogo
                  typeOfTicket={ticket.typeOfTicket}
                  companyLogo={ticket.companyLogo}
                  companyName={ticket.companyName}
                />
              </div>
              <div className={s.TicketCenterSide}>
                <div className={s.mainUpCenterFlex}>
                  <TicketTimeAndRoute
                    departure={ticket.departure}
                    arrival={ticket.arrival}
                    flyTime={ticket.flyTime}
                  />
                </div>
                <div className={s.mainBottomCenterFlex}>
                  {tickets.map((btnData) => {
                    return (
                      <TicketButton
                        key={btnData.id}
                        arrivalTime={btnData.arrival.time}
                        departureTime={btnData.departure.time}
                        currentTicketSetter={setCurrentTicketId}
                        currentTicketId={currentTicketId}
                        btnId={btnData.id}
                      />
                    );
                  })}
                </div>
              </div>

              <div className={s.TicketRightSide}>
                <div className={s.price}>
                  {ticketViewPrice(ticket.price, ticket.currency)}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default Ticket;
