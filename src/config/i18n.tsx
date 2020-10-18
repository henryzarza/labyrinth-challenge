import i18next from 'i18next';

i18next.init({
  lng: 'en',
  initImmediate: false
});

i18next.addResources('en', 'main', {
  title: 'This is a title'
});
