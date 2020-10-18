import React, { useRef, useEffect, useState, useCallback } from 'react';
import i18next from 'i18next';

import { createMaze, moveCharacter } from './utils';
import styles from './styles.module.css';

export interface Props {
  goToNextStep: (step: number) => void;
  targetPosition: number[];
  availableCells: number[][];
  startingPosition: number[];
  moveLimit: number;
  character: string;
  level: string;
}

const Labyrinth = (props: Props) => {
  const boardRef = useRef<HTMLDivElement>(null);
  const [qtyMovements, setQtyMovements] = useState(props.moveLimit);
  const [currentPos, setCurrentPos] = useState(props.startingPosition);
  const [isWin, setIsWin] = useState(false);

  useEffect(() => {
    createMaze(
      boardRef.current,
      props.availableCells,
      styles,
      props.startingPosition,
      props.targetPosition
    );
  }, [props.availableCells, props.startingPosition, props.targetPosition]);

  useEffect(() => {
    setIsWin(moveCharacter(boardRef.current, currentPos.toString(), styles.target));
  }, [currentPos]);

  useEffect(() => {
    if (isWin) {
      let storageData = JSON.parse(localStorage.getItem(props.level)) || [];
      const date = new Date();
      storageData = [
        ...storageData,
        { id: `${date.toDateString()} at ${date.toLocaleTimeString()}`, points: qtyMovements }
      ];
      localStorage.setItem(props.level, JSON.stringify(storageData));
    }
  }, [isWin, props.level, qtyMovements]);

  const handleKeyPress = useCallback(
    (e) => {
      if (qtyMovements > 0 && !isWin) {
        let nextPos;
        const rowLength = props.availableCells.length;
        switch (e.keyCode) {
          case 37: // left
            nextPos = props.availableCells[currentPos[0]][currentPos[1] - 1];
            if (nextPos === 0) {
              setCurrentPos([currentPos[0], currentPos[1] - 1]);
            }
            break;
          case 38: // up
            if (currentPos[0] - 1 >= 0) {
              nextPos = props.availableCells[currentPos[0] - 1][currentPos[1]];
              if (nextPos === 0) {
                setCurrentPos([currentPos[0] - 1, currentPos[1]]);
              }
            }
            break;
          case 39: // right
            nextPos = props.availableCells[currentPos[0]][currentPos[1] + 1];
            if (nextPos === 0) {
              setCurrentPos([currentPos[0], currentPos[1] + 1]);
            }
            break;
          case 40: // down
            if (currentPos[0] + 1 < rowLength) {
              nextPos = props.availableCells[currentPos[0] + 1][currentPos[1]];
              if (nextPos === 0) {
                setCurrentPos([currentPos[0] + 1, currentPos[1]]);
              }
            }
            break;
          default:
            return;
        }
        if (nextPos === 0) {
          setQtyMovements(qtyMovements - 1);
        }
      }
      e.preventDefault();
    },
    [currentPos, isWin, props.availableCells, qtyMovements]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <section className={styles.container} data-testid='board-container'>
      <h1 className='title'>{i18next.t('main:title')}</h1>
      <small className='medium-text'>{i18next.t('main:explanationText')}</small>
      <div ref={boardRef} className={styles.board}>
        <img
          className={styles['character-img']}
          src={props.character}
          alt={i18next.t('main:dog')}
        />
      </div>
      <div className={styles['info-container']}>
        <h6 className='base-text'>
          {i18next.t('main:movesLeft')}
          <strong className={`big-bold-text ${styles.limit}`} data-testid='moves-message'>
            {qtyMovements}
          </strong>
        </h6>
        <h6 className={`big-bold-text ${styles.win}`} data-testid='win-message'>
          {isWin && i18next.t('main:wonMsg')}
        </h6>
        <h6 className={`big-bold-text ${styles.lost}`} data-testid='lose-message'>
          {qtyMovements === 0 && !isWin && i18next.t('main:lostMsg')}
        </h6>
      </div>
      {(isWin || qtyMovements === 0) && (
        <button
          className={`base-text fw-bold button ${styles.button}`}
          type='button'
          onClick={() => props.goToNextStep(2)}
          data-testid='metrics-button'
        >
          {i18next.t('main:metrics')}
        </button>
      )}
    </section>
  );
};

export default Labyrinth;
