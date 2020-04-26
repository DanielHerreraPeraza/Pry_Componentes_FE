import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Quote from './components/Quote';

function App() {

  let initialQuotes = JSON.parse(localStorage.getItem('quotes'));
  if(!initialQuotes){
    initialQuotes = [];
  }

  const [quotes, saveQuotes] = useState(initialQuotes);


  useEffect( () => { 
    if(initialQuotes){
      localStorage.setItem('quotes', JSON.stringify(quotes));
    }else{
      localStorage.setItem('quotes', JSON.stringify([]));
    }
  }, [quotes] );


  const createQuotes = quote =>{
      saveQuotes([
        ...quotes,
        quote
      ])
  }

  const deleteQuote = id => {
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
