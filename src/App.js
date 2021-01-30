import logo from './dave.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.linkedin.com"><img src= {logo} className="App-logo" alt="logo" /></a>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello world
        </a>
      </header>
    </div>
  );
}

export default App;
