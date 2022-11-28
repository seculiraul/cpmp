import React from "react";
import Button from "../components/Button";
import { GoBell, GoDatabase, GoClock } from 'react-icons/go';

const ButtonPage = () => {

    const onClick = () => {
        console.log('hi')
    }
    return (
        <div>
            <div>
                <Button success primary outline rounded onClick={onClick}>
                    <GoBell />
                    click here
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    <GoClock />
                    HIHIHI
                </Button>
            </div>
            <div>
                <Button danger rounded>
                    <GoDatabase />
                </Button>
            </div>
            <div>
                <Button primary outline/>
            </div>
        </div>
    )
}

export default ButtonPage;