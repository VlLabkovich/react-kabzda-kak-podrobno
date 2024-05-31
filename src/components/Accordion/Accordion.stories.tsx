import {action} from '@storybook/addon-actions'
import Accordion from "./Accordion";
import React, {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('Accordion mode change event')
const onClickCallback = action('Some item was clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'}
                                                  collapsed={true}
                                                  onChange={callback}
                                                  items={[]}
                                                  onClick={onClickCallback}/>


export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'}
                                                     collapsed={false}
                                                     onChange={callback}
                                                     items={[
                                                         {title:'Dimych', value: 1},
                                                         {title:'Valera', value: 2},
                                                         {title:'Artem', value: 3},
                                                         {title:'Viktor', value: 4}
                                                     ]}
                                                     onClick={onClickCallback}/>

export const AccordionDemo = () => {
    const [value, setValue] = useState(false)
    return <Accordion titleValue={'Users'}
                      collapsed={value}
                      onChange={() => {
                          setValue(!value)
                      }}
                      items={[
                          {title:'Dimych', value: 1},
                          {title:'Valera', value: 2},
                          {title:'Artem', value: 3},
                          {title:'Viktor', value: 4}
                      ]}
                      onClick={(value)=> {alert(`user with ID ${value} should be happy`)}}/>
}