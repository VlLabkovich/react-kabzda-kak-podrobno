export type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const TOGGLE_COLLAPSED = "TOGGLE_COLLAPSED"
export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            // const stateCopy = {...state, collapsed: !state.collapsed};
            // stateCopy.collapsed = !state.collapsed
            return {...state, collapsed: !state.collapsed}
        default:
            throw new Error("BAD ACTION TYPE")
    }
}
