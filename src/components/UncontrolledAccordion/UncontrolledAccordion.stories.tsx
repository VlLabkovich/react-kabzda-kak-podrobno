import React from "react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: "Uncontrolled Accordion",
    component: UncontrolledAccordion,
};

export const MenuChangeMode = () => {
    return <UncontrolledAccordion titleValue={'Menu'} />
}

export const ChangeUncontrolledAccordion = () => {
    return <UncontrolledAccordion titleValue={'Users'} />
}