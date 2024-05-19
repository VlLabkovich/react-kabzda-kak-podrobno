
type TypeOnOff = {
    on: boolean
    onClick: (on: boolean) => void
}

export const OnOffControlled = ({on, onClick} : TypeOnOff) => {

    const blockStyle = {
        display: 'flex',
        gap: '5px',
        margin: '10px 0 0 10px'
    }

    const onStyle = {
        width: '50px',
        height: '40px',

        backgroundColor: on ? 'green' : 'white',
        // backgroundColor: props.on && 'green',

        border: '2px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const offStyle = {
        width: '50px',
        height: '40px',
        backgroundColor: on ? 'white' : 'red',
        border: '2px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '15px',
        backgroundColor: on ? 'green' : 'red',
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px'
    }

    return (
        <div style={blockStyle}>
            <div style={onStyle} onClick={ () => { onClick(true) } }>On</div>
            <div style={offStyle} onClick={ () => { onClick(false) } }>Off</div>

            <span style={indicatorStyle}></span>
        </div>
    )
}

// Backup version
//
// export const OnOffUncontrolled = (props: TypeOnOff) => {
//
//     const [onOff, setOnOff] = useState<boolean>(true)
//
//     const blockStyle = {
//         display: 'flex',
//         gap: '5px',
//         margin: '10px 0 0 10px'
//     }
//
//     const onStyle = {
//         width: '50px',
//         height: '40px',
//
//         backgroundColor: onOff ? 'green' : 'white',
//         // backgroundColor: props.on && 'green',
//
//         border: '2px solid black',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
//
//     const offStyle = {
//         width: '50px',
//         height: '40px',
//         backgroundColor: onOff ? 'white' : 'red',
//         border: '2px solid black',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
//
//     const indicatorStyle = {
//         width: '20px',
//         height: '20px',
//         borderRadius: '15px',
//         backgroundColor: onOff ? 'green' : 'red',
//         border: '1px solid black',
//         display: 'flex',
//         alignItems: 'center',
//         marginTop: '10px'
//     }
//
//     return (
//         <div style={blockStyle}>
//             <div style={onStyle} onClick={ () => setOnOff(true) }>On</div>
//             <div style={offStyle} onClick={ () => setOnOff(false) }>Off</div>
//
//             <span style={indicatorStyle}></span>
//         </div>
//     )
// }
