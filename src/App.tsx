import React, {useState} from 'react';
import './App.css';

import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOffControlled} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import Accordion from "./components/Accordion/Accordion";


function App(props: any) {
    console.log("App rendering")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    const [accordionCollapsedMenu, setAccordionCollapsedMenu] = useState<boolean>(false)
    const [accordionCollapsedUsers, setAccordionCollapsedUsers] = useState<boolean>(false)

    const [onOff, setOnOff] = useState<boolean>(true)

    return (

        <div className={'App'}>

            {/*<OnOffControlled on={onOff} onClick={setOnOff}/>*/}
            <OnOffControlled on={onOff} onClick={setOnOff}/> {onOff.toString()}

            {/*<OnOffUncontrolled/>*/}

            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/*<UncontrolledAccordion titleValue={'Menu'} collapsed={accordionCollapsedMenu} onClick={setAccordionCollapsedMenu}/>*/}
            {/*<UncontrolledAccordion titleValue={'Users'} collapsed={accordionCollapsedUsers} onClick={setAccordionCollapsedUsers}/>*/}

            <Accordion
                titleValue={'Menu'}
                collapsed={accordionCollapsed}
                onChange={()=>setAccordionCollapsed(!accordionCollapsed)}
            />
            {/*<Accordion titleValue={'Users'} collapsed={accordionCollapsed}/>*/}

            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            {/*<UncontrolledAccordion titleValue={'Users'}/>*/}

            {/*<ControlledRating value={1}/>*/}
            {/*<ControlledRating value={2}/>*/}
            {/*<ControlledRating value={3}/>*/}
            {/*<ControlledRating value={4}/>*/}
            {/*<ControlledRating value={5}/>*/}

            {/*<UncontrolledRating/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>

}

export default App;