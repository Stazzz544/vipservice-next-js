export interface ITicket {
  id: number;
  companyName: string;
  companyLogo: string;
  typeOfTicket: string;
  luggage: boolean;
  handLuggage: boolean;
  price: number;
  currency: string;
  flyTime: string;
  departure: {
    time: string;
    date: string;
    city: string;
    airportName: string;
  };
  arrival: {
    time: string;
    date: string;
    city: string;
    airportName: string;
  };
}


export interface ITwoWayTicket {
    returnTicket: ITicket;
    ticket: ITicket;
}
  
  
  