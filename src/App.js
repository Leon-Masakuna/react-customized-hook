import { useState } from "react";
import "./App.css";

//customized hook
function useIncrement(initial, step) {
  const [count, setCount] = useState(initial);
  const increment = () => {
    setCount(count + step);
  };
  return [count, increment];
}

//App component
function App() {
  const [count, increment] = useIncrement(0, 3);
  const [state, setState] = useState({
    a: 1,
    b: 2,
    c: 3,
  });

  const changeState = (event) => {
    event.preventDefault();
    setState((state) => {
      return { ...state, count: 10 };
    });
  };

  /* const handleClick = (event) => {
    event.preventDefault();
    setCount(count + 1);
  }; */

  return (
    <div className="App">
      <div>
        <button onClick={increment}>Incrémentez</button>
        <p>{count}</p>
        <button onClick={changeState}>
          Incrémentez{JSON.stringify(state)}
        </button>
      </div>
    </div>
  );
}

export default App;
