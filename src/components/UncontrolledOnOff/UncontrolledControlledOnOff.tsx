import {useState} from "react";

type PropsType = {
    onChange: (onOffValue: boolean) => void;
    defaultOnOff?: boolean;
}

export const OnOffUncontrolledControlled = ({onChange, defaultOnOff}: PropsType) => {

    const [onOff, setOnOff] = useState<boolean>(defaultOnOff ? defaultOnOff : false)

    const blockStyle = {
        display: 'flex',
        gap: '5px',
        margin: '10px 0 0 10px'
    }

    const onStyle = {
        width: '50px',
        height: '40px',

        backgroundColor: onOff ? 'green' : 'white',
        // backgroundColor: props.on && 'green',

        border: '2px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const offStyle = {
        width: '50px',
        height: '40px',
        backgroundColor: onOff ? 'white' : 'red',
        border: '2px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '15px',
        backgroundColor: onOff ? 'green' : 'red',
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px'
    }

    const onClicked = () => {
        setOnOff(true)
        onChange(true)
    }
    const offClicked = () => {
        setOnOff(false)
        onChange(false)
    }

    return (
        <div style={blockStyle}>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>

            <span style={indicatorStyle}></span>
        </div>
    )
}