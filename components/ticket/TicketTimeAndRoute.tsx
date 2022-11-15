import { FC } from 'react';
import Luggage from "../../assets/img/icons/luggage.svg"
import HandLuggage from "../../assets/img/icons/handLuggage.svg"
import s from "../../styles/ticket/ticketTimeAndRoute.module.scss"

type TicketTimeAndRouteProps = {
    departure: {
        time: string;
        date: string;
        city: string;
        airportName: string;
    }
    arrival: {
        time: string;
        date: string;
        city: string;
        airportName: string;
    }
    flyTime: string;
}

const TicketTimeAndRoute: FC<TicketTimeAndRouteProps> = ({departure, arrival, flyTime}) => {
  return (
    <>
        <div className={s.departure}>
            <div className={s.departureTime}>{departure.time}</div>
            <div className={s.departureCity}>{departure.city}</div>
            <div className={s.departureDate}>{departure.date}</div>
        </div>
        
        <div className={s.routeFlex}>
            <div className={s.airportFlex}>
                <div className={s.airportName}>{departure.airportName}</div>
                <div className={s.airportName}>{arrival.airportName}</div>
            </div>
            <div className={s.timeLineWraper}>
                <div className={s.timeLine} />
            </div>
            
            <div className={s.travelTime}>{flyTime}</div>
        </div>

        <div className={s.arrival}>
            <div className={s.arrivalTime}>{arrival.time}</div>
            <div className={s.arrivalCity}>{arrival.city}</div>
            <div className={s.arrivalDate}>{arrival.date}</div>
        </div>

        <div className={s.luggageWrapper}>
            <HandLuggage className={s.handLuggage}/>
            <Luggage className={s.luggage}/>
        </div>
    </>
  )
}
export default TicketTimeAndRoute;