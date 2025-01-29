import { useReducer, useState } from 'react';
import './App.css';
import countReducer from '../../Reducers/countReducer';

export default function NiceCounter() {
    const [count, dispatchCount] = useReducer(countReducer, 0);
    const [addInput, setAddInput] = useState(0);
    const [multiInput, setMultiInput] = useState(0);

    const plusOne = _ => {
        const action = {
            type: 'plusOne'
        };
        dispatchCount(action);
    }

    const minusOne = _ => {
        const action = {
            type: 'minusOne'
        };
        dispatchCount(action);
    }

    const add = _ => {
        const action = {
            type: 'add',
            payload: parseInt(addInput)
        };
        dispatchCount(action);
    }

    const multi = _ => {
        const action = {
            type: 'multi',
            payload: parseInt(multiInput)
        };
        dispatchCount(action);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h2>Counter: {count}</h2>
                <div>
                    <button className="yellow" onClick={plusOne}>+1</button>
                    <button className="blue" onClick={minusOne}>-1</button>
                    <button className="green" onClick={add}>Add</button>
                    <input
                        type="number"
                        onChange={e => setAddInput(e.target.value)}
                        value={addInput}
                        style={{
                            width: '50px',
                            height: '38px',
                            margin: '10px 10px 0 10px',
                        }} />
                    <button className="green" onClick={multi}>Multi</button>
                    <input
                        type="number"
                        onChange={e => setMultiInput(e.target.value)}
                        value={multiInput}
                        style={{
                            width: '50px',
                            height: '38px',
                            margin: '10px 10px 0 10px',
                        }} />
                </div>
            </header>
        </div>
    );
}
