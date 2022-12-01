import { useEffect, useReducer } from "react"
import Button from "../components/Button";
import Panel from "../components/Panel";
import produce from "immer";


/*const useCounter  = (initalCount) => {

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

}*/

const SET_VALUE_ADD = 'value-add';
const ADD_VALUE_TO_COUNT = 'add';
const INCREMENT = 'increment';
const DEC = 'decrement';

const reducer = (state, action) => {


    switch (action.type) {
        case INCREMENT:
            state.count = state.count + 1;
            return;
        case DEC:
            state.count = state.count - 1;
            return;
        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueAdd;
            state.valueAdd = 0;
            return;
        case SET_VALUE_ADD:
            state.valueAdd = action.payload
        default:
            return;
    }
}

const CounterPage = ({initalCount}) => {

    //const [count, setCount] = useState(initalCount);
  //  const [valueAdd, setValueAdd] = useState(0);
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initalCount,
        valueAdd: 0
    })

    useEffect(()=> {
        console.log(state.count)
    }, [state.count]) 

    const increment = () => {
       dispatch({ type: INCREMENT });
    }

    const decrement = () => {
        dispatch({ type: DEC });
    }

    const handleChange = (e) => {
       const value = parseInt(e.target.value) || 0;

       dispatch({ type: SET_VALUE_ADD, payload: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({ type: ADD_VALUE_TO_COUNT });
    }

    return (
        <Panel className = "m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a nr</label>
                <input 
                 type='number'
                 value={state.valueAdd || ""}
                 onChange={handleChange}
                 className="p-1 m-3 ng-gray-50 border border-gray-300"
                />
                <Button >Add it</Button>
            </form>
        </Panel>
    )
}

export default CounterPage