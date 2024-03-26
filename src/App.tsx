import React, {useState} from 'react';
import './App.css';
// import {ControlledAccordion} from "./components/Accordion/Accordion";
// import {ControlledRating} from "./components/Rating/Rating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/Accordion/Accordion";
import {OnOffControlled} from "./components/OnOff/OnOff";


function App(props: any) {
    console.log("App rendering")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    const [onOff, setOnOff] = useState<boolean>(true)

    return (

        <div>

            {/*<OnOffControlled on={onOff} onClick={setOnOff}/>*/}
            <OnOffControlled on={onOff} onClick={setOnOff}/> {onOff.toString()}

            {/*<OnOffUncontrolled/>*/}

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolledAccordion titleValue={'Menu'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <UncontrolledAccordion titleValue={'Users'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>

            {/*<ControlledAccordion titleValue={'Menu'} collapsed={false}/>*/}
            {/*<ControlledAccordion titleValue={'Users'} collapsed={true}/>*/}

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