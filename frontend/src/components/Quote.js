import {useEffect, useState} from "react";

const Quote = () => {
    const [chosenQuote, setChosenQuote] = useState("We've got to put a lot of money into changing behavior. - Bill Gates");
    const [quotes, setQuotes] = useState([]);
    const [randomNumber, setRandomNumber] = useState(0);

    /** Fetch all the quotes from the API once */
    useEffect(()=>{
        async function fetchAllQuotes() {
            let res = await fetch("https://type.fit/api/quotes")
            let data = await res.json()
            setQuotes(data)
        }
        fetchAllQuotes()
    },[])

    /** Every 10 seconds make a random number between 1 and 1643 (number of quotes) */
    useEffect(() => {
        const myInterval = setInterval(fetchQuote, 10000);

        return () => {
            // should clear the interval when the component unmounts
            clearInterval(myInterval);
        };
    }, []);

    const fetchQuote = () => {
        setRandomNumber(Math.floor(Math.random()* 1643 ) +1);
    };

    /** When our random number changing, change the chosen quote as well */
    useEffect(()=>{
        if(quotes.length!==0){
            setChosenQuote(quotes[randomNumber].text + " - " + quotes[randomNumber].author)
        }
    },[randomNumber])

    return(
        <div>
            <p>{chosenQuote}</p>
        </div>
    )
}

export default Quote