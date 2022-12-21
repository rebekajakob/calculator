import Button from "./Button";

const ActionButtons = ({clickEvent, equalEvent}) => {

    function createButtons(){
        const buttons = []
        buttons.push(<Button key={"+"} text={"+"} click={clickEvent} />)
        buttons.push(<Button key={"-"} text={"-"} click={clickEvent} />)
        buttons.push(<Button key={"="} text={"="} click={equalEvent} />)
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