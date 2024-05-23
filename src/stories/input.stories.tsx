import React, {ChangeEvent, useRef, useState} from 'react'


export default {
    title: 'Button',
    // component: input,
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return (
        <><input onChange={onChange}/>{value}</>
    )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null) // 1 // с помощью ХУКА useRef создаём ссылку

    const save = () => {
        const element = inputRef.current as HTMLInputElement
        setValue(element.value)
    } // 3 // а затем мы можем обратиться в КОЛЛБЭКЕ save к ссылке, взять у неё значение на что она ссылается value
    // и отправить на сервер или в локальный стейт

    return (
        <>
            <input ref={inputRef}/> // 2 // дальше эту ссылку привязываем к инпуту, к элементу на которого хотим ссылаться
            <button onClick={save}>save
            </button>
            actual value: {value}
        </>
    )
}


export const ControlledInputWithFixedValue = () => <input defaultValue={'it-incubator.by'}/>
