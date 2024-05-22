import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOffControlled} from "./components/OnOff/OnOff";
import {OnOffUncontrolledControlled} from "./components/UncontrolledOnOff/UncontrolledControlledOnOff";
import {OnOffUncontrolled} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    console.log("App rendering")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    // const [accordionCollapsedMenu, setAccordionCollapsedMenu] = useState<boolean>(false)
    // const [accordionCollapsedUsers, setAccordionCollapsedUsers] = useState<boolean>(false)

    const [onOff, setOnOff] = useState<boolean>(true)

    return (

        <div className={'App'}>

            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}
                       }/>

            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>

            <OnOffControlled on={onOff} onChange={setOnOff}/> {onOff.toString()}
            <OnOffUncontrolled/>
            <OnOffUncontrolledControlled defaultOnOff={true} onChange={()=>{}} />

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <hr></hr>
            <UncontrolledRating/>

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