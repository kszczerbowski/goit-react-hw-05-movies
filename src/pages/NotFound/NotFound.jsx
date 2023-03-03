import React from 'react';
import css from './NotFound.module.css';

export const NotFound = () => {
  return (
    <>
      <h1 className={css.notFound}>
        You have reached the world's edge, none but devils play past here...
      </h1>
      <h5>In other words: page not found</h5>
    </>
  );
};
