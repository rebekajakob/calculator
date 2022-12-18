import './App.css';
import Button from "./components/Button";

function App() {
    const number = 1
    function click() {
        alert(number)
    }
  return (
    <div className="App">
      <Button text={number} onClick={click}/>
    </div>
  );
}

export default App;
