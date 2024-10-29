import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

// export const SimpleExample = () => {
//
//     const [counter, setCounter] = useState(1)
//     const [fake, setFake] = useState(0)
//
//     console.log("SimpleExample");
//
//     useEffect(() => {
//         console.log("UseEffect every render")
//         document.title = counter.toString()
//     });
//     useEffect(() => {
//         console.log("UseEffect when first render")
//         document.title = counter.toString()
//     }, []);
//     useEffect(() => {
//         console.log("UseEffect only when first render and change counter")
//         document.title = counter.toString()
//     }, [counter]);
//
//     return <>
//         Hello, {counter}
//
//         <button onClick={() => setCounter(state => state + 1)}>+</button>
//         {fake}
//         <button onClick={() => setFake(state => state + 1)}>fake</button>
//     </>
// }

export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(0)

    console.log("SetTimeoutExample");

    // useEffect(() => {
    //     setTimeout(() => {
    //         document.title = counter.toString()
    //     }, 1000)
    //     console.log("useEffect render")
    // }, [counter]);

    useEffect(() => {

        console.log('setInterval')

        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)

    }, []);

    return <>
        Counter: {counter}, Fake: {fake}
        {/*<button onClick={() => setCounter(state => state + 1)}>+</button>*/}
        {/*<button onClick={() => setFake(state => state + 1)}>fake</button>*/}
    </>
}