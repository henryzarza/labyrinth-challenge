import React, { useState } from 'react';

import { MAZES } from '../config/constants';
import Characters from './Characters';
import Labyrinth from './Labyrinth';
import Result from './Result';

function Solution() {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentMaze] = useState(MAZES.BEGINNER);

  return (
    <main className='main-container'>
      {currentStep === 0 && <Characters goToNextStep={setCurrentStep} />}
      {currentStep === 1 && (
        <Labyrinth
          startingPosition={currentMaze.startingPosition}
          targetPosition={currentMaze.targetPosition}
          availableCells={currentMaze.availableCells}
          moveLimit={currentMaze.moveLimit}
          goToNextStep={setCurrentStep}
        />
      )}
      {currentStep === 2 && <Result goToNextStep={setCurrentStep} />}
    </main>
  );
}

export default Solution;
