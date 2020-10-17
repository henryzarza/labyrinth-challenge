import i18next from 'i18next';

i18next.init({
  lng: 'en',
  initImmediate: false
});

i18next.addResources('en', 'main', {
  title: 'This is a title',
  apple: 'Apple',
  cat: 'Cat',
  dog: 'Dog',
  flowers: 'Flowers',
  mango: 'Mango',
  tree: 'Tree',
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  winTitle: '¡You win 🙌🥳!',
  loseTitle: 'You lose 😢😩',
  score: 'Your scores',
  playAgain: 'Play again',
  selectCharacter: 'Select Your Character',
  selectLevel: 'Select the level',
  next: "I'm Ready",
  date: 'Date',
  points: 'Points'
});
