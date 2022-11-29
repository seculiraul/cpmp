import React from "react";
import Button from "../components/Button";
import { GoBell, GoDatabase, GoClock } from 'react-icons/go';

const ButtonPage = () => {

    return (
        <div>
            <div>
                <Button success primary outline rounded >
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