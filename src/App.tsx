import React from 'react';
import logo from './logo.svg';
import './App.css';
import {findConfigFile} from 'typescript';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';

function hello() {
    alert('Hello it-kamasutra')
}

// hello();

function App(props: any) {
    console.log("App rendering")
    return (
        <div>
            {/*<img src={"https://www.svgrepo.com/show/374032/reactjs.svg"}/>*/}
            <PageTitle title={"This is APP component"} />
            <PageTitle title={"My friends"}/>
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={true}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

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