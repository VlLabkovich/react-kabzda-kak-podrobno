import {action} from '@storybook/addon-actions'
import {Select} from "./Select";
import {useState} from "react";

export default {
    title: 'Select',
    component: Select,
};

export const SelectChangeMode = () => {
    const [data, setData] = useState<string | undefined>(undefined);

    return <Select title={'HTML select tag in React js'}
                   data={data}
                   items={[
                       {title: "HTML", value: 1},
                       {title: "CSS", value: 2},
                       {title: "JavaScript", value: 3},
                       {title: "React", value: 4},
                       {title: "Redux", value: 5},
                   ]}
                   onChange = {(value)=>{setData(value)}}
                   onClick = {(data)=> alert(`Select element ${data}`)}
    />
    }