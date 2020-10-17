import React from 'react';
import i18next from 'i18next';

// import { MAZES } from '../config/constants';
import Characters from './Characters';
// import Labyrinth from './Labyrinth';
// import Result from './Result';

function Solution() {
  return (
    <main className='main-container'>
      <Characters />
      {/* <Labyrinth />*/}
      {/* <Result /> */}
      <button className='base-text fw-bold button' type='button'>
        {i18next.t('main:next')}
      </button>
    </main>
  );
}

export default Solution;
