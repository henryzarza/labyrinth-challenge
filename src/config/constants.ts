import apple from '../assets/apple.png';
import cat from '../assets/cat.png';
import dog from '../assets/dog.png';
import flowers from '../assets/flowers.png';
import mango from '../assets/mango.png';
import tree from '../assets/tree.png';

export const CHARACTERS = [
  {
    src: apple,
    name: 'apple'
  },
  {
    src: cat,
    name: 'cat'
  },
  {
    src: dog,
    name: 'dog'
  },
  {
    src: flowers,
    name: 'flowers'
  },
  {
    src: mango,
    name: 'mango'
  },
  {
    src: tree,
    name: 'tree'
  }
];

export const LEVELS = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'];

export const MAZES = {
  BEGINNER: {
    targetPosition: [4, 4],
    availableCells: [
      [0, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0]
    ],
    startingPosition: [0, 0],
    moveLimit: 10
  },
  INTERMEDIATE: {
    targetPosition: [6, 4],
    availableCells: [
      [1, 1, 1, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 1]
    ],
    startingPosition: [0, 5],
    moveLimit: 16
  },
  ADVANCED: {
    targetPosition: [6, 8],
    availableCells: [
      [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [0, 0, 1, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 1, 1, 0, 0],
      [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 0, 0, 1, 0, 1],
      [0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
      [0, 0, 1, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
    ],
    startingPosition: [4, 3],
    moveLimit: 25
  }
};
