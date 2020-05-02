import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ createQuotes }) => {
  const [quote, setQuote] = useState({
    pet: "",
    owner: "",
    email: "",
    date: "",
    hour: "",
    symptom: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setQuote({
      ...quote,
      [e.target.name]: e.target.value,
    });
  };

  const { pet, owner, email, date, hour, symptom } = quote;

  const submitQuote = (e) => {
    e.preventDefault();

    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      email.trim() === "" ||
      date.trim() === "" ||
      hour.trim() === "" ||
      symptom.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);

    quote.id = uuidv4();

    createQuotes(quote);

    setQuote({
      pet: "",
      owner: "",
      email: "",
      date: "",
      hour: "",
      symptom: "",
    });
  };

  return (
    <Fragment>
      <h2>Create quote</h2>

      {error ? <p className="alert-error">All fields are required</p> : null}

      <form onSubmit={submitQuote}>
        <label>Pet name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet name"
          onChange={handleChange}
          value={pet}
        />

        <label>Owner name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner name"
          onChange={handleChange}
          value={owner}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          className="u-full-width"
          placeholder="email@example.com"
          onChange={handleChange}
          value={email}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />

        <label>Hour</label>
        <input
          type="time"
          name="hour"
          className="u-full-width"
          onChange={handleChange}
          value={hour}
        />

        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptom"
          onChange={handleChange}
          value={symptom}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Add quote
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
