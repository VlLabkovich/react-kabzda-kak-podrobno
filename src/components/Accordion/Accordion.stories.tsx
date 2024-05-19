import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions'

import Accordion from "./Accordion";
import React, {useState} from "react";

export default {
    component: Accordion,
};

// export default meta;
// type Story = StoryObj<typeof Accordion>
//
// export const FirstStory: Story = {
//     args: {
//         titleValue: 'hello',
//         collapsed: true
//     }
// }

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Collapsed Accordion'}
                      collapsed={true}
                      onChange={()=> {console.log('on change')}}
    />
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={'Opened Accordion'}
                      collapsed={false}
                      onChange={() => {}}
    />
}

export const AccordionDemo = () => {

    const[collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={'Accordion'}
                      collapsed={collapsed}
                      onChange={() => {setCollapsed(!collapsed)}}
    />
}