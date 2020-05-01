import React from 'react';

const Quote = ({quote, deleteQuote}) => (
    <div className="quote">
        <p>Pet: <span>{quote.pet}</span> </p>
        <p>Owner: <span>{quote.owner}</span> </p>
        <p>Date: <span>{new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "long",
          day: "2-digit"
        }).format(quote.time)}</span> </p>
        <p>Hour: <span>{quote.hour}</span> </p>
        <p>Syntoms: <span>{quote.symptom}</span> </p>

        <button
            className="button eliminar u-full-width"
            onClick= { () => deleteQuote(quote.id) }
        >Delete &times;</button>
    </div>
);
 
export default Quote;