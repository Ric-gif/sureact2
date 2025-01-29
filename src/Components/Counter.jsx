import { useEffect, useState } from 'react';

export default function Counter({ counter, setCounter }) {
    const [double, setDouble] = useState(0);

    useEffect(() => {
        setDouble(counter * 2);
    }, [counter]);
    
    const plus = _ => {
        setCounter(c => c + 1);
    }

    const minus = _ => {
        setCounter(c => c - 1);
    }

    const reset = _ => {
        setCounter(0);
    }

    return (
        <>
            <h2>{double}</h2>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}