import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useCallBack',
}

export const LikeUseCallBack = () => {

    console.log("LikeUseCallBack")

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['HTML', 'CSS', 'JS'])

    // const addBook = () => {
    //     setBooks([...books, 'REACT'])
    // }

    // const memoizedAddBook = useMemo(() => {
    //     return () => {
    //         setBooks([...books, 'REACT'])
    //     }
    // }, [books])

    const memoizedAddBook2 = useCallback(() => {
        setBooks([...books, 'REACT'])
    }, [books])

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        <hr/>
        {counter}
        <hr/>
        <Book addBook={memoizedAddBook2}/>
    </>
}

type BooksSecretPropsType = {
    addBook: () => void
}

const BookSecret = ({addBook}: BooksSecretPropsType) => {
    console.log('BookSecret')
    return <div>
        <button onClick={addBook}>AddBook</button>

    </div>
}

const Book = React.memo(BookSecret)