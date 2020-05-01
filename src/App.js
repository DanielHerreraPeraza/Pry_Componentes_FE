import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Quote from './components/Quote';

function App() {

  let url = "https://backendcomponentes-5k5vhfx5aq-uc.a.run.app/quotes"

  const [quotes, saveQuotes] = useState([]);


  useEffect( () => { 
    getData();
  }, [] );

  const getData = async () => {
      const data = await fetch(url);
      const quotes = await data.json();
      saveQuotes(quotes);

  } 

  const createQuotes = async (quote) =>{
    await fetch(url, {
      method: 'POST',
      headers:{'Content-type' : 'application/json'},
      body:JSON.stringify(quote)
    })
      saveQuotes([
       ...quotes,
       quote
      ])
}

  const deleteQuote = id => {
    fetch(url + "?id=" + id, {
      method: 'DELETE',
      headers:{'Content-type' : 'application/json'}
    })
    const newQuotes = quotes.filter(quote => quote.id !== id)
    saveQuotes(newQuotes);
  };
  
  const titulo = quotes.length === 0 ? "You've no quotes" : 'Quote manangment'

  return (
    <Fragment>
      <h1>Patient Administration</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
             createQuotes={createQuotes}/>
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {quotes.map(quote =>(
              <Quote
                key = {quote.id}
                quote={quote}
                deleteQuote={deleteQuote}
              />
            ))}
          </div>
        </div>

      </div>
    </Fragment>
   
  );
}

export default App;
