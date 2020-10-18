import i18next from 'i18next';

i18next.init({
  lng: 'en',
  initImmediate: false
});

i18next.addResources('en', 'main', {
  title: 'Labyrinth Challenge',
  apple: 'Apple',
  cat: 'Cat',
  dog: 'Dog',
  flowers: 'Flowers',
  mango: 'Mango',
  tree: 'Tree',
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  wonMsg: 'You won',
  lostMsg: 'You lost',
  score: 'Your high scores',
  playAgain: 'Play again',
  selectCharacter: 'Select Your Character',
  selectLevel: 'Select the level',
  next: "I'm Ready",
  date: 'Date',
  points: 'Points',
  metrics: 'Go To Metrics',
  explanationText: "You can use the keyboard's arrows to move the character",
  movesLeft: 'Moves left:',
  noData: 'No data'
});
