import React from "react";
import styles from "./AnalogClock.module.css"
import {PropsViewType} from "./Clock";
import {DigitalClockView} from "./DigitalClockView";

export const AnalogClockView: React.FC<PropsViewType> = ({date}) => {

    // const hours = date.getHours()
    // const minutes = date.getMinutes()
    // const seconds = date.getSeconds()

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return (
        <>
            <div className={styles.clock}>
                <div className={styles['analog-clock']}>
                    <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle}/>
                    <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle}/>
                    <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle}/>
                </div>
            </div>
        </>
    )
}