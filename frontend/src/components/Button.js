const Button = ({text, click}) => {
    return(
        <>
            <button className="bg-pink-400 hover:bg-pink-300 text-black font-bold py-2 px-4 rounded-full" onClick={() => {click(text)}}>
                {text}
            </button>
        </>
    )

}
export default Button