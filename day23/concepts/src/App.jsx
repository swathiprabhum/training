import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Input from './components/input';
import Login from './components/login';

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello');

  function sayHello() {
    alert("Hello, React!");
  }

  // Comditional Rendering Example
  function sub() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="App">
      <button onClick={sayHello}>Say Hello</button>
      <button onClick={() => alert('Button clicked!')}>Click Me</button>

      <hr />

    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => sub()}>Subtract</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>

    <div>
      <h1>Text: {text}</h1>
      <button onClick={() => setText("Welcome to React!")}> Click me to change text </button>
      <button onClick={() => setText("Hello")}> Reset Text </button>
    </div>
    <hr />

    <Input />
    <hr />
    <Login />
    </div>
  );
}
export default App;
