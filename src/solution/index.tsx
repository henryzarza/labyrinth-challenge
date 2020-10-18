import React, { useState } from 'react';

import { MAZES } from '../config/constants';
import Characters from './Characters';
import Labyrinth from './Labyrinth';
import Result from './Result';

function Solution() {
  const [currentStep, setCurrentStep] = useState(0);
  const [character, setCharacter] = useState('');
  const [level, setLevel] = useState<'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED'>();

  return (
    <main className='main-container'>
      {currentStep === 0 && (
        <Characters
          goToNextStep={setCurrentStep}
          setLevel={setLevel}
          setCharacter={setCharacter}
          isLevelSelected={!!level}
        />
      )}
      {currentStep === 1 && (
        <Labyrinth
          startingPosition={MAZES[level].startingPosition}
          targetPosition={MAZES[level].targetPosition}
          availableCells={MAZES[level].availableCells}
          moveLimit={MAZES[level].moveLimit}
          goToNextStep={setCurrentStep}
          character={character}
          level={level}
        />
      )}
      {currentStep === 2 && <Result goToNextStep={setCurrentStep} setLevel={setLevel} />}
    </main>
  );
}

export default Solution;
