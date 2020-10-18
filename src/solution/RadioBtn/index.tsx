import React, { Fragment } from 'react';
import i18next from 'i18next';

import { LEVELS } from '../../config/constants';
import styles from './styles.module.css';

export interface Props {
  setLevel: (state: string) => void;
}

const RadioBtn = (props: Props) => {
  return (
    <div className={styles['input-container']}>
      {LEVELS.map((level) => (
        <Fragment key={level}>
          <input
            className={styles.input}
            type='radio'
            name='level'
            id={level}
            value={level}
            onChange={(e) => props.setLevel(e.target.value)}
          />
          <label className='base-text fw-bold' htmlFor={level}>
            {i18next.t(`main:${level}`)}
          </label>
        </Fragment>
      ))}
    </div>
  );
};

export default RadioBtn;
