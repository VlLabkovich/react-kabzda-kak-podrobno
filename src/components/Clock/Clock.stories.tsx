import React from "react";
import Clock from "./Clock";

export default {
    title: 'useEffectClock',
    component: Clock,

};

export const ClockDigitalExamples = () => {

    return (
        <Clock mode={'digital'}/>
    );
};

export const ClockAnalogExamples = () => {

    return (
        <Clock mode={'analog'}/>
    );
};