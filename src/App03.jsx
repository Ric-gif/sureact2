import { createContext, useState } from 'react';
import './App.css';
import A from './Components/03/A';

export const CountContext = createContext();

export default function App() {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={_ => setCount(c => c + 1)}>+1</button>
                <button onClick={_ => setCount2(c => c + 2)}>+2</button>
                <div className="flex">
                    <A count={count}/>
                    <CountContext.Provider value={count2}>
                        <A />
                    </CountContext.Provider>
                </div>
            </header>
        </div>
    );
}
