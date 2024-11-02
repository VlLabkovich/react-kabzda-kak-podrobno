import React, {useEffect, useState} from 'react';

// export const Clock = () => {
//
//     const [date, setDate] = useState(new Date().toLocaleTimeString())
//
//     useEffect(() => {
//         let intervalId = setInterval(()=>{
//             setDate(new Date().toLocaleTimeString())
//         }, 1000)
//         return ()=> clearInterval(intervalId)
//     }, [])
//
//     return (
//         <>
//             <h3>Current Date:</h3>
//             {date}
//         </>
//     );
// };


const getStringTime = (dateString: number) => dateString < 10 ? '0' + dateString : dateString

export const Clock = () => {

    const [date, setDate] = useState<Date>(new Date())

    // let hoursString = getString(date.getHours())
    // let minutesString = getString(date.getMinutes())
    // let secondsString = getString(date.getSeconds())

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalId)

    }, []);

    return (
        <div>
            <span>{getStringTime(date.getHours())}</span>
            :
            <span>{getStringTime(date.getMinutes())}</span>
            :
            <span>{getStringTime(date.getSeconds())}</span>
        </div>
    );
};

export default Clock;