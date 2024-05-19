import { action } from '@storybook/addon-actions';

import React, {useState} from "react";
import {OnOffControlled} from "./OnOff";

export default {
    title: 'OnOff stories',
    component: OnOffControlled,
}

const callback = action('on or of clicked')

export const OnMode  = () => <OnOffControlled on={true} onClick={callback}/>
export const OffModel  = () => <OnOffControlled on={false} onClick={callback}/>

export const OnOffControl = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOffControlled on={value} onClick={setValue}/>
}