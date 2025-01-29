import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';
import View from './Components/View';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);

  const ccolor = _ => {
    setColor(c => c === 'green' ? 'red' : 'green');
  }

  return (
    <div className="App">
      <header className="App-header">
        <View counter={counter} color={color} size={size} />
        <Counter counter={counter} setCounter={setCounter} />
        <button onClick={ccolor}>Spalva</button>
        <input type="range" min={10} max={60} onChange={c => setSize(c.target.value)} />
      </header>
    </div>
  );
}
