import Button from "./Button";
import {useState} from "react";

const NumberButtons = ({clickNumber}) => {


    function createNumberButtons() {
        const buttons = []
        for (let i = 1; i < 10; i++) {
            buttons.push(<Button key={i} text={i} click={clickNumber}/>)
        }
        buttons.push(<div key={10}></div>)
        buttons.push(<Button key={0} text={0} click={clickNumber}/>)
        return buttons;
    }

    const buttons = createNumberButtons();
    return (
        <div className="grid grid-cols-3 gap-4">
            {buttons}
        </div>
    )
}
export default NumberButtons