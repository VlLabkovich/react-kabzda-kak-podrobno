import React from 'react';

type AccordionPropsType = {
    titleValue: string
    onChange: () => void
    collapsed: boolean
}

const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <h2>{props.titleValue}</h2>
            {props.collapsed && <AccordionBody/>}
        </div>
    )
}

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

export default Accordion