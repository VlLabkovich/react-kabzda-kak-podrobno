import React, {ChangeEvent, useRef, useState} from 'react'
import {action} from "@storybook/addon-actions";


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
        // 2 // дальше эту ссылку привязываем к инпуту, к элементу на которого хотим ссылаться
        <>
            <input ref={inputRef}/>
            <button onClick={save}>save
            </button>
            actual value: {value}
        </>
    )
}

export const ControlledInputWithFixedValue = () => <input defaultValue={'it-incubator.by'}/>

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)
    return (
        <>
            <input value={parentValue}
                   onChange={onChange}/>
            {parentValue}
        </>
    )

}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)
    return (
        <input type='checkbox' checked={parentValue} onChange={onChange}/>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moskow</option>
        <option value={'3'}>Kiev</option>
    </select>
}
