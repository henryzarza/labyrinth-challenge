import React from 'react';
import i18next from 'i18next';

import RadioBtn from '../RadioBtn';
import { CHARACTERS } from '../../config/constants';
import styles from './styles.module.css';

export interface Props {
  onChange?: number;
}

const Characters = (props: Props) => {
  return (
    <section className={styles.container}>
      <h2 className='small-title'>{i18next.t('main:selectCharacter')}</h2>
      <ul className={styles.list}>
        {CHARACTERS.map((character) => (
          <li key={character.name} className={styles.item}>
            <img
              className={styles['character-img']}
              src={character.src}
              alt={i18next.t(`main:${character.name}`)}
            />
            <h6 className='base-text'>{i18next.t(`main:${character.name}`)}</h6>
          </li>
        ))}
      </ul>
      <h2 className='small-title'>{i18next.t('main:selectLevel')}</h2>
      <RadioBtn />
    </section>
  );
};

export default Characters;
