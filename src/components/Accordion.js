import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ listItems }) => {

    const [expand, setExpand] = useState(-1);


    const click = (index) => {

        setExpand(current => {
            if(current === index) return -1
            return index;
        });
    }

    const renderedItems = listItems.map((item, index) => {
        const isExpanded = index === expand;
        const icon = <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
        return (
            <div key={item.id}>
                <div
                className="flex p-3 bg-gray-50 border-t rounded cursor-pointer justify-between"
                onClick={() => click(index)}>
                    {item.label} 
                    {icon}
                </div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        )
    })
    return (
        <div>{renderedItems}</div>
    )
}

export default Accordion