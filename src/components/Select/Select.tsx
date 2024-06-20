import React, {KeyboardEvent, useEffect, useState} from "react";
import '../../App.css';


// type ItemsType = {
//     title: string
//     value: any
// }

type CountryType = {
    id: number,
    country: string,
    city: string,
    amount: number,
}

type SelectPropsType = {
    items: CountryType[]
}

export const Select = ({items}: SelectPropsType) => {
    console.log('render select')
    // const [active, setActive] = useState(false)

    // const [hoveredElementValue, setHoveredElementValue] = useState(value)

    // const selectedItem = items.find((i) => i.id === value);

    // const hoveredItem = items.find((i) => i.id === hoveredElementValue);

    // const toggleItems = () => setActive(!active)

    // const handleBlur = () => {
    //     setTimeout(() => setActive(!active), 100);
    // }

    // const onClickItem = (value: any) => {
    //
    //     toggleItems()
    // }

    // useEffect(() => {
    //     setHoveredElementValue(value)
    // }, [value]);

    // const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    //     if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    //         for (let i = 0; i < items.length; i++) {
    //             if (items[i].id === hoveredElementValue) {
    //                 const pretendentElement = e.key === "ArrowDown"
    //                     ? items[i + 1]
    //                     : items[i - 1]
    //                 if (pretendentElement) {
    //
    //                     return;
    //                 }
    //             }
    //         }
    //         if (!selectedItem) {
    //
    //         }
    //     }
    //
    //     if (e.key === "Enter" || e.key === "Escape") {
    //         setActive(false)
    //     }
    // }


    return (
        <>
            {/*<div className={styles.select}*/}
            {/*     // onKeyUp={onKeyUp}*/}
            {/*     tabIndex={0}*/}
            {/*    // onBlur={handleBlur}*/}
            {/*>*/}
            {/*    /!*<span className={styles.main}*!/*/}
            {/*    /!*      // onClick={toggleItems}>{selectedItem && selectedItem.city}</span>*!/*/}
            {/*    /!*{*!/*/}
            {/*        // active &&*/}
            {/*<div className={styles.items}>*/}
            {/*            /!*{items.map(i => <div*!/*/}
            {/*            /!*    // onMouseEnter={() => {*!/*/}
            {/*                    // setHoveredElementValue(i.id)*/}
            {/*                // }}*/}
            {/*                // className={styles.item + " " + (hoveredItem === i ? styles.selected : " ")}*/}
            {/*            //     key={i.id}*/}
            {/*            //     onClick={() => onClickItem(i.id)}>{i.city}</div>*/}
            {/*            // )}*/}
            {/*        // </div>*/}
            {/*    }*/}
            {/*</div>*/}

            {items.map(item => {

                <select key={item.id}>
                    <option>Country:{item.country}</option>
                    <option>City: {item.city}</option>
                    <option>Population: {item.amount}</option>
                </select>

            })}

        </>
    )
};