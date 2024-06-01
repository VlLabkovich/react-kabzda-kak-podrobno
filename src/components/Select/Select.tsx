import React from "react";
import '../../App.css';

type ItemsType = {
    title: string
    value: number
}

type SelectPropsType = {
    title: string
    data: string | undefined
    items: ItemsType[]
    onChange: (value: string) => void
    onClick: (data: string | undefined) => void
}

export const Select = ({title, data, items, onChange, onClick}: SelectPropsType) => {
    return (
        <div className="main-select">
            <h3>{title}</h3>
            <select className="select"
                    onChange={(e) => onChange(e.currentTarget.value)}>

                <option>None</option>
                {items.map((option, index) => {
                    return <option className="option-style"
                                   key={index}>
                        {option.title}
                    </option>
                })}
            </select>
            <h3 onClick={()=> {onClick(data)}}>You selected: {data} </h3>
        </div>
    );
};