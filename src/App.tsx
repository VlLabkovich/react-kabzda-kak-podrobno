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

    const [value, setValue] = useState<any>('1')

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
            <br/>
            <UncontrolledRating/>
            <br/>
            <Select value={value}
                    items={[
                        {value: '1', title: 'Minsk'},
                        {value: '2', title: 'Kiev'},
                        {value: '3', title: 'Moscow'},
                    ]}
                    onChange={(value) => {
                        setValue(value)
                    }}
            />
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