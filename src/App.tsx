import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOffControlled} from "./components/OnOff/OnOff";
import {OnOffUncontrolledControlled} from "./components/UncontrolledOnOff/UncontrolledControlledOnOff";
import {OnOffUncontrolled} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Select} from "./components/Select/Select";

function App() {
    console.log("App rendering")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    // const [accordionCollapsedMenu, setAccordionCollapsedMenu] = useState<boolean>(false)
    // const [accordionCollapsedUsers, setAccordionCollapsedUsers] = useState<boolean>(false)

    const [onOff, setOnOff] = useState<boolean>(true)

    const [data, setData] = useState<string | undefined>(undefined);


    return (

        <div className={'App'}>

            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       items={
                        [
                           {title: 'Dimych', value: 1},
                           {title: 'Valera', value: 2},
                           {title: 'Artem', value: 3},
                           {title: 'Viktor', value: 4}
                       ]
            }
                       onClick={() => {
                       }}
            />

            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>

            <OnOffControlled on={onOff} onChange={setOnOff}/> {onOff.toString()}
            <OnOffUncontrolled/>
            <OnOffUncontrolledControlled defaultOnOff={true} onChange={() => {
            }}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <hr></hr>
            <UncontrolledRating/>

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

            <div>
                {/*<Accordion titleValue={'Users'}*/}
                {/*           collapsed={accordionCollapsed}*/}
                {/*           onChange={() => {setAccordionCollapsed(!accordionCollapsed)}*/}
                {/*}/>*/}

                {/*<UncontrolledAccordion titleValue={'Menu'} collapsed={accordionCollapsedMenu} onClick={setAccordionCollapsedMenu}/>*/}
                {/*<UncontrolledAccordion titleValue={'Users'} collapsed={accordionCollapsedUsers} onClick={setAccordionCollapsedUsers}/>*/}

                {/*<ControlledRating value={1}/>*/}
                {/*<ControlledRating value={2}/>*/}
                {/*<ControlledRating value={3}/>*/}
                {/*<ControlledRating value={4}/>*/}
                {/*<ControlledRating value={5}/>*/}
            </div>
        </div>
    );
}

export default App;