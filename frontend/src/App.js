import './App.css';
import Button from "./components/Button";
import NumberButtons from "./components/NumberButtons";
import Footer from "./components/Footer";
import ActionButtons from "./components/ActionButtons";
import DisplayRow from "./components/DisplayRow";

function App() {
    const number = 1
    function click() {
        alert(number)
    }
  return (
    <div className="flex flex-col min-h-screen">
        <div className="grid grid-cols-5 gap-4 px-4">
            <div className="col-span-5 ">
                <DisplayRow text={"ola!"}/>
            </div>
            <div className="col-span-3">
                <NumberButtons/>
            </div>
            <div className="col-span-2">
                <ActionButtons/>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
