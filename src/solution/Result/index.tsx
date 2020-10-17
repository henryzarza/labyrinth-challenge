import React from 'react';
import i18next from 'i18next';

import RadioBtn from '../RadioBtn';
import styles from './styles.module.css';

export interface Props {
  onChange?: number;
}

const Result = (props: Props) => {
  return (
    <section className={styles.container}>
      <h3 className='small-title'>{i18next.t('main:score')}</h3>
      <RadioBtn />
      <ul className={styles.scores}>
        <li className={styles.item}>
          <span className='base-text'>{i18next.t('main:date')}</span>
          <span className='base-text'>{i18next.t('main:points')}</span>
        </li>
        {['1', '2', '3', '4', '5'].map((el) => (
          <li key={el} className={styles.item}>
            <span className='base-text'>16/10/2020 at 21:06</span>
            <span className='big-bold-text'>10</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Result;
