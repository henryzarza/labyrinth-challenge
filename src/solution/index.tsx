import React, { useState } from 'react';

// import { MAZES } from '../config/constants';
import Characters from './Characters';
import Labyrinth from './Labyrinth';
import Result from './Result';

function Solution() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <main className='main-container'>
      {currentStep === 0 && <Characters goToNextStep={setCurrentStep} />}
      {currentStep === 1 && <Labyrinth goToNextStep={setCurrentStep} />}
      {currentStep === 2 && <Result goToNextStep={setCurrentStep} />}
    </main>
  );
}

export default Solution;
