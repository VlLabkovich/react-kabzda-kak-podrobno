import React from "react";

export const clickBtn = (collapsed: boolean) => {
    if (collapsed) {
        return (
            console.log('hello')
        )
    } else {
        return (
            console.log('bye')
        )
    }
}