import React, {KeyboardEvent, useEffect, useState} from "react";
import '../../App.css';
import styles from "./Select.module.css"

type ItemsType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    items: ItemsType[]
    onChange: (value: any) => void
}

export const Select = ({value, items, onChange}: SelectPropsType) => {

    const [active, setActive] = useState(false)

    const [hoveredElementValue, setHoveredElementValue] = useState(value)

    const selectedItem = items.find((i) => i.value === value);

    const hoveredItem = items.find((i) => i.value === hoveredElementValue);

    const toggleItems = () => setActive(!active)

    // const handleBlur = () => {
    //     setTimeout(() => setActive(!active), 100);
    // }

    const onClickItem = (value: any) => {
        onChange(value);
        toggleItems()
    }

    useEffect(() => {
        setHoveredElementValue(value)
    }, [value]);

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? items[i + 1]
                        : items[i - 1]
                    if (pretendentElement) {
                        onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                onChange(items[0].value)
            }
        }

        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return (

        <>
            <div className={styles.select}
                 onKeyUp={onKeyUp}
                 tabIndex={0}
                // onBlur={handleBlur}
            >
                <span className={styles.main}
                      onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={styles.item + " " + (hoveredItem === i ? styles.selected : " ")}
                            key={i.value}
                            onClick={() => onClickItem(i.value)}>{i.title}</div>
                        )}
                    </div>
                }
            </div>
        </>
    );
};