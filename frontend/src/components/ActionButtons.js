import Button from "./Button";

const ActionButtons = () => {
    function click(clickedAction){
        alert(clickedAction)
    }
    function createButtons(){
        const buttons = []
        buttons.push(<Button key={"+"} text={"+"} click={click} />)
        buttons.push(<Button key={"-"} text={"-"} click={click} />)
        return buttons
    }

    const buttons = createButtons()

    return (
            <div className="grid grid-cols-1 gap-4">
                {buttons}
            </div>
    )

}

export default ActionButtons