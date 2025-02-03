import { useEffect, useReducer, useState } from 'react';
import './App.css';
import countReducer from './Reducers/niceCountReducer';
import * as action from './Actions/niceActions';

export default function App() {
    const [count, dispatchCount] = useReducer(countReducer, {value: 0});
    const [addInput, setAddInput] = useState(0);
    const [multiInput, setMultiInput] = useState(0);

    useEffect(_ => {
        if (count.value === 0) {
            setAddInput(0);
            setMultiInput(0);
        }
    }, [count]);

    return (
        <div className="App">
            <header className="App-header">
                <h2>Counter: {count.value}</h2>
                <div>
                    <button className="yellow" onClick={_ => dispatchCount(action.plusOne())}>+1</button>
                    <button className="blue" onClick={_ => dispatchCount(action.minusOne())}>-1</button>
                    <button className="green" onClick={_ => dispatchCount(action.add(addInput))}>Add</button>
                    <button className="green" onClick={_ => dispatchCount(action.reset())}>reset</button>
                    <button className="green" onClick={_ => dispatchCount(action.plusFive())}>+5</button>
                    <input
                        type="number"
                        onChange={e => setAddInput(e.target.value)}
                        value={addInput}
                        style={{
                            width: '50px',
                            height: '38px',
                            margin: '10px 10px 0 10px',
                        }} />
                    <button className="green" onClick={_ => dispatchCount(action.multi(multiInput))}>Multi</button>
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
