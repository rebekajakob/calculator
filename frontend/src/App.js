import './App.css';
import Button from "./components/Button";
import NumberButtons from "./components/NumberButtons";
import Footer from "./components/Footer";
import ActionButtons from "./components/ActionButtons";
import DisplayRow from "./components/DisplayRow";

function App() {
    function clickActionButton(clickedAction){
        alert(clickedAction)
    }
    function clickNumberButton(clickedNumber){
        alert(clickedNumber)
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="grid grid-cols-5 gap-4 px-4">
                <div className="col-span-5 ">
                    <DisplayRow text={"ola!"}/>
                </div>
                <div className="col-span-3">
                    <NumberButtons clickNumber={clickNumberButton}/>
                </div>
                <div className="col-span-2">
                    <ActionButtons clickEvent={clickActionButton}/>
                </div>
            </div>
            <Footer/>
        </div>
    );


}

export default App;
