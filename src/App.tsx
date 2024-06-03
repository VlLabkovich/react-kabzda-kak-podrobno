import React, {useState} from 'react';
import './App.css';
import {Select} from "./components/Select/Select";

function App() {

    const [data, setData] = useState<string | undefined>(undefined);

    return (

        <div className={'App'}>

            <Select title={'HTML select tag in React js'}
                    data={data}
                    items={[
                        {title: "HTML", value: 1},
                        {title: "CSS", value: 2},
                        {title: "JavaScript", value: 3},
                        {title: "React", value: 4},
                        {title: "Redux", value: 5},
                    ]}
                    onChange={(value)=> setData(value)}
                    onClick={(data)=> alert(`Select element ${data}`)}/>

        </div>
    );
}

export default App;