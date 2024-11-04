import React, {useEffect, useState} from 'react';
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";


type PropsClockType = {
    mode: 'digital' | 'analog'
}


export const Clock: React.FC<PropsClockType> = ({mode}) => {

    const [date, setDate] = useState<Date>(new Date())

    // let hoursString = getString(date.getHours())
    // let minutesString = getString(date.getMinutes())
    // let secondsString = getString(date.getSeconds())

    let view;

    switch (mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalId)

    }, []);

    return (
        <>
            {view}
        </>
    );
};

export type PropsViewType = {
    date: Date
}

export default Clock;