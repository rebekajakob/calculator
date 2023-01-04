const Button = ({text, click, color, hoverColor}) => {
    return(
        <>
            <button className={color + " text-black font-bold py-2 px-4 rounded-full " + hoverColor} onClick={() => {click(text)}}>
                {text}
            </button>
        </>
    )

}
export default Button