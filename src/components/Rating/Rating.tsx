import React, {useState} from "react"

type RatingPropsType = {
    // value: number
}

// export const ControlledRating = ({value} : RatingPropsType) => {
//
//     return (
//         <div>
//             <Star selected={value > 0}/>
//             <Star selected={value > 1}/>
//             <Star selected={value > 2}/>
//             <Star selected={value > 3}/>
//             <Star selected={value > 4}/>
//         </div>
//     )
// }

// export const UncontrolledRating = () => {
//
//     console.log("Rating rendering")
//
//     const[value, setValue] = useState(0)
//
//     return (
//         <div>
//             <Star selected={value > 0}/>
//             <button onClick={() => {setValue(1)}}>1</button>
//             <Star selected={value > 1}/>
//             <button onClick={() => {setValue(2)}}>2</button>
//             <Star selected={value > 2}/>
//             <button onClick={() => {setValue(3)}}>3</button>
//             <Star selected={value > 3}/>
//             <button onClick={() => {setValue(4)}}>4</button>
//             <Star selected={value > 4}/>
//             <button onClick={() => {setValue(5)}}>5</button>
//         </div>
//     )
// }
//
// type StarPropsType = {
//     selected: boolean
//
// }
//
// const Star = ({selected} : StarPropsType) => {
//     return (
//
//         selected?
//             <span> <strong>star</strong></span>
//             :
//             <span>star</span>
//
//     )
// }


// HomeWork №2
//

export const UncontrolledRating = () => {

    const[value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} onClick={()=>{setValue(1)}}/>
            <Star selected={value > 1} onClick={()=>{setValue(2)}}/>
            <Star selected={value > 2} onClick={()=>{setValue(3)}}/>
            <Star selected={value > 3} onClick={()=>{setValue(4)}}/>
            <Star selected={value > 4} onClick={()=>{setValue(5)}}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClick: () => void
}

const Star = ({selected, onClick} : StarPropsType) => {

    return (
        // HomeWork №1
        // Refactor
        <span onClick={() => {onClick()}}>
                { selected? <strong>star</strong>  : "star" }
            </span>

        // <span onClick={onClickHandler}> <strong>star</strong></span>
        // :
        // <span onClick={onClickHandler}>star</span>
    )
}

// by Dimych
// export const UncontrolledRating = () => {
//
//     const[value, setValue] = useState(0)
//
//     return (
//         <div>
//             <Star selected={value > 0} onClick={setValue} value={1}/>
//             <Star selected={value > 1} onClick={setValue} value={2}/>
//             <Star selected={value > 2} onClick={setValue} value={3}/>
//             <Star selected={value > 3} onClick={setValue} value={4}/>
//             <Star selected={value > 4} onClick={setValue} value={5}/>
//         </div>
//     )
// }
//
// type StarPropsType = {
//     selected: boolean
//     onClick: (value: 1 | 2 | 3 | 4 | 5) => void
//     value: 1 | 2 | 3 | 4 | 5
// }
//
// const Star = ({selected, onClick, value} : StarPropsType) => {
//
//     return (
//         // HomeWork №1.1
//             // Refactor
//             <span onClick={() => {onClick(value)}}>
//                 { selected? <strong>star</strong>  : "star" }
//             </span>
//
//             // <span onClick={onClickHandler}> <strong>star</strong></span>
//             // :
//             // <span onClick={onClickHandler}>star</span>
//     )
// }