import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo',
}

export const DifficultCountingExample = () => {
    console.log("Example1")
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    // let resultA = 1;
    let resultB = 1;

    let resultA = useMemo(() => {
        console.log("resulta")
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a]);

    // let resultB = useMemo(() => {
    //     console.log("resultb")
    //     let tempResultB = 1;
    //     for (let i = 1; i <= b; i++) {
    //         let fake = 0
    //         while (fake < 1000000) {
    //             fake++;
    //             const fakeValue = Math.random()
    //         }
    //         tempResultB = tempResultB * i;
    //     }
    //     return tempResultB;
    // }, [b]);

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>

        <hr/>

        <div>
            Result for a: {resultA}
        </div>

        <div>
            Result for b: {resultB}
        </div>

    </>
}

const UsersSecret = (props: { users: string[] }) => {
    console.log('UserSecret')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {

    console.log("HelpsToReactMemo")

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimcho', 'Valera', 'Artem'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    const addUSer = () => {
        setUsers([...users, 'Vlad'])
    }

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        <button onClick={addUSer}>AddUser</button>
        <hr/>
        {counter}
        <hr/>
        <Users users={newArray}/>
    </>
}