type AccordionPropsType = {
    titleValue: string
    onClick: (collapsed: boolean) => void
    collapsed: boolean
}


export const UncontrolledAccordion = ({titleValue, collapsed, onClick}: AccordionPropsType) => {

    // let [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={titleValue} onClick={()=>{onClick((!collapsed))}}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = ({title, onClick} : AccordionTitlePropsType) => {

    return (
        <h3 onClick={onClick}>{title}</h3>
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

// export const UncontrolledAccordion = ({titleValue, collapsed, onClick}: AccordionPropsType) => {
//
//     // let [collapsed, setCollapsed] = useState(true)
//
//     return (
//         <div>
//             <AccordionTitle title={titleValue} onClick={()=>{onClick((!collapsed))}}/>
//             {!collapsed && <AccordionBody/>}
//         </div>
//     )
// }
//
// type AccordionTitlePropsType = {
//     title: string
//     onClick: () => void
// }
//
// const AccordionTitle = ({title, onClick} : AccordionTitlePropsType) => {
//
//     return (
//         <h3 onClick={onClick}>{title}</h3>
//     )
// }
//
// function AccordionBody() {
//
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

// export function UncontrolledAccordion(props: AccordionPropsType) {
//
//     let [collapsed, setCollapsed] = useState(true)
//
//     return (
//         <div>
//             <h2 onClick={() => {setCollapsed(!collapsed)}}>{props.titleValue}</h2>
//             {collapsed && <AccordionBody/>}
//         </div>
//     )
// }

// HomeWork №3
//
// export const UncontrolledAccordion = ({titleValue}: AccordionPropsType) => {
//
//     let [collapsed, setCollapsed] = useState(true)
//
//     return (
//         <div>
//             <AccordionTitle title={titleValue} onClick={() => {setCollapsed(!collapsed)}}/>
//             {/*<button onClick={() => {setCollapsed(!collapsed)}}>TOOGLE</button>*/}
//             {!collapsed && <AccordionBody/>}
//         </div>
//     )
// }
//
// type AccordionTitlePropsType = {
//     title: string
//     onClick: () => void
// }
//
// const AccordionTitle = ({title, onClick} : AccordionTitlePropsType) => {
//
//     return (
//         <h3 onClick={() => {onClick()}}>{title}</h3>
//     )
// }
//
// function AccordionBody() {
//
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