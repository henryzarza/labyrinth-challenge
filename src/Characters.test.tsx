import React from 'react';
import { render } from '@testing-library/react';

import Characters, { Props } from './solution/Characters';

describe('Characters', () => {
  let props: Props;
  beforeEach(() => {
    props = {
      goToNextStep: () => {},
      setCharacter: () => {},
      setLevel: () => {},
      isLevelSelected: true
    };
  });

  it('should show next button', () => {
    const { queryByTestId } = render(<Characters {...props} />);
    expect(queryByTestId('next-button')).toBeTruthy();
  });

  it('should not show next button', () => {
    const { queryByTestId } = render(<Characters {...props} isLevelSelected={false} />);
    expect(queryByTestId('next-button')).not.toBeTruthy();
  });
});
