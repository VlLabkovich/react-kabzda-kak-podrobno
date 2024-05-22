import {OnOffUncontrolledControlled} from "./UncontrolledControlledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: "Uncontrolled OnOff",
    component: OnOffUncontrolledControlled,
}

const callback = action("on or off clicked")

export const ChangeUncontrolledOn = () => <OnOffUncontrolledControlled defaultOnOff={true} onChange={callback}/>
export const ChangeUncontrolledOff = () => <OnOffUncontrolledControlled defaultOnOff={false} onChange={callback}/>
export const DefaultInputValue = () => <input defaultValue={'yo'} />
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>

