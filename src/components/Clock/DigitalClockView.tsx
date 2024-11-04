import React from "react";
import {PropsViewType} from "./Clock";

export const DigitalClockView: React.FC<PropsViewType> = ({date}) => {

    const getStringTime = (dateString: number) => dateString < 10 ? '0' + dateString : dateString

    return <>
        <span>{getStringTime(date.getHours())}</span>
        :
        <span>{getStringTime(date.getMinutes())}</span>
        :
        <span>{getStringTime(date.getSeconds())}</span>
    </>
}