import {Select} from "./Select";
import {useState} from "react";

export default {
    title: 'Select',
    component: Select,
};

export const WithValue = () => {

    const [value, setValue] = useState('1')

    return <Select onChange={(value)=>setValue(value)}

                   value={value}
                   items={[
                       // {value: '1', title: 'Minsk'},
                       // {value: '2', title: 'Kiev'},
                       // {value: '3', title: 'Moscow'},
                   ]}
    />
}

export const WithoutValue = () => {

    const [value, setValue] = useState(null)

    return <Select onChange={(value)=>setValue(value)}
                   value={value}
                   items={[
                       // {value: '1', title: 'Minsk'},
                       // {value: '2', title: 'Kiev'},
                       // {value: '3', title: 'Moscow'},
                   ]}
    />
}