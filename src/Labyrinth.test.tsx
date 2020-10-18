import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Labyrinth, { Props } from './solution/Labyrinth';
import { CHARACTERS, LEVELS } from './config/constants';

describe('Labyrinth', () => {
  let props: Props;
  beforeEach(() => {
    props = {
      goToNextStep: () => {},
      targetPosition: [4, 4],
      availableCells: [
        [0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1],
        [0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0]
      ],
      startingPosition: [0, 0],
      moveLimit: 10,
      character: CHARACTERS[0].src,
      level: LEVELS[0]
    };
  });

  it('should win', () => {
    const { container, getByTestId, queryByTestId } = render(<Labyrinth {...props} />);
    fireEvent.keyDown(container, { key: 'ArrowRight', keyCode: 39 });
    fireEvent.keyDown(container, { key: 'ArrowRight', keyCode: 39 });
    fireEvent.keyDown(container, { key: 'ArrowDown', keyCode: 40 });
    fireEvent.keyDown(container, { key: 'ArrowDown', keyCode: 40 });
    fireEvent.keyDown(container, { key: 'ArrowDown', keyCode: 40 });
    fireEvent.keyDown(container, { key: 'ArrowDown', keyCode: 40 });
    fireEvent.keyDown(container, { key: 'ArrowRight', keyCode: 39 });
    fireEvent.keyDown(container, { key: 'ArrowRight', keyCode: 39 });
    expect(getByTestId('moves-message').textContent).toEqual('2');
    expect(queryByTestId('win-message')).toBeTruthy();
    expect(queryByTestId('lose-message').textContent).not.toBeTruthy();
  });

  it('should lose', () => {
    const { container, getByTestId, queryByTestId } = render(
      <Labyrinth {...props} moveLimit={2} />
    );
    fireEvent.keyDown(container, { key: 'ArrowRight', keyCode: 39 });
    fireEvent.keyDown(container, { key: 'ArrowRight', keyCode: 39 });
    expect(getByTestId('moves-message').textContent).toEqual('0');
    expect(queryByTestId('win-message').textContent).not.toBeTruthy();
    expect(queryByTestId('lose-message')).toBeTruthy();
  });

  it('should show metrics button', () => {
    const { container, getByTestId } = render(<Labyrinth {...props} moveLimit={2} />);
    fireEvent.keyDown(container, { key: 'ArrowRight', keyCode: 39 });
    fireEvent.keyDown(container, { key: 'ArrowRight', keyCode: 39 });
    expect(getByTestId('metrics-button')).toBeTruthy();
  });

  it('should not break when going to undefined position in the top', () => {
    const { container, getByTestId } = render(<Labyrinth {...props} />);
    fireEvent.keyDown(container, { key: 'ArrowTop', keyCode: 38 });
    fireEvent.keyDown(container, { key: 'ArrowTop', keyCode: 38 });
    expect(getByTestId('board-container')).toBeTruthy();
  });

  it('should not break when going to undefined position in the left', () => {
    const { container, getByTestId } = render(<Labyrinth {...props} />);
    fireEvent.keyDown(container, { key: 'ArrowLeft', keyCode: 37 });
    fireEvent.keyDown(container, { key: 'ArrowLeft', keyCode: 37 });
    expect(getByTestId('board-container')).toBeTruthy();
  });

  it('should not break when going to undefined position in the right', () => {
    const { container, getByTestId } = render(<Labyrinth {...props} />);
    fireEvent.keyDown(container, { key: 'ArrowRight', keyCode: 39 });
    fireEvent.keyDown(container, { key: 'ArrowRight', keyCode: 39 });
    fireEvent.keyDown(container, { key: 'ArrowRight', keyCode: 39 });
    fireEvent.keyDown(container, { key: 'ArrowRight', keyCode: 39 });
    fireEvent.keyDown(container, { key: 'ArrowRight', keyCode: 39 });
    fireEvent.keyDown(container, { key: 'ArrowRight', keyCode: 39 });
    fireEvent.keyDown(container, { key: 'ArrowRight', keyCode: 39 });
    expect(getByTestId('board-container')).toBeTruthy();
  });

  it('should not break when going to undefined position in the bottom', () => {
    const { container, getByTestId } = render(<Labyrinth {...props} />);
    fireEvent.keyDown(container, { key: 'ArrowRight', keyCode: 39 });
    fireEvent.keyDown(container, { key: 'ArrowRight', keyCode: 39 });
    fireEvent.keyDown(container, { key: 'ArrowDown', keyCode: 40 });
    fireEvent.keyDown(container, { key: 'ArrowDown', keyCode: 40 });
    fireEvent.keyDown(container, { key: 'ArrowDown', keyCode: 40 });
    fireEvent.keyDown(container, { key: 'ArrowDown', keyCode: 40 });
    fireEvent.keyDown(container, { key: 'ArrowDown', keyCode: 40 });
    fireEvent.keyDown(container, { key: 'ArrowDown', keyCode: 40 });
    expect(getByTestId('board-container')).toBeTruthy();
  });
});
