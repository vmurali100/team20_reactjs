import React from "react";
import { useState } from "react";
import "./project10.css";
const Project10 = () => {
  const [quote, setQuote] = useState({
    quote: "",
    author: "",
  });

  const getQuote = async () => {
    try {
      const url = "https://api.api-ninjas.com/v1/quotes?category=happiness";
      const response = await fetch(
        "https://api.api-ninjas.com/v1/quotescategory=happiness",
        {
          headers: {
            "X-Api-Key": "J7TV/QeO0T68vb9vi3EJmA==60gSwNXJ4Lvs4pbG",
          },
        }
      );
      const data = await response.json();
      setQuote(data[0]);
    } catch (error) {
        alert("Some Issues with API .... Tray again later !!!!")
    }
  };
  return (
    <div>
      <div className="quote-container">
        <div id="quote-text">
          {quote.quoteText === "" ? (
            <>Your Quote Come Here </>
          ) : (
            <>{quote.quote}</>
          )}
        </div>
        <div id="quote-author">
          {quote.author === "" ? <>- Author </> : <>{quote.author}</>}
        </div>
        <button id="new-quote" onClick={getQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Project10;
