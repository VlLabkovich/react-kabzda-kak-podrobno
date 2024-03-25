import React from 'react';
import './App.css';
// import {ControlledAccordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/Accordion/Accordion";
// import {ControlledRating} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/Rating/Rating";




function App(props: any) {
    console.log("App rendering")

    return (
        <div>

            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}

            {/*<ControlledAccordion titleValue={'Menu'} collapsed={false}/>*/}
            {/*<ControlledAccordion titleValue={'Users'} collapsed={true}/>*/}

            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>

            {/*<ControlledRating value={1}/>*/}
            {/*<ControlledRating value={2}/>*/}
            {/*<ControlledRating value={3}/>*/}
            {/*<ControlledRating value={4}/>*/}
            {/*<ControlledRating value={5}/>*/}

            <UncontrolledRating/>
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