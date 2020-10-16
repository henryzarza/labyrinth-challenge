import React from 'react';
import i18next from 'i18next';

import Labyrinth from './Labyrinth';

function Solution() {
  return (
    <>
      <h1 className='title'>{i18next.t('main:title')}</h1>
      <Labyrinth
        targetPosition={[6, 9]}
        availableCells={[
          [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
          [0, 0, 1, 0, 1, 1, 1, 1, 0, 0],
          [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
          [1, 1, 1, 0, 0, 0, 1, 1, 0, 0],
          [1, 0, 1, 0, 1, 0, 0, 1, 1, 1],
          [1, 0, 1, 1, 1, 0, 0, 1, 0, 1],
          [0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
          [0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
          [0, 0, 1, 0, 1, 0, 0, 1, 1, 1]
        ]}
        startingPosition={[4, 4]}
        moveLimit={25}
        cellSize={30}
      />
    </>
  );
}

export default Solution;
