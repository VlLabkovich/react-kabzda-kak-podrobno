import {useState} from "react";

type TypeOnOff = {
    on: boolean
}

export const OnOff = (props: TypeOnOff) => {

    // const [onOff, setOnOff] = useState<boolean>(props.on)

    // setOnOff(props.on)

    const blockStyle = {
        display: 'flex',
        gap: '5px',
        margin: '10px 0 0 10px'
    }

    const onStyle = {
        width: '50px',
        height: '40px',

        backgroundColor: props.on ? 'green' : 'white',
        // backgroundColor: props.on && 'green',

        border: '2px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const offStyle = {
        width: '50px',
        height: '40px',
        backgroundColor: props.on ? 'white' : 'red',
        border: '2px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '15px',
        backgroundColor: props.on ? 'green' : 'red',
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px'
    }

    return (
        <div style={blockStyle}>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>

            <span style={indicatorStyle}></span>
        </div>
    )
}
