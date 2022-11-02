import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import css from './Form.module.css';

export default function Form({ getDataFilm }) {
  const [submitFilm, setSubmitFilm] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setSubmitFilm(value);
  };

  const onSubmit = event => {
    event.preventDefault();
    getDataFilm(submitFilm);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={handleChange} type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  getDataFilm: PropTypes.func.isRequired,
};
