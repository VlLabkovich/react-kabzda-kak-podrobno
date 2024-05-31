import React from 'react';


type ItemType = {
    title: string
    value: any
}
type AccordionPropsType = {
    titleValue: string
    onChange: () => void
    collapsed: boolean
    items: ItemType[]
    onClick: (value: any) => void
}

export const Accordion = ({titleValue, collapsed, onChange, items, onClick}: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={titleValue} onChange={onChange}/>
            {!collapsed && <AccordionBody items={items} onClick={onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

const AccordionTitle = ({title, onChange}: AccordionTitlePropsType) => {

    return (
        <h3 onClick={(e) => onChange()}>{title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody({items, onClick}: AccordionBodyPropsType) {

    return <ul>
        {items.map((i, index) => (<li onClick={()=>{onClick(i.value)}} key={index}>{i.title}</li>))}
    </ul>
}

// const Accordion = (props: AccordionPropsType) => {
//     return (
//         <div>
//             <h2>{props.titleValue}</h2>
//             {props.collapsed && <AccordionBody/>}
//         </div>
//     )
// }
//
// function AccordionBody() {
//     console.log("AccordionBody rendering")
//     return (
//         <div>
//             <ul>
//                 <li>1</li>
//                 <li>2</li>
//                 <li>3</li>
//             </ul>
//         </div>
//     )
// }

export default Accordion