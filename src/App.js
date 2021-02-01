import logo from "./img/dave_talk.gif";
import "./App.css";
import "98.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.linkedin.com">
          <img src={logo} className="App-logo" alt="logo" />
        </a>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
      <footer className="App-footer">
        <button className="App-footer-button1">Start</button>
      </footer>
    </div>
  );
}

export default App;
