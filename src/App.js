import logo from "./img/dave_talk.gif";
import start from "./img/start.png";
import "./App.css";
import "98.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.linkedin.com">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <p>David Steinhafel's First React Portfolio/Blog Website</p>
        <a
          className="App-link"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
      <footer className="App-footer">
        <a href="https://www.google.com">
          <img src={start} className="App-start" alt="start" />
        </a>
      </footer>
    </div>
  );
}

export default App;
