import React, { useState } from 'react';
import addWeeks from 'date-fns/addWeeks';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import './DateRange.css';
import Box from '@mui/material/Box';

const DateRange = ({ dates, setDates }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
                disablePast
                value={dates}
                onChange={(newValue) => {
                    setDates(newValue);
                }}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        <TextField {...startProps} className="date-range" />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps} className="date-range" />
                    </React.Fragment>
                )}
            />
        </LocalizationProvider>
    );
};

export default DateRange;
