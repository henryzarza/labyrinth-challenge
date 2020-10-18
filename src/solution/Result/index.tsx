import React, { useCallback, useState } from 'react';
import i18next from 'i18next';

import RadioBtn from '../RadioBtn';
import styles from './styles.module.css';

export interface Props {
  goToNextStep: (step: number) => void;
  setLevel: (step: any) => void;
}

const Result = (props: Props) => {
  const [data, setData] = useState([]);

  const handleChange = useCallback((value) => {
    const ordered = JSON.parse(localStorage.getItem(value));
    if (ordered) {
      ordered.sort((a: any, b: any) => (b.points > a.points ? 1 : -1));
    }
    setData(ordered);
  }, []);

  const goToNext = useCallback(() => {
    props.setLevel('');
    props.goToNextStep(0);
  }, [props]);

  return (
    <section className={`fadeInRight ${styles.container}`}>
      <h3 className='small-title'>{i18next.t('main:score')}</h3>
      <RadioBtn setLevel={handleChange} />
      <ul className={styles.scores}>
        <li className={styles.item}>
          <span className='base-text'>{i18next.t('main:date')}</span>
          <span className='base-text'>{i18next.t('main:points')}</span>
        </li>
        {data && data.length > 0 ? (
          data.map((el) => (
            <li key={el.id} className={styles.item}>
              <span className='base-text'>{el.id}</span>
              <span className='big-bold-text'>{el.points}</span>
            </li>
          ))
        ) : (
          <h6 className='big-bold-text'>{i18next.t('main:noData')}</h6>
        )}
      </ul>
      <button className='base-text fw-bold button' type='button' onClick={goToNext}>
        {i18next.t('main:playAgain')}
      </button>
    </section>
  );
};

export default Result;
