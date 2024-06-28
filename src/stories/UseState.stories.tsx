import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

// export const Example = () => {
//     console.log("Example");
//
//
//    const generateData = () => {
//         console.log("generate data")
//         return 12345
//     }
//
//     const initValue = useMemo(generateData, [])
//
//     const [counter, setCounter] = useState(initValue);
//
//     return <>
//         <button onClick={()=>setCounter(state => state + 1)}>click</button>
//         <div>{counter}</div>
//     </>
// }

export const Example = () => {
    console.log("Example");


    const generateData = () => {
        console.log("generate data")
        return 1;
    }

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData);

    return <>
        <button onClick={()=>setCounter(state => state + 1)}>click</button>
        <div>{counter}</div>
    </>
}