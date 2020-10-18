import React from 'react';
import i18next from 'i18next';

import styles from './styles.module.css';

/** keep, add, change or remove types/props */
export type Position = [/** row */ number, /** col */ number];

export interface Props {
  goToNextStep: (step: number) => void;
  /* targetPosition: Position;
  availableCells: (0 | 1)[][];
  startingPosition: Position;
  moveLimit?: number;
  cellSize?: number;
  shadow?: boolean;
  visibleCells?: number; */
}

const Labyrinth = (props: Props) => {
  return (
    <section className={`fadeInRight ${styles.container}`}>
      <h1 className='title'>{i18next.t('main:title')}</h1>
      <div data-testid='position-ball' className={styles.test}>
        position ball
      </div>
      <div data-testid='cell'>cell</div>
      <div data-testid='moves-message'>moves message</div>
      <div data-testid='lose-message'>lose message</div>
      <div data-testid='win-message'>win message</div>
      <button
        className='base-text fw-bold button'
        type='button'
        onClick={() => props.goToNextStep(2)}
      >
        {i18next.t('main:metrics')}
      </button>
    </section>
  );
};

export default Labyrinth;
