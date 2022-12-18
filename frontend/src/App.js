import './App.css';
import Button from "./components/Button";
import NumberButtons from "./components/NumberButtons";

function App() {
    const number = 1
    function click() {
        alert(number)
    }
  return (
    <div className="App">
      <NumberButtons/>
    </div>
  );
}

export default App;
