import {UncontrolledControlledRating} from "./UncontrolledControlledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: "Uncontrolled Rating",
    component: UncontrolledControlledRating,
}

const callback = action("rating changed inside component")

export const UncontrolledControlledRatingStar = () => <UncontrolledControlledRating defaultValue={0} onChange={callback}/>
export const UncontrolledControlledRatingStar1 = () => <UncontrolledControlledRating defaultValue={1} onChange={callback}/>
export const UncontrolledControlledRatingStar2 = () => <UncontrolledControlledRating defaultValue={2} onChange={callback}/>
export const UncontrolledControlledRatingStar3 = () => <UncontrolledControlledRating defaultValue={3} onChange={callback}/>
export const UncontrolledControlledRatingStar4 = () => <UncontrolledControlledRating defaultValue={4} onChange={callback}/>
export const UncontrolledControlledRatingStar5 = () => <UncontrolledControlledRating defaultValue={5} onChange={callback}/>
