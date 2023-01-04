import Button from "./Button";

const ActionButtons = ({clickEvent, equalEvent, clearEvent}) => {

    function createButtons(){
        const buttons = []
        buttons.push(<Button key={"+"} text={"+"} click={clickEvent} color={"bg-pink-400"} hoverColor={"hover:bg-pink-300"} />)
        buttons.push(<Button key={"-"} text={"-"} click={clickEvent} color={"bg-pink-400"} hoverColor={"hover:bg-pink-300"} />)
        buttons.push(<Button key={"="} text={"="} click={equalEvent} color={"bg-violet-400"} hoverColor={"hover:bg-violet-300"} />)
        buttons.push(<Button key={"del"} text={"Clear"} click={clearEvent} color={"bg-emerald-400"} hoverColor={"hover:bg-emerald-300"} />)
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