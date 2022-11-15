import { Dispatch, FC, SetStateAction } from 'react';
import s from "../../styles/ticket/ticketButtons.module.scss"

const activeStyles = {
    padding: '9px 18px 10px 15px',
    background: '#DDE3EE',
    border: 'none',
    color: '#232323',
    top: '10px'  
}

type TicketButtonsProps = {
    arrivalTime: string;
    departureTime: string;
    currentTicketSetter: Dispatch<SetStateAction<number | null>>;
    currentTicketId: number | null;
    btnId: number;
  }

const TicketButtons: FC<TicketButtonsProps> = ({arrivalTime, departureTime, currentTicketSetter, currentTicketId, btnId}) => {

  const clickHandler = () => {
    currentTicketSetter(btnId)
  }

  return (
    <>
        <button 
            onClick={clickHandler} 
            style={currentTicketId === btnId ? activeStyles : undefined} 
            className={s.ticketBtn}>  
            <div className={s.ticketBtnDepartureTime}>{departureTime}</div>
            <span>-</span>
            <div className={s.ticketBtnArrivalTime}>{arrivalTime}</div>
        </button>
    </>
  )
}
export default TicketButtons;