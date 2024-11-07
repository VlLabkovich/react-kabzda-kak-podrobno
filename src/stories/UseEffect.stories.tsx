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

// export const SetIntervalExample = () => {
//
//     const [counter, setCounter] = useState(1)
//     const [fake, setFake] = useState(0)
//
//     console.log("SetIntervalExample");
//
//     // useEffect(() => {
//     //     setTimeout(() => {
//     //         document.title = counter.toString()
//     //     }, 1000)
//     //     console.log("useEffect render")
//     // }, [counter]);
//
//     useEffect(() => {
//
//         console.log('setInterval')
//
//         setInterval(() => {
//             setCounter((state) => state + 1)
//         }, 1000)
//
//     }, []);
//
//     return <>
//         Counter: {counter}, Fake: {fake}
//         {/*<button onClick={() => setCounter(state => state + 1)}>+</button>*/}
//         {/*<button onClick={() => setFake(state => state + 1)}>fake</button>*/}
//     </>
// }

// export const ResetUseEffectExample = () => {
//
//     const [counter, setCounter] = useState(0)
//
//
//     console.log("component rendered");
//
//     // useEffect(() => {
//     //     setTimeout(() => {
//     //         document.title = counter.toString()
//     //     }, 1000)
//     //     console.log("useEffect render")
//     // }, [counter]);
//
//     useEffect(() => {
//         console.log('Effect occured')
//     }, []);
//
//     const increase = () => {
//         setCounter(state => state + 1)
//     }
//
//     return <>
//         Hello, counter: {counter}
//         <button onClick={increase}>Click</button>
//     </>
// }

// export const KeyTrackerExample = () => {
//
//     const [counter, setCounter] = useState(0)
//
//     const [text, setText] = useState('')
//
//     console.log("Component rendered");
//
//     useEffect(() => {
//         const handler = (e: KeyboardEvent) => {
//             setText(text + e.key)
//             console.log('UseEffect rendered')
//         }
//         window.addEventListener('keypress', handler)
//         return () => {
//             window.removeEventListener('keypress', handler);
//         }
//     }, [text]);
//
//     return (
//         <div>
//             Hello, counter: {text}
//             <hr/>
//             <button onClick={() => setCounter(counter => counter + 1)}>PUSH</button>
//             : {counter}
//         </div>
//     )
// }

export const SetTimeoutExample = () => {

    const [text, setText] = useState('')

    console.log("Component rendered " + text);

    useEffect(() => {

        console.log('setTimeout')

        const timeoutId = setTimeout(() => {
            setText('rendered 3 second')
        }, 3000)
        return ()=> clearTimeout(timeoutId)
    }, [text]);

    return <>
        Text: {text}
    </>
}