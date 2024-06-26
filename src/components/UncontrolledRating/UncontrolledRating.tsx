import {useState} from "react";

export const UncontrolledRating = () => {

    const[value, setValue] = useState(3)

    return (
        <div>
            <Star selected={value > 0}/>
            <button onClick={() => {setValue(1)}}>1</button>
            <Star selected={value > 1}/>
            <button onClick={() => {setValue(2)}}>2</button>
            <Star selected={value > 2}/>
            <button onClick={() => {setValue(3)}}>3</button>
            <Star selected={value > 3}/>
            <button onClick={() => {setValue(4)}}>4</button>
            <Star selected={value > 4}/>
            <button onClick={() => {setValue(5)}}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean

}

const Star = ({selected} : StarPropsType) => {
    return (

        selected?
            <span> <strong>star</strong></span>
            :
            <span>star</span>

    )
}

// №3
// HomeWork №2
//
//
// export const UncontrolledRating = () => {
//
//     const[value, setValue] = useState(0)
//
//     return (
//         <div>
//             <Star selected={value > 0} onClick={()=>{setValue(1)}}/>
//             <Star selected={value > 1} onClick={()=>{setValue(2)}}/>
//             <Star selected={value > 2} onClick={()=>{setValue(3)}}/>
//             <Star selected={value > 3} onClick={()=>{setValue(4)}}/>
//             <Star selected={value > 4} onClick={()=>{setValue(5)}}/>
//         </div>
//     )
// }