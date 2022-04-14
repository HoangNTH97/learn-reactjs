import logo from "./logo.svg";
import "./App.css";

function App() {
  const age = 18;
  const isFemale = true;
  const student = {
    name: 'asy Frontend',
  };
  const colorList = ['red', 'green', 'blue'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>Nguyen The Hoang</p>
      </header>
    </div>
  );
}

export default App;
