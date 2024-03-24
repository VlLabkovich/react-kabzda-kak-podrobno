import React, {useState} from 'react';
import {Button} from "../Button";

type AccordionPropsType = {
    titleValue: string
}

export function Accordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true)

    const onHandlerClick = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            {/*<Button name={props.titleValue} onClick={onHandlerClick}/>*/}
            <h2 onClick={onHandlerClick}>{props.titleValue}</h2>

            {/*<AccordionTitle title={props.titleValue}/>*/}

            {collapsed && <AccordionBody/>}

        </div>
    )
}


// export function Accordion2(props: AccordionPropsType) {
//     console.log("Accordion rendering")
//     if (props.collapsed) {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//                 <AccordionBody/>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//             </div>
//         )
//     }
//
// }

// type AccordingPropsTitleType = {
//     title: string
// }
//
// function AccordionTitle(props: AccordingPropsTitleType) {
//     console.log("AccordionTitle rendering")
//     return (
//         <div>
//             <h3>{props.title}</h3>
//         </div>
//     )
// }

function AccordionBody() {
    console.log("AccordionBody rendering")
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