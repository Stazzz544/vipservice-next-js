import { FC } from 'react';
import s from "../../styles/ticket/ticketTypeAndLogo.module.scss"

type TicketTypeAndLogoProps = {
    typeOfTicket: string,
    companyLogo: string,
    companyName: string,
}

const TicketTypeAndLogo: FC<TicketTypeAndLogoProps> = ({typeOfTicket, companyLogo, companyName }) => {
  return (
    <>
        <div className={s.typeOfTicket}>{typeOfTicket}</div>
        <div className={s.companyLogo}>
            <img className={s.logoImg} src={companyLogo} alt="company logo" />
        </div>
        <div className={s.companyName}>{companyName}</div>
    </>
  )
}
export default TicketTypeAndLogo;