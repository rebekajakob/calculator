import Button from "./Button";

const NumberButtons = ({clickNumber}) => {


    function createNumberButtons() {
        const buttons = []
        for (let i = 1; i < 10; i++) {
            buttons.push(<Button key={i} text={i} click={clickNumber} color={"bg-sky-400"} hoverColor={"hover:bg-sky-300"}/>)
        }
        buttons.push(<div key={10}></div>)
        buttons.push(<Button key={0} text={0} click={clickNumber} color={"bg-sky-400"} hoverColor={"hover:bg-sky-300"}/>)
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