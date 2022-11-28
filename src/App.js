import React from "react";
import Accordion from "./components/Accordion";

const App = () => {

    const listItems = [
        {
            id: 0,
            label: 'first',
            content: 'content for first'
        },
        {
            id: 1,
            label: 'secound',
            content: 'content for second'
        },
        {
            id: 2,
            label: 'third',
            content: 'content for third'
        }
    ]
    return (

        <Accordion listItems={listItems}/>
    )
}

export default App;