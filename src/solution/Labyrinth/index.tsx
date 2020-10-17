import React, { useRef, useEffect } from 'react';
import i18next from 'i18next';

import styles from './styles.module.css';

export interface Props {
  goToNextStep: (step: number) => void;
  targetPosition: number[];
  availableCells: number[][];
  startingPosition: number[];
  moveLimit: number;
  cellSize?: string;
}

const Labyrinth = (props: Props) => {
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = boardRef;
    const { availableCells, targetPosition, startingPosition } = props;
    if (current) {
      console.log(boardRef.current);
      current.style.gridTemplateColumns = `repeat(${availableCells.length}, 1fr)`;
      current.style.gridTemplateAreas = `repeat(${availableCells[0].length}, 1fr)`;
      for (let i = 0; i < availableCells.length; i++) {
        for (let j = 0; j < availableCells[i].length; j++) {
          const cell = document.createElement('span');
          cell.className = styles.cell;
          cell.setAttribute('data-fill', `${availableCells[i][j] === 1}`);
          if (startingPosition[0] === i && startingPosition[1] === j) {
            cell.classList.add(styles.start);
          }
          if (targetPosition[0] === i && targetPosition[1] === j) {
            cell.classList.add(styles.target);
          }
          current.appendChild(cell);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.availableCells]);

  return (
    <section className={`fadeInRight ${styles.container}`}>
      <h1 className='title'>{i18next.t('main:title')}</h1>
      <small className='medium-text'>{i18next.t('main:explanationText')}</small>
      <div ref={boardRef} className={styles.board}></div>
      <div className={styles['info-container']}>
        <h6 className={`big-bold-text ${styles.win}`} data-testid='win-message'>
          {i18next.t('main:wonMsg')}
        </h6>
        {/* <h6 className={`big-bold-text ${styles.lost}`} data-testid='win-message'>
          {i18next.t('main:lostMsg')}
        </h6> */}
        <h6 className='base-text' data-testid='moves-message'>
          {i18next.t('main:movesLeft')}
          <strong className={`big-bold-text ${styles.limit}`}>{props.moveLimit}</strong>
        </h6>
      </div>
      {/* <div data-testid='position-ball'>position ball</div>
      <div data-testid='cell'>cell</div>
      <div data-testid='moves-message'>moves message</div>
      <div data-testid='lose-message'>lose message</div>
      <div data-testid='win-message'>win message</div> */}
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
