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
    <div className="flex flex-col min-h-screen">
      <NumberButtons/>
        <Footer/>
    </div>
  );
}

export default App;
