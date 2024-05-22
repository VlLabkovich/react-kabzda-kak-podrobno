import React from "react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: "Uncontrolled Accordion",
    component: UncontrolledAccordion,
};

export const MenuChangeMode = () => {
    return <UncontrolledAccordion titleValue={'Menu'} />
}

export const Users = () => {
    return <UncontrolledAccordion titleValue={'Users'} />
}