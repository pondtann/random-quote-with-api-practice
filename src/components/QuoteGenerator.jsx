import { useEffect, useState } from "react";

function QuoteGenerator() {
  const [quotes, setQuotes] = useState();
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function clickHandler() {
    let randomNumber = Math.floor(Math.random() * 16);
    setQuote(quotes[randomNumber]);
  }

  return (
    <>
      <button
        className="bg-white hover:bg-slate-400 py-2 px-4 rounded-md border-2 border-black"
        onClick={clickHandler}
      >
        New Quote
      </button>
      <p className="text-xl font-bold m-5">"{quote.text}"</p>

      <p className="mt-5 italic">- {quote.author} -</p>
    </>
  );
}

export default QuoteGenerator;
