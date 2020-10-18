import React, { useState, useCallback } from 'react';
import i18next from 'i18next';

import RadioBtn from '../RadioBtn';
import { CHARACTERS } from '../../config/constants';
import styles from './styles.module.css';

export interface Props {
  goToNextStep: (step: number) => void;
  setCharacter: (state: string) => void;
  setLevel: (state: any) => void;
  isLevelSelected: boolean;
}

const Characters = (props: Props) => {
  const [selectedCharacter, setSelectedCharacter] = useState(CHARACTERS[0]);

  const goToNext = useCallback(() => {
    props.setCharacter(selectedCharacter.src);
    props.goToNextStep(1);
  }, [props, selectedCharacter.src]);

  return (
    <section className={`fadeInUp ${styles.container}`}>
      <h2 className='small-title'>{i18next.t('main:selectCharacter')}</h2>
      <ul className={styles.list}>
        {CHARACTERS.map((character) => (
          <li
            key={character.name}
            className={`${styles.item} ${
              selectedCharacter.name === character.name ? styles.selected : ''
            }`}
            onClick={() => setSelectedCharacter(character)}
          >
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
      <RadioBtn setLevel={props.setLevel} />
      {selectedCharacter.src && props.isLevelSelected && (
        <button className='base-text fw-bold button' type='button' onClick={goToNext}>
          {i18next.t('main:next')}
        </button>
      )}
    </section>
  );
};

export default Characters;
