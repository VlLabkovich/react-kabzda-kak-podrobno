import React from "react"

type RatingPropsType = {
    value: number
}

export function Rating(props: RatingPropsType) {

    console.log("Rating rendering")

    return (
        <div>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
            <Star selected={props.value > 5}/>
        </div>
    )
}

// export function UncontrolledRating() {
//
//     console.log("Rating rendering")
//
//     const[value, setValue] = useState(0)
//
//     const onHandlerClick = (valueId: number) => {
//         setValue(valueId)
//     }
//
//     return (
//         <div>
//             <Star selected={value > 0}/>
//             <button onClick={() => onHandlerClick(1)}>1</button>
//             <Star selected={value > 1}/>
//             <button onClick={() => onHandlerClick(2)}>2</button>
//             <Star selected={value > 2}/>
//             <button onClick={() => onHandlerClick(3)}>3</button>
//             <Star selected={value > 3}/>
//             <button onClick={() => onHandlerClick(4)}>4</button>
//             <Star selected={value > 4}/>
//             <button onClick={() => onHandlerClick(5)}>5</button>
//         </div>
//     )
// }

type StarPropsType = {
    selected: boolean
}

let Star = (props: StarPropsType) => {
    return (
        props.selected? <span><b>star</b></span> : <span>star</span>
    )
}


