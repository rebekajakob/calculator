import './App.css';
import NumberButtons from "./components/NumberButtons";
import Footer from "./components/Footer";
import ActionButtons from "./components/ActionButtons";
import DisplayRow from "./components/DisplayRow";
import {useState} from "react";

function App() {
    const [text, setText] = useState("0");
    function clickActionButton(clickedAction){
        if (text.charAt(text.length - 2) !== clickedAction){
            if(text.charAt(text.length - 1) === " "){
                setText(text.slice(0,text.length - 2) + clickedAction + " ")
            } else{
                setText(text + " " + clickedAction + " ")
            }
        }

    }
    function clickNumberButton(clickedNumber){
        if (text ==="0"){
            setText(clickedNumber.toString())
        } else {
            setText(text + clickedNumber)
        }
    }
    function clickEqualButton(){
        let calculate = text.split(" ")
        if (calculate[calculate.length-1] === ""){
            calculate[calculate.length-1] = "0"
        }
        let result = 0
        let operation = "+"
        for(let i=0; i< calculate.length; i++){
            if(i%2===0){
                if (operation === "+"){
                    result += parseInt(calculate[i])
                } else{
                    result -= parseInt(calculate[i])
                }
            }
            else{
                operation = calculate[i]
            }
        }
        setText(result.toString())
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="grid grid-cols-5 gap-4 px-4 pt-2">
                <div className="col-span-5 ">
                    <DisplayRow text={text}/>
                </div>
                <div className="col-span-3">
                    <NumberButtons clickNumber={clickNumberButton}/>
                </div>
                <div className="col-span-2">
                    <ActionButtons clickEvent={clickActionButton} equalEvent={clickEqualButton}/>
                </div>
            </div>
            <Footer/>
        </div>
    );


}

export default App;
