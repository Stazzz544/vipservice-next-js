import { createContext } from "react";
import { ICities } from "../models/ICities";


type Context =  ICities[];

export const CitiesContext = createContext<Context>([]);