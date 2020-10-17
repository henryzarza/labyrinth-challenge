import React from 'react';
import i18next from 'i18next';

import styles from './styles.module.css';

/** keep, add, change or remove types/props */
export type Position = [/** row */ number, /** col */ number];

export interface Props {
  targetPosition: Position;
  availableCells: (0 | 1)[][];
  startingPosition: Position;
  moveLimit?: number;
  cellSize?: number;
  shadow?: boolean;
  visibleCells?: number;
}

const Labyrinth = () => {
  return (
    <section>
      <h1 className='title'>{i18next.t('main:title')}</h1>
      <div data-testid='position-ball' className={styles.test}>
        position ball
      </div>
      <div data-testid='cell'>cell</div>
      <div data-testid='moves-message'>moves message</div>
      <div data-testid='lose-message'>lose message</div>
      <div data-testid='win-message'>win message</div>
    </section>
  );
};

export default Labyrinth;
