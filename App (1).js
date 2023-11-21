import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Count(){
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);};

  const handleDecrement = () => {setCount(count - 1);};

  const handleReset = () => {setCount(0)}

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            nukwakunda peace's first react project<br></br>
            M23B13/036
          </p>
          <a
            className="App-link"
            href="https://github.com/smappinc"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Github
          </a>
  
          <p>Messi's Goals: {count}</p>
          <button onClick={handleIncrement}>Increase Goals</button>
          <br></br>
          <button onClick={handleDecrement}>Decrease Goals</button>
          <br></br>
          <button onClick={handleReset}>Reset Goals</button>
        </header>

        
        </div>
    );
}

export default Count;
