import logo from '../logo.svg';
import './App.css';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Demo app in React!
        </p>
        <Link to={`Game`}>Play a game!</Link>
      </header>
    </div>
  );
}

export default App;
