import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";

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

    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    }

    const options = [
        {
            label: 'Red',
            value: 'red'
        },
        {
            label: 'Green',
            value: 'green'
        },
        {
            label: 'Blue',
            value: 'blue'
        }

    ]
    return (

        <Dropdown value={selection} onChange={handleSelect} options={options}/>
    )
}

export default App;