import React, {useMemo, useState} from "react";
import {Select} from "../components/Select/Select";

export default {
    title: 'useMemo',
}

// export const DifficultCountingExample = () => {
//     console.log("Example1")
//     const [a, setA] = useState<number>(5)
//     const [b, setB] = useState<number>(5)
//
//     // let resultA = 1;
//     let resultB = 1;
//
//     let resultA = useMemo(() => {
//         console.log("resulta")
//         let tempResultA = 1;
//         for (let i = 1; i <= a; i++) {
//             let fake = 0
//             while (fake < 1000000) {
//                 fake++;
//                 const fakeValue = Math.random()
//             }
//             tempResultA = tempResultA * i;
//         }
//         return tempResultA;
//     }, [a]);
//
//     // let resultB = useMemo(() => {
//     //     console.log("resultb")
//     //     let tempResultB = 1;
//     //     for (let i = 1; i <= b; i++) {
//     //         let fake = 0
//     //         while (fake < 1000000) {
//     //             fake++;
//     //             const fakeValue = Math.random()
//     //         }
//     //         tempResultB = tempResultB * i;
//     //     }
//     //     return tempResultB;
//     // }, [b]);
//
//     for (let i = 1; i <= b; i++) {
//         resultB = resultB * i;
//     }
//
//     return <>
//         <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
//         <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
//
//         <hr/>
//
//         <div>
//             Result for a: {resultA}
//         </div>
//
//         <div>
//             Result for b: {resultB}
//         </div>
//
//     </>
// }

// const UsersSecret = (props: { users: string[] }) => {
//     console.log('UserSecret')
//     return <div>
//         {props.users.map((u, i) => <div key={i}>{u}</div>)}
//     </div>
// }
//
// const Users = React.memo(UsersSecret)
//
// export const HelpsToReactMemo = () => {
//
//     console.log("HelpsToReactMemo")
//
//     const [counter, setCounter] = useState(0)
//     const [users, setUsers] = useState(['Dimcho', 'Valera', 'Artem'])
//
//     const newArray = useMemo(() => {
//         return users.filter(u => u.toLowerCase().indexOf("a") > -1)
//     }, [users])
//
//     const addUSer = () => {
//         setUsers([...users, 'Vlad'])
//     }
//
//     return <>
//         <button onClick={() => setCounter(state => state + 1)}>+</button>
//         <button onClick={addUSer}>AddUser</button>
//         <hr/>
//         {counter}
//         <hr/>
//         <Users users={newArray}/>
//     </>
// }

// export const ExampleSelect1 = () => {
//
//     console.log("HelpsToReactMemo1")
//
// type CountryType = {
//     id: string,
//     country: string,
//     city: string,
//     amount: number,
// }
//
// const [arrayCountry, setArrayCountry] = useState<CountryType[]>([
//     {id: '1', country: 'Belarus', city: 'Minsk', amount: 1500000},
//     {id: '2', country: 'Belarus', city: 'Grodna', amount: 100000},
//     {id: '3', country: 'Ukraine', city: 'Kiev', amount: 2500000},
//     {id: '4', country: 'Ukraine', city: 'Odessa', amount: 120000},
//     {id: '5', country: 'Russia', city: 'Moscow', amount: 11000000},
//     {id: '6', country: 'Russia', city: 'Petesburg', amount: 8000000},
// ])
//
//     const newArrayCountry = useMemo(() => {
//         return arrayCountry.filter(u => u.city.toLowerCase().indexOf('m') > -1 )
//     }, [arrayCountry])
//
//
//
//     const [value, setValue] = useState(null)
//
//     return <>
//         <Select onChange={(value) => setValue(value)}
//                 value={value}
//                 items={newArrayCountry}
//         />
//     </>
// }

// export const ExampleSelect2 = () => {
//
//     console.log("HelpsToReactMemo2")
//
// type CountryType = {
//     id: string,
//     country: string,
//     city: string,
//     amount: number,
// }
//
// const [arrayCountry, setArrayCountry] = useState<CountryType[]>([
//     {id: '1', country: 'Belarus', city: 'Minsk', amount: 1500000},
//     {id: '2', country: 'Belarus', city: 'Grodna', amount: 100000},
//     {id: '3', country: 'Ukraine', city: 'Kiev', amount: 2500000},
//     {id: '4', country: 'Ukraine', city: 'Odessa', amount: 120000},
//     {id: '5', country: 'Russia', city: 'Moscow', amount: 11000000},
//     {id: '6', country: 'Russia', city: 'Petesburg', amount: 8000000},
// ])
//     const newArrayCountry = useMemo(() => {
//         return arrayCountry.filter(u => u.country === 'Ukraine' ? u.city : '')
//     }, [arrayCountry])
//
//     const [value, setValue] = useState(null)
//
//     return <>
//         <Select onChange={(value) => setValue(value)}
//                 value={value}
//                 items={newArrayCountry}
//         />
//     </>
// }

export const ExampleSelect3 = () => {

    console.log("HelpsToReactMemo3")

    type CountryType = {
        id: number,
        country: string,
        city: string,
        amount: number,
    }

    type SelectPropsType = {
        items: CountryType[]
    }

    const [arrayCountry, setArrayCountry] = useState<CountryType[]>([
        {id: 1, country: 'Belarus', city: 'Minsk', amount: 1500000},
        {id: 2, country: 'Belarus', city: 'Grodna', amount: 100000},
        {id: 3, country: 'Ukraine', city: 'Kiev', amount: 2500000},
        {id: 4, country: 'Ukraine', city: 'Odessa', amount: 120000},
        {id: 5, country: 'Russia', city: 'Moscow', amount: 11000000},
        {id: 6, country: 'Russia', city: 'Petesburg', amount: 8000000},
    ])

    console.log(arrayCountry)

    const newArrayCountry = useMemo(() => {
        return arrayCountry.filter(u => u.amount > 10000000)
    }, [arrayCountry])

    const [counter, setCounter] = useState(0)

    const addCountry = () => {
        const newCountry = {id: 7, country: 'France', city: 'Paris', amount: 120000000}
        setArrayCountry([...arrayCountry, newCountry])
    }


    const Selecto = ({items}: SelectPropsType) => {
        console.log('render selecto')
        return <>
            {items.map(item => (
                    <select key={item.id}>
                        <option>Country:{item.country}</option>
                        <option>City: {item.city}</option>
                        <option>Population: {item.amount}</option>
                    </select>
                )
            )
            }
        </>
    }

    const NewSelecto = React.memo(Selecto)

    // const NewMessagesCounter = (props:{count: number}) => {
    //     return <div>{props.count}</div>
    // }
    return <>

        <NewSelecto items={newArrayCountry}/>
        {/*<NewMessagesCounter count={counter}/>*/}
        <button onClick={addCountry}>AddCountry</button>
        <hr/>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        <br/>

    </>
}