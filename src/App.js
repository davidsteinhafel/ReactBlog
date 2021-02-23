import logo from "./img/dave_talk.gif";
import start from "./img/start.png";
import folder from "./img/folder_95.png";
import computer from "./img/comp_95.png";
import "./App.css";
import "98.css";
import Clock from "./Clock";

let time = new Date().toLocaleString();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <a href="https://www.linkedin.com">
          <img src={logo} className="App-logo" alt="logo" />
        </a> */}
        <a
          className="App-link"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <table className="App-table">
          <tr>
            <td>
              <img src={folder} className="App-folder" alt="folder"></img>
            </td>
            <td>
              <img src={computer} className="App-computer" alt="computer"></img>
            </td>
          </tr>
        </table>
      </header>

      <footer className="App-footer">
        {/* possible fix might be to put both objects into table  */}
        <a href="https://www.google.com">
          <img src={start} className="App-start" alt="start" />
        </a>
        <Clock></Clock>
      </footer>
    </div>
  );
}

export default App;
