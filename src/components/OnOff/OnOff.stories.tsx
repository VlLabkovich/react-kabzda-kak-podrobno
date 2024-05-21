import { action } from '@storybook/addon-actions';

import React, {useState} from "react";
import {OnOffControlled} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOffControlled,
}

const callback = action('on or off clicked')

export const OnMode  = () => <OnOffControlled on={true} onChange={callback}/>
export const OffMode  = () => <OnOffControlled on={false} onChange={callback}/>

export const OnOffControl = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOffControlled on={value} onChange={setValue}/>
}