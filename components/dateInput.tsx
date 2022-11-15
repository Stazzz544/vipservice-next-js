import { Dispatch, FC, SetStateAction, useState } from "react";
import s from "../styles/dateInput.module.scss";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from "dayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Calendar from '../assets/img/icons/calendar.svg';

type dropInputProps = {
  label: string;
  value: Dayjs | null;
  valueSetter: Dispatch<SetStateAction<Dayjs | null>>
};

const DateInput: FC<dropInputProps> = ({label, value, valueSetter}) => {


  const handleChange = (newValue: Dayjs | null) => {
    valueSetter(newValue);
  };

  return (
    <div  className={s.dateInputWrapper}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          components={{
            OpenPickerIcon: Calendar
          }}
          
          className={s.dateField}
          inputFormat="DD.MM.YY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField 
            sx={value ? {fill: '#5C87DB'} : {fill: '#5C5C5C'}}  
            {...params} inputProps={
            { 
              ...params.inputProps, 
              placeholder: "дд/мм/гг" 
            }
          }
          />}
        />
      </LocalizationProvider>
      <label className={s.helpText}>{label}</label>
    </div>
  );
};
export default DateInput;
