import React, {useState} from 'react';

export default {
    title: 'React.memo demo',
}

type MessageType = {
    count: number
}

const NewMessagesCounter = ({count}: MessageType) => {
    return <div>{count}</div>
}

type UsersType = {
    users: Array<string>,
}

const UsersSecret = ({users}: UsersType) => {
    console.log('Hello')
    return <div>
        {users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log("Example")
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState(['Dimcho', 'Valera', 'Artem'])

    const addUser = () => {
        const newUsers = [...users, 'Vlad' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        <button onClick={addUser}>AddUser</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}