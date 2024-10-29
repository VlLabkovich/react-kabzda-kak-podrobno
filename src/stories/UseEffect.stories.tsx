import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {

    const[counter, setCounter] = useState(1)
    const[fake, setFake] = useState(0)

    console.log("SimpleExample");

    useEffect(() => {
        console.log("UseEffect every render")
        document.title = counter.toString()
    });
    useEffect(() => {
        console.log("UseEffect when first render")
        document.title = counter.toString()
    },[]);
    useEffect(() => {
        console.log("UseEffect only when first render and change counter")
        document.title = counter.toString()
    },[counter]);

    return <>
        Hello, {counter}

        <button onClick={()=> setCounter(state => state + 1)}>+</button>
        {fake}
        <button onClick={()=> setFake(state => state + 1)}>fake</button>
    </>
}