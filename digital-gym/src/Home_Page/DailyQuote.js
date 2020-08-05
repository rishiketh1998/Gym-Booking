import React, {useEffect, useState} from "react";
import {Card} from "react-bootstrap";

export const DailyQuote = ({quotes}) => {
    let random = Math.floor(Math.random() * quotes.length)
    const [randomNumber, setRandomNumber] = useState(random)
    const [quote, setQuote] = useState(quotes[randomNumber])
    useEffect(() => {
        let timer =  setInterval(() => {
            setRandomNumber(random)
        }, 86400)
        return () => clearTimeout(timer)
    })
   useEffect(() => {
       setQuote(quotes[randomNumber])
   },[quotes, randomNumber])
    return (
        <Card>
            <div className='m-2'>
                <p className='lead'>
                    <strong className='text-info'>Quote</strong> of the day.
                </p>
                <p>
                    <i className="fas fa-quote-left text-info"/> <br />
                    {quote.quote}
                </p>
                <p className='text-right'>
                    — {quote.author}
                </p>
            </div>
        </Card>
    )
}