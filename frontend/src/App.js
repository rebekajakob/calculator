import './App.css';
import Button from "./components/Button";
import NumberButtons from "./components/NumberButtons";
import Footer from "./components/Footer";

function App() {
    const number = 1
    function click() {
        alert(number)
    }
  return (
    <div className="App">
      <NumberButtons/>
        <Footer/>
    </div>
  );
}

export default App;
