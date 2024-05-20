import React from 'react';

type AccordionPropsType = {
    titleValue: string
    onChange: () => void
    collapsed: boolean
}

export const Accordion = ({titleValue, collapsed, onChange}: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle title={titleValue} onChange={onChange}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

const AccordionTitle = ({title, onChange} : AccordionTitlePropsType) => {

    return (
        <h3 onClick={(e)=>onChange()}>{title}</h3>
    )
}

function AccordionBody() {

    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
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