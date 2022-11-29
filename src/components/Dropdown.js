import React, { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown =({ options, value, onChange }) => {

    const [isOpen, setOpen] = useState(false);
    const divEl = useRef()

    useEffect(() => {
        const handler = (event) => {
            if(!divEl.current) return;
            if(!divEl.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        }
    }, [])

    const click = () => {
        setOpen(!isOpen);
    }

    const handleOptClick = (opt) => {
        onChange(opt);
        setOpen(false);
    }

    const rendered = options.map(opt => {
        return (
            <div key={opt.label}
            className="hover:bg-sky-100 rounded cursor-pointer p-1"
            onClick={() => handleOptClick(opt)}
            >
                {opt.value}
            </div>
        )
    })
    return (
        <div className="w-48 relative" ref={divEl}>
            <Panel className="flex justify-between item-center cursor-pointer"
            onClick={click}
            >
                {value?.label || `Select...`}
                <GoChevronDown />
            </Panel>
            {isOpen && <Panel className="absolute top-full">{rendered}</Panel>}
        </div>
    )
}

export default Dropdown;