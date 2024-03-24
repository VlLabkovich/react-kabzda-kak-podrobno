import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";


function App(props: any) {
    console.log("App rendering")

    return (
        <div>

            <OnOff/>
            <OnOff/>
            <OnOff/>

            <Accordion titleValue={"Menu"}/>
            <Accordion titleValue={"Users"}/>

            {/*<UncontrolledRating/>*/}

            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Rating value={6}/>
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