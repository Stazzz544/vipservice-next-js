import { FC } from "react";
import { ticketViewPrice } from "../../common/commonFunc";
import { ITwoWayTicket } from "../../models/ITicket";
import s from "../../styles/ticket/twoWayTicket.module.scss";
import TicketTimeAndRoute from "./TicketTimeAndRoute";
import TicketTypeAndLogo from "./TicketTypeAndLogo";

type ITwoWayTicketProps = {
  tickets: ITwoWayTicket;
};

const TwoWayTicket: FC<ITwoWayTicketProps> = ({ tickets }) => {
  const ticket = tickets.ticket;
  const returnTicket = tickets.returnTicket;

  return (
    <>
      <div className={s.ticketsWrapper}>
        <div className={s.ticketsInfoWrapper}>
          <div className={s.ticketBody}>
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
            </div>
          </div>

          <div className={s.ticketBody}>
            <div className={s.TicketleftSide}>
              <TicketTypeAndLogo
                typeOfTicket={returnTicket.typeOfTicket}
                companyLogo={returnTicket.companyLogo}
                companyName={returnTicket.companyName}
              />
            </div>
            <div className={[s.TicketCenterSide, s.dash].join(" ")}>
              <div className={s.mainUpCenterFlex}>
                <TicketTimeAndRoute
                  departure={returnTicket.departure}
                  arrival={returnTicket.arrival}
                  flyTime={returnTicket.flyTime}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={s.TicketRightSide}>
          <div className={s.price}>
            {ticketViewPrice(
              ticket.price + returnTicket.price,
              ticket.currency
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default TwoWayTicket;
