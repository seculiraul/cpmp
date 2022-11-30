import { useEffect, useState } from "react"
import Button from "../components/Button";


const useCounter  = (initalCount) => {

    const [count, setCount] = useState(initalCount);

    useEffect(()=> {
        console.log(count)
    }, [count])

    const increment = () => {
        setCount(count + 1);
    }

    return {
        count,
        increment
    }

}


const CounterPage = ({initalCount}) => {

    const {count , increment} = useCounter(initalCount);

    return (
        <div>
            count is {count}
            <Button onClick={increment}>Increment</Button>
        </div>
    )
}

export default CounterPage